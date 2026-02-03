import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 active:bg-blue-600 active:scale-98 transition-all duration-50"
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
