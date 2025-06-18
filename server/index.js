const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample in-memory data (temporary instead of MongoDB)
let events = [
  { id: 1, name: "Women's Safety Workshop", date: "2025-07-05" },
  { id: 2, name: "Child Education Drive", date: "2025-07-10" },
];

let donations = [];

app.get("/", (req, res) => {
  res.send("Welcome to the NGO Women's Rights API");
});

// Get all events
app.get("/api/events", (req, res) => {
  res.json(events);
});

// Join an event
app.post("/api/events/join", (req, res) => {
  const { name, eventId } = req.body;
  console.log(`${name} joined event ${eventId}`);
  res.status(200).json({ message: "Joined successfully!" });
});

// Donate
app.post("/api/donate", (req, res) => {
  const { name, amount } = req.body;
  donations.push({ name, amount });
  console.log(`Donation received: ${name} - ₹${amount}`);
  res.status(200).json({ message: "Donation successful!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
