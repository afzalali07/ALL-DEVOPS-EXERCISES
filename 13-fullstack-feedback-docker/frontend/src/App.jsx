import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");

  async function loadFeedback() {
    const response = await fetch("/api/feedback");
    setItems(await response.json());
  }

  useEffect(() => { loadFeedback().catch(() => setMessage("Could not connect to the API.")); }, []);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const text = new FormData(form).get("message");
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });
    if (!response.ok) { setMessage("Please enter feedback."); return; }
    form.reset();
    setMessage("Thanks for your feedback!");
    loadFeedback();
  }

  return <main>
    <h1>Feedback App</h1>
    <form onSubmit={submit}>
      <textarea name="message" placeholder="Share your feedback..." required />
      <button>Send</button>
    </form>
    <p>{message}</p>
    <h2>Feedback</h2>
    {items.length ? <ul>{items.map((item) => <li key={item.id}>{item.message}</li>)}</ul> : <p>No feedback yet.</p>}
  </main>;
}
