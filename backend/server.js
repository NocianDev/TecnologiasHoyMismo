const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
require("dotenv").config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// TEMPORAL: abrir CORS para depurar
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend OK");
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("Origin:", req.headers.origin);
    console.log("Body:", req.body);

    const { plan } = req.body;

    const plans = {
  landing: { name: "Landing Page", price: 699900 },
  gps: { name: "GPS", price: 399900 },
  campana: { name: "Campaña digital", price: 599900 },
  ia: { name: "Proyecto IA", price: 1499900 },
  chatbot: { name: "Chatbot Inicial", price: 499900 },
  api: { name: "API / Aplicación", price: 999900 },
};

    const selectedPlan = plans[plan];

    if (!selectedPlan) {
      return res.status(400).json({
        error: `Plan no válido: ${plan}`,
      });
    }

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
            },
            unit_amount: selectedPlan.price,
          },
          quantity: 1,
        },
      ],
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/cancel`,
    });

    console.log("Checkout session creada:", session.id);

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error completo:", error);
    res.status(500).json({
      error: error.message || "Error interno del servidor",
    });
  }
});

app.listen(process.env.PORT || 4242, () => {
  console.log("Servidor corriendo en puerto", process.env.PORT || 4242);
});