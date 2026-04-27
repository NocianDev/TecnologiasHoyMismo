const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
require("dotenv").config();

const app = express();

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("⚠️ Falta STRIPE_SECRET_KEY en las variables de entorno");
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// CORS
// Por ahora queda abierto como lo tenías para evitar problemas mientras pruebas.
// Después podemos cerrarlo solo a tu dominio.
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend OK");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "Hoy Mismo Tecnología Backend",
  });
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("Origin:", req.headers.origin);
    console.log("Body:", req.body);

    const { plan } = req.body;

    const plans = {
      // PLANES WEB
      web_inicial: {
        name: "Web Inicial",
        description: "Landing page profesional para negocio o servicio.",
        price: 699900,
      },
      web_profesional: {
        name: "Web Profesional",
        description: "Sitio web más completo con secciones comerciales.",
        price: 1099900,
      },
      web_empresarial: {
        name: "Web Empresarial",
        description: "Sitio web multipágina con estructura más avanzada.",
        price: 1699900,
      },

      // Alias temporal por si en algún lado viejo todavía mandas landing
      landing: {
        name: "Landing Page",
        description: "Página profesional para negocio o servicio.",
        price: 699900,
      },

      // OTROS SERVICIOS
      gps: {
        name: "GPS",
        description: "GPS para rastreo de cargamento.",
        price: 399900,
      },
      campana: {
        name: "Campaña digital",
        description: "Campaña de marketing digital para promocionar tu negocio.",
        price: 599900,
      },
      ia: {
        name: "Proyecto IA",
        description: "Solución de inteligencia artificial para tu negocio.",
        price: 1499900,
      },
      chatbot: {
        name: "Chatbot Inicial",
        description: "Bot de atención para sitio o proceso simple.",
        price: 499900,
      },
      api: {
        name: "API / Aplicación",
        description: "Integración base entre sistemas o formularios.",
        price: 999900,
      },
    };

    const selectedPlan = plans[plan];

    if (!selectedPlan) {
      return res.status(400).json({
        error: `Plan no válido: ${plan}`,
        availablePlans: Object.keys(plans),
      });
    }

    console.log("Plan seleccionado:", selectedPlan.name);
    console.log("Precio enviado:", selectedPlan.price);

    const frontendUrl =
      process.env.FRONTEND_URL || "https://www.xn--tecnologahoymismo-kvb.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: selectedPlan.name,
              description: selectedPlan.description,
            },
            unit_amount: selectedPlan.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/cancel`,
      metadata: {
        plan,
        productName: selectedPlan.name,
      },
    });

    console.log("Checkout session creada:", session.id);

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe error completo:", error);

    res.status(500).json({
      error: error.message || "Error interno del servidor",
    });
  }
});

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});