import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    const message = inputValue;

    if (!message) {
      alert("Please Enter Message");
    return;}
    setMessages((currentMessages) => [...currentMessages, message]);
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') sendMessage();
  };

  return (
    <main className="page-shell">
      <section className="chat-card" aria-labelledby="chat-title">
        <div className="card-heading">
          <h1 id="chat-title">⪢ New message ⪡</h1>
        </div>

        <div className="chat-container">
          <label htmlFor="message-input">Your message</label>
          <div className="composer">
            <input
              id="message-input"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
            />
            <button type="button" onClick={sendMessage}>
              Send Message
            </button>
          <button onClick={()=>setMessages([])}>Clear</button>
          </div>
        </div>

        <div className="messages" aria-live="polite" aria-label="Sent messages">
          {messages.map((message, index) => (
            <p className="message" key={`${message}-${index}`}>
              {message}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
