const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
require("dotenv").config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: "https://hoymismotecnología.com",
  })
);

app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { plan } = req.body;

    const plans = {
      landing: {
        name: "Landing Page",
        price: 499900,
      },
      gps: {
        name: "GPS",
        price: 899900,
      },
      campana: {
        name: "Campaña digital",
        price: 899900,
      },
      ia: {
        name: "Proyecto IA",
        price: 899900,
      },
      chatbot: {
        name: "Chatbot Inicial",
        price: 899900,
      },
      api: {
        name: "API / Aplicación",
        price: 699900,
      },
    };

    const selectedPlan = plans[plan];

    if (!selectedPlan) {
      return res.status(400).json({ error: "Plan no válido" });
    }

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
      success_url: "https://hoymismotecnología.com/success?session_id={CHECKOUT_SESSION_ID}",
cancel_url: "https://hoymismotecnología.com/cancel",
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({
      error: error.message || "Error interno del servidor",
    });
  }
});

app.listen(process.env.PORT || 4242, () => {
  console.log("Servidor corriendo");
});