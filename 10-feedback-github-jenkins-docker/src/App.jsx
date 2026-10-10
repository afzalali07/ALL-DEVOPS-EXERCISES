import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState([]);

  function submit(event) {
    event.preventDefault();
    if (!text.trim()) return;
    setFeedback((items) => [text.trim(), ...items]);
    setText("");
  }

  return <main>
    <h1>Feedback Box</h1>
    <p>Share a quick comment.</p>
    <form onSubmit={submit}>
      <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Write feedback..." required />
      <button>Send feedback</button>
    </form>
    <h2>Feedback</h2>
    {feedback.length ? <ul>{feedback.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}</ul> : <p>No feedback yet.</p>}
  </main>;
}
