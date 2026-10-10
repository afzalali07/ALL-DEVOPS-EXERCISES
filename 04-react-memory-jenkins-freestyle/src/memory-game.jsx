import { useState } from "react";

const symbols = ["🍎", "🚀", "🐱", "⭐", "🎈", "🍀"];

function makeCards() {
  return [...symbols, ...symbols]
    .map((symbol, index) => ({ id: index, symbol }))
    .sort(() => Math.random() - 0.5);
}

export default function App() {
  const [cards, setCards] = useState(makeCards);
  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState([]);

  function flip(card) {
    if (open.length === 2 || open.includes(card.id) || matched.includes(card.symbol)) return;
    const next = [...open, card.id];
    setOpen(next);
    if (next.length === 2) {
      const first = cards.find((item) => item.id === next[0]);
      if (first.symbol === card.symbol) {
        setMatched((found) => [...found, card.symbol]);
        setOpen([]);
      } else {
        setTimeout(() => setOpen([]), 700);
      }
    }
  }

  function restart() {
    setCards(makeCards());
    setOpen([]);
    setMatched([]);
  }

  return (
    <main>
      <h1>Memory Match</h1>
      <p>Find all six matching pairs.</p>
      <section className="grid" aria-label="Memory cards">
        {cards.map((card) => (
          <button className="card" key={card.id} onClick={() => flip(card)}>
            {open.includes(card.id) || matched.includes(card.symbol) ? card.symbol : "?"}
          </button>
        ))}
      </section>
      <p>{matched.length === symbols.length ? "You win!" : `Pairs found: ${matched.length} / ${symbols.length}`}</p>
      <button className="restart" onClick={restart}>Play again</button>
    </main>
  );
}
