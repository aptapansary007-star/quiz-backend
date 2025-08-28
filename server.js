const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("✅ Quiz Backend is Running Successfully!");
});

// Example Quiz API
app.get("/quiz", (req, res) => {
  res.json({
    question: "2 + 2 = ?",
    options: [2, 3, 4, 5],
    answer: 4
  });
});

// Port Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
