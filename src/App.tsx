import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import IA from "./pages/IA";
import APIs from "./pages/APIs";
import Chatbots from "./pages/Chatbots";
import Contacto from "./pages/Contacto";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/apis" element={<APIs />} />
        <Route path="/chatbots" element={<Chatbots />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App;