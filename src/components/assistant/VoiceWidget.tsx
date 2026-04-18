import { useEffect, useMemo, useRef, useState } from "react";

type VoiceState = "idle" | "recording" | "thinking" | "speaking";
type MicPermissionState = "unknown" | "prompt" | "granted" | "denied";

type Props = {
  assistantName?: string;
  agentId?: string;
};

declare global {
  interface PermissionDescriptor {
    name: PermissionName | "microphone";
  }
}

const pulseKeyframes = `
@keyframes hmVoicePulse {
  0% { transform: scale(1); opacity: 0.92; }
  50% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 0.92; }
}

@keyframes hmVoiceBars {
  0% { transform: scaleY(0.4); opacity: 0.6; }
  50% { transform: scaleY(1); opacity: 1; }
  100% { transform: scaleY(0.4); opacity: 0.6; }
}
`;

function VoiceBars({ active }: { active: boolean }) {
  const bars = new Array(7).fill(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "5px",
        height: "48px",
      }}
    >
      {bars.map((_, i) => (
        <div
          key={i}
          style={{
            width: "7px",
            height: `${16 + (i % 3) * 8}px`,
            borderRadius: "999px",
            background: "linear-gradient(180deg, #facc15, #f59e0b)",
            transformOrigin: "bottom",
            animation: active
              ? `hmVoiceBars ${0.85 + i * 0.08}s ease-in-out infinite`
              : "none",
            opacity: active ? 1 : 0.4,
          }}
        />
      ))}
    </div>
  );
}

function StatusText({ state }: { state: VoiceState }) {
  const text = useMemo(() => {
    switch (state) {
      case "recording":
        return "Grabando...";
      case "thinking":
        return "Procesando...";
      case "speaking":
        return "Hablando...";
      default:
        return "Lista para hablar";
    }
  }, [state]);

  return (
    <div
      style={{
        fontSize: "14px",
        color: "#64748b",
        fontWeight: 700,
      }}
    >
      {text}
    </div>
  );
}

function normalizeSpokenText(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()¿?¡!]/g, "")
    .replace(/\s+/g, " ");
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
}

export default function VoiceWidget({
  assistantName = "HoyMismo Voice",
  agentId = "general",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [callActive, setCallActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [lastResponse, setLastResponse] = useState(
    "Aquí aparecerá la respuesta del asistente."
  );
  const [unsupported, setUnsupported] = useState(false);

  const [autoContinue, setAutoContinue] = useState(true);
  const [isBusy, setIsBusy] = useState(false);

  const [micPermission, setMicPermission] =
    useState<MicPermissionState>("unknown");
  const [showPermissionScreen, setShowPermissionScreen] = useState(true);

  const [activeAgentId, setActiveAgentId] = useState(agentId);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const speakingRef = useRef(false);
  const stoppedRef = useRef(false);
  const callActiveRef = useRef(false);
  const autoContinueRef = useRef(true);
  const busyRef = useRef(false);
  const lastAcceptedTranscriptRef = useRef("");
  const relistenTimerRef = useRef<number | null>(null);

  const silenceMonitorRafRef = useRef<number | null>(null);
  const analyserContextRef = useRef<AudioContext | null>(null);
  const analyserSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);

  const conversationIdRef = useRef<string>(
    `voice-widget-${Date.now()}-${Math.random().toString(36).slice(2)}`
  );

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = pulseKeyframes;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setUnsupported(true);
    }
  }, []);

  useEffect(() => {
    callActiveRef.current = callActive;
  }, [callActive]);

  useEffect(() => {
    autoContinueRef.current = autoContinue;
  }, [autoContinue]);

  useEffect(() => {
    busyRef.current = isBusy;
  }, [isBusy]);

  useEffect(() => {
    setActiveAgentId(agentId);
  }, [agentId]);

  useEffect(() => {
    if (!callActive) return;

    const timer = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [callActive]);

  useEffect(() => {
    let mounted = true;

    async function checkPermission() {
      try {
        if (!navigator.permissions?.query) return;

        const status = await navigator.permissions.query({
          name: "microphone",
        } as PermissionDescriptor);

        if (!mounted) return;

        const state = status.state as MicPermissionState;
        setMicPermission(
          state === "granted" || state === "denied" || state === "prompt"
            ? state
            : "unknown"
        );

        status.onchange = () => {
          const next = status.state as MicPermissionState;
          setMicPermission(
            next === "granted" || next === "denied" || next === "prompt"
              ? next
              : "unknown"
          );
        };
      } catch {}
    }

    checkPermission();

    return () => {
      mounted = false;
    };
  }, [isOpen]);

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.hidden) {
        hardStopEverything();
        setCallActive(false);
        callActiveRef.current = false;
      }
    }

    function handlePageHide() {
      hardStopEverything();
      setCallActive(false);
      callActiveRef.current = false;
    }

    window.addEventListener("pagehide", handlePageHide);
    window.addEventListener("beforeunload", handlePageHide);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("beforeunload", handlePageHide);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      hardStopEverything();
    };
  }, []);

  function formatTime(totalSeconds: number) {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function clearSilenceMonitor() {
    if (silenceMonitorRafRef.current) {
      cancelAnimationFrame(silenceMonitorRafRef.current);
      silenceMonitorRafRef.current = null;
    }

    try {
      analyserSourceRef.current?.disconnect();
    } catch {}

    try {
      analyserNodeRef.current?.disconnect();
    } catch {}

    try {
      analyserContextRef.current?.close();
    } catch {}

    analyserSourceRef.current = null;
    analyserNodeRef.current = null;
    analyserContextRef.current = null;
  }

  function stopRecorder() {
    clearSilenceMonitor();

    if (recorderRef.current) {
      try {
        if (recorderRef.current.state !== "inactive") {
          recorderRef.current.stop();
        }
      } catch {}
      recorderRef.current = null;
    }
  }

  function stopStream() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }

  function cleanupSpeech() {
    try {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current.currentTime = 0;
      }
    } catch {}

    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }

    audioElementRef.current = null;
    speakingRef.current = false;
  }

  function clearRelistenTimer() {
    if (relistenTimerRef.current) {
      window.clearTimeout(relistenTimerRef.current);
      relistenTimerRef.current = null;
    }
  }

  function hardStopEverything() {
    clearRelistenTimer();
    stopRecorder();
    stopStream();
    cleanupSpeech();
    setIsBusy(false);
    busyRef.current = false;
    speakingRef.current = false;
    setVoiceState("idle");
  }

  function scheduleRelisten(delay = 1800) {
    clearRelistenTimer();

    relistenTimerRef.current = window.setTimeout(() => {
      if (stoppedRef.current) return;
      if (!callActiveRef.current) return;
      if (!autoContinueRef.current) return;
      if (speakingRef.current) return;
      if (busyRef.current) return;

      void startAudioRecording();
    }, delay);
  }

  function endCall() {
    stoppedRef.current = true;
    callActiveRef.current = false;
    hardStopEverything();
    setCallActive(false);
    setSeconds(0);
    setTranscript("");
    setLastResponse("La llamada terminó.");
  }

  function shouldIgnoreTranscript(rawText: string) {
    const normalized = normalizeSpokenText(rawText);

    if (!normalized || normalized.length < 2) {
      return true;
    }

    const previous = lastAcceptedTranscriptRef.current;

    if (normalized === previous) {
      return true;
    }

    if (
      previous &&
      (normalized.includes(previous) || previous.includes(normalized)) &&
      normalized.length < 10
    ) {
      return true;
    }

    lastAcceptedTranscriptRef.current = normalized;
    return false;
  }

  async function safeFetchJson(
    url: string,
    options: RequestInit,
    timeoutMs = 30000
  ) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      return { res, data };
    } finally {
      clearTimeout(timer);
    }
  }

  async function speakText(text: string, voiceAgentId?: string) {
    if (!text?.trim()) return;

    const apiUrl =
      import.meta.env.VITE_ASSISTANT_API_URL?.replace(/\/+$/, "") ||
      "http://localhost:3000";

    const tenantId = import.meta.env.VITE_TENANT_ID;

    speakingRef.current = true;
    setVoiceState("speaking");

    try {
      if (audioElementRef.current) {
        try {
          audioElementRef.current.pause();
          audioElementRef.current.currentTime = 0;
        } catch {}
      }

      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }

      const response = await fetch(`${apiUrl}/voice/speak`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-tenant-id": tenantId || "",
          "x-client-type": isMobileDevice() ? "mobile" : "desktop",
        },
        body: JSON.stringify({
          text,
          tenantId,
          agentId: voiceAgentId || activeAgentId,
          clientType: isMobileDevice() ? "mobile" : "desktop",
        }),
      });

      if (!response.ok) {
        throw new Error(`Error /voice/speak (${response.status})`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      audioUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioElementRef.current = audio;

      await new Promise<void>((resolve, reject) => {
        audio.onended = () => resolve();
        audio.onerror = () =>
          reject(new Error("No se pudo reproducir el audio."));
        audio.play().catch(reject);
      });
    } finally {
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
      audioElementRef.current = null;
      speakingRef.current = false;
    }
  }

  async function sendVoiceTextToAssistant(text: string) {
    if (busyRef.current) return;

    setIsBusy(true);
    busyRef.current = true;
    setVoiceState("thinking");

    try {
      const apiUrl =
        import.meta.env.VITE_ASSISTANT_API_URL?.replace(/\/+$/, "") ||
        "http://localhost:3000";

      const tenantId = import.meta.env.VITE_TENANT_ID;
      const clientType = isMobileDevice() ? "mobile" : "desktop";

      const { res, data } = await safeFetchJson(
        `${apiUrl}/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-tenant-id": tenantId || "",
            "x-client-type": clientType,
          },
          body: JSON.stringify({
            message: text,
            conversationId: conversationIdRef.current,
            tenantId,
            channel: "voice",
            agentId: activeAgentId,
            clientType,
          }),
        },
        35000
      );

      if (!res.ok) {
        throw new Error(data?.error || `Error /chat (${res.status})`);
      }

      if (data?.agentId) {
        setActiveAgentId(data.agentId);
      }

      const reply =
        data?.reply || "No se recibió una respuesta válida del asistente.";

      setLastResponse(reply);

      await speakText(
        data?.ttsText || reply,
        data?.voiceAgent || data?.agentId || activeAgentId
      );

      setIsBusy(false);
      busyRef.current = false;

      if (
        callActiveRef.current &&
        autoContinueRef.current &&
        !stoppedRef.current
      ) {
        scheduleRelisten(isMobileDevice() ? 2400 : 2200);
      } else {
        setVoiceState("idle");
      }
    } catch (error: any) {
      console.error(error);
      setVoiceState("idle");
      setIsBusy(false);
      busyRef.current = false;

      setLastResponse(
        error?.name === "AbortError"
          ? "La respuesta tardó demasiado."
          : error?.message || "Error conectando con el asistente."
      );

      if (
        callActiveRef.current &&
        autoContinueRef.current &&
        !stoppedRef.current
      ) {
        scheduleRelisten(isMobileDevice() ? 2600 : 2400);
      }
    }
  }

  async function transcribeAudioBlob(blob: Blob) {
    if (busyRef.current) return;

    setIsBusy(true);
    busyRef.current = true;
    setVoiceState("thinking");

    try {
      const apiUrl =
        import.meta.env.VITE_ASSISTANT_API_URL?.replace(/\/+$/, "") ||
        "http://localhost:3000";

      const tenantId = import.meta.env.VITE_TENANT_ID;
      const clientType = isMobileDevice() ? "mobile" : "desktop";

      const formData = new FormData();
      formData.append(
        "audio",
        blob,
        `voice.${blob.type.includes("mp4") ? "m4a" : "webm"}`
      );
      formData.append("tenantId", tenantId || "");
      formData.append("agentId", activeAgentId);
      formData.append("clientType", clientType);

      const { res, data } = await safeFetchJson(
        `${apiUrl}/voice/transcribe`,
        {
          method: "POST",
          headers: {
            "x-tenant-id": tenantId || "",
            "x-client-type": clientType,
          },
          body: formData,
        },
        60000
      );

      if (!res.ok) {
        throw new Error(data?.error || `Error /voice/transcribe (${res.status})`);
      }

      const text = data?.transcript?.trim() || "";
      setTranscript(text);

      if (!text || shouldIgnoreTranscript(text)) {
        setIsBusy(false);
        busyRef.current = false;
        setVoiceState("idle");

        if (
          callActiveRef.current &&
          autoContinueRef.current &&
          !stoppedRef.current
        ) {
          scheduleRelisten(isMobileDevice() ? 1800 : 1600);
        }
        return;
      }

      setIsBusy(false);
      busyRef.current = false;

      await sendVoiceTextToAssistant(text);
    } catch (error: any) {
      console.error("Error transcribiendo audio:", error);
      setIsBusy(false);
      busyRef.current = false;
      setVoiceState("idle");
      setLastResponse(error?.message || "No se pudo transcribir el audio.");

      if (
        callActiveRef.current &&
        autoContinueRef.current &&
        !stoppedRef.current
      ) {
        scheduleRelisten(isMobileDevice() ? 2400 : 2200);
      }
    }
  }

  async function requestMicPermissionSilently() {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: false,
        autoGainControl: false,
        channelCount: 1,
      },
    });
    setMicPermission("granted");
    return stream;
  }

  async function startAudioRecording() {
    if (busyRef.current || speakingRef.current) return;

    try {
      if (recorderRef.current && recorderRef.current.state !== "inactive") {
        try {
          recorderRef.current.stop();
        } catch {}
      }

      stopRecorder();
      stopStream();

      const stream = await requestMicPermissionSilently();
      streamRef.current = stream;
      setShowPermissionScreen(false);
      audioChunksRef.current = [];
      setTranscript("");

      let mimeType = "";
      if (typeof MediaRecorder !== "undefined") {
        if (MediaRecorder.isTypeSupported?.("audio/webm;codecs=opus")) {
          mimeType = "audio/webm;codecs=opus";
        } else if (MediaRecorder.isTypeSupported?.("audio/mp4")) {
          mimeType = "audio/mp4";
        } else if (MediaRecorder.isTypeSupported?.("audio/webm")) {
          mimeType = "audio/webm";
        }
      }

      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      recorderRef.current = recorder;

      const AudioContextCtor =
        window.AudioContext || (window as any).webkitAudioContext;

      let audioContext: AudioContext | null = null;
      let source: MediaStreamAudioSourceNode | null = null;
      let analyser: AnalyserNode | null = null;
      let dataArray: Uint8Array<ArrayBuffer> | null = null;

      if (AudioContextCtor) {
        audioContext = new AudioContextCtor();
        source = audioContext.createMediaStreamSource(stream);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);
        dataArray = new Uint8Array(new ArrayBuffer(analyser.fftSize));

        analyserContextRef.current = audioContext;
        analyserSourceRef.current = source;
        analyserNodeRef.current = analyser;
      }

      let startedAt = 0;
      let silenceStartedAt: number | null = null;

      const isMobile = isMobileDevice();
      const MIN_RECORD_MS = isMobile ? 2200 : 2600;
      const MAX_RECORD_MS = isMobile ? 18000 : 22000;
      const END_SILENCE_MS = isMobile ? 4200 : 5200;
      const SILENCE_THRESHOLD = isMobile ? 4 : 3;

      function stopAndCleanup() {
        clearSilenceMonitor();

        try {
          if (recorder.state === "recording") {
            recorder.stop();
          }
        } catch {}
      }

      function monitorSilence() {
        if (!callActiveRef.current || stoppedRef.current) {
          stopAndCleanup();
          return;
        }

        if (recorder.state !== "recording") return;

        const now = Date.now();
        const elapsed = now - startedAt;

        if (elapsed >= MAX_RECORD_MS) {
          stopAndCleanup();
          return;
        }

        if (analyser && dataArray) {
          analyser.getByteTimeDomainData(dataArray);

          let sum = 0;
          for (let i = 0; i < dataArray.length; i += 1) {
            sum += Math.abs(dataArray[i] - 128);
          }

          const average = sum / dataArray.length;

          if (average < SILENCE_THRESHOLD) {
            if (silenceStartedAt === null) {
              silenceStartedAt = now;
            }

            const silenceElapsed = now - silenceStartedAt;

            if (elapsed >= MIN_RECORD_MS && silenceElapsed >= END_SILENCE_MS) {
              stopAndCleanup();
              return;
            }
          } else {
            silenceStartedAt = null;
          }
        }

        silenceMonitorRafRef.current = requestAnimationFrame(monitorSilence);
      }

      recorder.onstart = () => {
        startedAt = Date.now();
        silenceStartedAt = null;
        setVoiceState("recording");

        window.setTimeout(() => {
          silenceMonitorRafRef.current = requestAnimationFrame(monitorSilence);
        }, 250);
      };

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        clearSilenceMonitor();

        const chunks = audioChunksRef.current;
        audioChunksRef.current = [];
        stopStream();

        if (!chunks.length) {
          setVoiceState("idle");
          scheduleRelisten(1800);
          return;
        }

        const blob = new Blob(chunks, {
          type: recorder.mimeType || "audio/webm",
        });

        await transcribeAudioBlob(blob);
      };

      recorder.onerror = (event: any) => {
        console.error("MediaRecorder error:", event);
        clearSilenceMonitor();
        stopStream();
        setVoiceState("idle");
        setLastResponse("El navegador falló al grabar el audio.");
        scheduleRelisten(2400);
      };

      recorder.start();
    } catch (error: any) {
      console.error("Error al acceder al micrófono:", error);

      if (error?.name === "NotAllowedError") {
        setMicPermission("denied");
        setLastResponse(
          "El micrófono está bloqueado. Permítelo en la configuración del navegador."
        );
      } else if (error?.name === "NotFoundError") {
        setLastResponse("No se encontró un micrófono disponible.");
      } else {
        setLastResponse("No se pudo acceder al micrófono.");
      }

      setVoiceState("idle");
      setShowPermissionScreen(true);
    }
  }

  async function activateMicrophone() {
    try {
      const stream = await requestMicPermissionSilently();
      stream.getTracks().forEach((track) => track.stop());
      setMicPermission("granted");
      setShowPermissionScreen(false);
      setLastResponse("Micrófono activado. Ya puedes iniciar la llamada.");
    } catch (error: any) {
      if (error?.name === "NotAllowedError") {
        setMicPermission("denied");
        setLastResponse(
          "El permiso fue bloqueado. Permítelo manualmente en el navegador para continuar."
        );
      } else {
        setLastResponse("No se pudo activar el micrófono.");
      }
      setShowPermissionScreen(true);
    }
  }

  function startCall() {
    if (unsupported) {
      alert("Tu dispositivo no soporta esta experiencia de voz.");
      return;
    }

    stoppedRef.current = false;
    callActiveRef.current = true;
    setCallActive(true);
    setSeconds(0);
    setTranscript("");
    setLastResponse(`La llamada con ${assistantName} ha comenzado.`);
    setShowPermissionScreen(false);
    lastAcceptedTranscriptRef.current = "";

    void startAudioRecording();
  }

  const permissionHelp =
    micPermission === "denied"
      ? "Tu navegador bloqueó el micrófono. Actívalo en la configuración del sitio y vuelve a abrir esta ventana."
      : `Para comenzar, permite el uso del micrófono. Después podrás hablar con ${assistantName} y, si dejas la conversación continua encendida, seguirá escuchando automáticamente.`;

  const orbColor =
    voiceState === "recording"
      ? "linear-gradient(135deg, #22c55e, #16a34a)"
      : voiceState === "thinking"
      ? "linear-gradient(135deg, #60a5fa, #2563eb)"
      : voiceState === "speaking"
      ? "linear-gradient(135deg, #facc15, #f59e0b)"
      : "linear-gradient(135deg, #e2e8f0, #cbd5e1)";

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "90px",
            width: "min(390px, calc(100vw - 24px))",
            height: "min(690px, calc(100vh - 120px))",
            background: "#ffffff",
            borderRadius: "24px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 10000,
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          <div
            style={{
              padding: "16px 18px",
              background: "linear-gradient(135deg, #facc15, #f59e0b)",
              color: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px" }}>
                {assistantName}
              </div>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>
                Asistente de voz
              </div>
            </div>

            <button
              onClick={() => {
                endCall();
                setIsOpen(false);
              }}
              style={{
                background: "rgba(255,255,255,0.45)",
                border: "none",
                borderRadius: "10px",
                width: "34px",
                height: "34px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 700,
              }}
              aria-label="Cerrar voz"
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "22px 18px",
              background: "linear-gradient(180deg, #fffdf7 0%, #fffaf2 100%)",
              display: "grid",
              gridTemplateRows: "auto auto auto auto 1fr auto",
              justifyItems: "center",
              gap: "16px",
              textAlign: "center",
              overflowY: "auto",
            }}
          >
            {showPermissionScreen && !callActive ? (
              <div
                style={{
                  width: "100%",
                  alignSelf: "center",
                  display: "grid",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "116px",
                    height: "116px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    background: "linear-gradient(135deg, #facc15, #f59e0b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                    boxShadow: "0 18px 36px rgba(245, 158, 11, 0.24)",
                  }}
                >
                  🎙️
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 900,
                      color: "#0f172a",
                      marginBottom: "10px",
                    }}
                  >
                    Activa el micrófono
                  </div>
                  <div
                    style={{
                      color: "#475569",
                      lineHeight: 1.7,
                    }}
                  >
                    {permissionHelp}
                  </div>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                    borderRadius: "16px",
                    padding: "14px",
                    textAlign: "left",
                    color: "#334155",
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Consejo:</strong> habla normal y espera un momento al terminar la frase. Ya no necesitas colgar para que se transcriba.
                </div>

                <button
                  onClick={activateMicrophone}
                  style={{
                    border: "none",
                    borderRadius: "999px",
                    padding: "14px 22px",
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    color: "#ffffff",
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: "0 14px 28px rgba(34, 197, 94, 0.22)",
                  }}
                >
                  Activar micrófono
                </button>

                {micPermission === "granted" && (
                  <button
                    onClick={startCall}
                    style={{
                      border: "none",
                      borderRadius: "999px",
                      padding: "14px 22px",
                      background: "linear-gradient(135deg, #facc15, #f59e0b)",
                      color: "#111827",
                      fontWeight: 800,
                      cursor: "pointer",
                      boxShadow: "0 14px 28px rgba(245, 158, 11, 0.22)",
                    }}
                  >
                    Iniciar llamada
                  </button>
                )}
              </div>
            ) : (
              <>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "#0f172a",
                  }}
                >
                  {formatTime(seconds)}
                </div>

                <div
                  style={{
                    width: "132px",
                    height: "132px",
                    borderRadius: "50%",
                    background: orbColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#111827",
                    fontSize: "40px",
                    fontWeight: 900,
                    boxShadow: "0 22px 45px rgba(15, 23, 42, 0.18)",
                    animation:
                      callActive && voiceState !== "idle"
                        ? "hmVoicePulse 1.8s ease-in-out infinite"
                        : "none",
                  }}
                >
                  AI
                </div>

                <StatusText state={voiceState} />
                <VoiceBars active={callActive && voiceState !== "idle"} />

                {unsupported ? (
                  <div
                    style={{
                      width: "100%",
                      background: "#fee2e2",
                      color: "#991b1b",
                      border: "1px solid #fecaca",
                      borderRadius: "14px",
                      padding: "12px 14px",
                    }}
                  >
                    Tu dispositivo no soporta esta experiencia de voz.
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      display: "grid",
                      gap: "12px",
                      alignSelf: "start",
                    }}
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(15, 23, 42, 0.06)",
                        borderRadius: "16px",
                        padding: "14px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#64748b",
                          marginBottom: "8px",
                        }}
                      >
                        Transcripción
                      </div>
                      <div
                        style={{
                          color: "#334155",
                          lineHeight: 1.6,
                          minHeight: "24px",
                        }}
                      >
                        {transcript || "Aún no hay voz detectada."}
                      </div>
                    </div>

                    <div
                      style={{
                        background: "#fff7cc",
                        border: "1px solid rgba(250, 204, 21, 0.3)",
                        borderRadius: "16px",
                        padding: "14px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 800,
                          color: "#92400e",
                          marginBottom: "8px",
                        }}
                      >
                        Respuesta
                      </div>
                      <div
                        style={{
                          color: "#334155",
                          lineHeight: 1.6,
                          minHeight: "24px",
                        }}
                      >
                        {lastResponse}
                      </div>
                    </div>
                  </div>
                )}

                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gap: "10px",
                    paddingBottom: "6px",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "#475569",
                      fontWeight: 700,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={autoContinue}
                      onChange={(e) => setAutoContinue(e.target.checked)}
                    />
                    Conversación continua
                  </label>

                  {!callActive ? (
                    <button
                      onClick={startCall}
                      disabled={isBusy}
                      style={{
                        border: "none",
                        borderRadius: "999px",
                        padding: "14px 22px",
                        background: "linear-gradient(135deg, #22c55e, #16a34a)",
                        color: "#ffffff",
                        fontWeight: 800,
                        cursor: isBusy ? "not-allowed" : "pointer",
                        opacity: isBusy ? 0.7 : 1,
                        boxShadow: "0 14px 28px rgba(34, 197, 94, 0.22)",
                      }}
                    >
                      Iniciar llamada
                    </button>
                  ) : (
                    <button
                      onClick={endCall}
                      style={{
                        border: "none",
                        borderRadius: "999px",
                        padding: "14px 22px",
                        background: "#ef4444",
                        color: "#ffffff",
                        fontWeight: 800,
                        cursor: "pointer",
                        boxShadow: "0 14px 28px rgba(239, 68, 68, 0.22)",
                      }}
                    >
                      Colgar
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          right: "92px",
          bottom: "20px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 18px 40px rgba(34, 197, 94, 0.35)",
          zIndex: 10000,
        }}
        aria-label="Abrir voz"
        title="Abrir asistente de voz"
      >
        🎙️
      </button>
    </>
  );
}