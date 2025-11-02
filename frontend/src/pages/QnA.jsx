// src/pages/QnA.jsx
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// ✅ Render backend URL
const SOCKET_SERVER_URL =
  import.meta.env.VITE_BACKEND_URL || "https://yashsingh-portfolio.onrender.com";

export default function QnA() {
  const [connected, setConnected] = useState(false);
  const [socketInstance, setSocketInstance] = useState(null);
  const [name, setName] = useState("");
  const [hasEnteredName, setHasEnteredName] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  // ✅ Socket setup
  useEffect(() => {
    const s = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
      autoConnect: false,
    });

    s.on("connect", () => {
      setConnected(true);
      console.log("✅ Connected to socket server:", s.id);
    });

    s.on("disconnect", () => {
      setConnected(false);
      console.warn("⚠️ Disconnected from socket server");
    });

    s.on("chat-message", (payload) => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: payload.sender || "Anonymous",
          text: payload.text,
          time: payload.time || new Date().toLocaleTimeString(),
          self: false,
        },
      ]);
    });

    s.connect();
    setSocketInstance(s);

    return () => {
      s.disconnect();
      setSocketInstance(null);
    };
  }, []);

  // ✅ Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: crypto.randomUUID(),
      sender: name,
      text: input,
      time: new Date().toLocaleTimeString(),
      self: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    if (socketInstance) {
      socketInstance.emit("chat-message", newMessage);
    }
  };

  // ✅ Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // ✅ Initial name input screen
  if (!hasEnteredName) {
    return (
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
        <h2 className="mb-4 text-warning">Enter Your Name to Join Chat</h2>
        <input
          type="text"
          className="form-control w-50 mb-3 text-center"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && setHasEnteredName(true)}
        />
        <button
          className="btn btn-warning px-4"
          onClick={() => name.trim() && setHasEnteredName(true)}
        >
          Join Chat
        </button>
      </div>
    );
  }

  // ✅ Chat UI
  return (
    <div className="container py-5 bg-dark text-light min-vh-100">
      <h2 className="text-center text-warning mb-4">Live Q&A Chat</h2>
      <p className="text-center mb-4">
        {connected ? "🟢 Connected" : "🔴 Disconnected"} as <b>{name}</b>
      </p>

      <div
        className="chat-box border border-secondary rounded p-3 mb-3 bg-black"
        style={{ height: "60vh", overflowY: "auto" }}
        ref={messagesRef}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`d-flex mb-2 ${
              msg.self ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <div
              className={`p-2 rounded ${
                msg.self ? "bg-warning text-dark" : "bg-secondary text-light"
              }`}
              style={{ maxWidth: "70%" }}
            >
              {!msg.self && (
                <small className="d-block fw-bold text-info">{msg.sender}</small>
              )}
              <div>{msg.text}</div>
              <small className="text-muted d-block text-end">{msg.time}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-warning" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
