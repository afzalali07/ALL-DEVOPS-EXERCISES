import { useState } from "react";

export default function App() {
  const [feedback, setFeedback] = useState("");
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("feedback") || "[]"));

  function submit(event) {
    event.preventDefault();
    if (!feedback.trim()) return;
    const updated = [feedback.trim(), ...items];
    setItems(updated);
    localStorage.setItem("feedback", JSON.stringify(updated));
    setFeedback("");
  }

  return <main>
    <h1>Feedback Box</h1>
    <p>Tell us what you think.</p>
    <form onSubmit={submit}>
      <textarea aria-label="Your feedback" value={feedback} onChange={(event) => setFeedback(event.target.value)} placeholder="Write a short comment..." required />
      <button>Send feedback</button>
    </form>
    <h2>Recent feedback</h2>
    {items.length ? <ul>{items.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}</ul> : <p>No feedback yet.</p>}
  </main>;
}
