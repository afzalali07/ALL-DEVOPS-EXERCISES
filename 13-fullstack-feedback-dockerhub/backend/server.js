const express = require("express");

const app = express();
const feedback = [];
app.use(express.json());
app.use(express.static("public"));

app.get("/api/feedback", (request, response) => {
  response.json(feedback);
});

app.post("/api/feedback", (request, response) => {
  const message = request.body.message;
  if (typeof message !== "string" || !message.trim()) {
    return response.status(400).json({ error: "Feedback message is required" });
  }
  const item = { id: Date.now(), message: message.trim() };
  feedback.unshift(item);
  response.status(201).json(item);
});

app.listen(3000, "0.0.0.0", () => console.log("Feedback API listening on port 3000"));
