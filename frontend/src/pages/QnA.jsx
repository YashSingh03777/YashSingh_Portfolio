// src/pages/QnA.jsx
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// ✅ Use Vite env variable safely
const SOCKET_SERVER_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export default function QnA() {
  const [connected, setConnected] = useState(false);
  const [socketInstance, setSocketInstance] = useState(null);

  const [name, setName] = useState("");
  const [hasEnteredName, setHasEnteredName] = useState(false);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // { id, sender, text, time, self }
  const messagesRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Setup socket connection
  useEffect(() => {
    const s = io(SOCKET_SERVER_URL, {
      transports: ["websocket"],
      autoConnect: false,
    });

    s.on("connect", () => {
      setConnected(true);
      console.info("✅ Connected to socket server:", s.id);
    });

    s.on("disconnect", () => {
      setConnected(false);
      console.info("⚠️ Disconnected from socket server");
    });

    // Incoming chat message
    s.on("chat-message", (payload) => {
      setMessages((prev) => [
        ...prev,
        {
          id: cryptoRandomId(),
          sender: payload.sender || "Anonymous",
          text: payload.text,
          time: payload.time || new Date().toLocaleTimeString(),
          self: false,
        },
      ]);
    });

    // Optional server messages
    s.on("server-message", (payload) => {
      setMessages((prev) => [
        ...prev,
        {
          id: cryptoRandomId(),
          sender: "Server",
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

  // Helper to generate ids
  function cryptoRandomId() {
    return Math.random().toString(36).slice(2, 9);
  }

  // Send message
  function sendMessage() {
    if (!input.trim()) return;

    const msg = {
      sender: name || "Guest",
      text: input.trim(),
      time: new Date().toLocaleTimeString(),
    };

    // Add local message
    setMessages((prev) => [
      ...prev,
      { id: cryptoRandomId(), sender: msg.sender, text: msg.text, time: msg.time, self: true },
    ]);

    // Emit to server or fallback auto-reply
    if (socketInstance && connected) {
      socketInstance.emit("chat-message", msg);
    } else {
      // Auto-reply (offline mode)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: cryptoRandomId(),
            sender: "Yash (auto-reply)",
            text: "Thanks for your message! I'll get back to you soon.",
            time: new Date().toLocaleTimeString(),
            self: false,
          },
        ]);
      }, 800 + Math.random() * 1200);
    }

    setInput("");
  }

  function clearChat() {
    setMessages([]);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!hasEnteredName) return;
      sendMessage();
    }
  }

  function submitName() {
    if (!name.trim()) return;
    setHasEnteredName(true);

    if (socketInstance && connected) {
      socketInstance.emit("join", { name: name.trim() });
    }

    // Welcome message
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: cryptoRandomId(),
          sender: "Yash (auto-reply)",
          text: `Hi ${name.trim()} — thanks for connecting! How can I help you today?`,
          time: new Date().toLocaleTimeString(),
          self: false,
        },
      ]);
    }, 500);
  }

  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-4">QnA / Chat</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="d-flex align-items-center bg-secondary rounded-top p-3 shadow">
              <img
                src="public/YashChandel.jpg"
                alt="Yash"
                className="rounded-circle me-3"
                style={{ width: 48, height: 48, objectFit: "cover", border: "2px solid #ffc107" }}
              />
              <div className="flex-grow-1">
                <div className="fw-bold">Yash Singh</div>
                <div className="text-muted small">Online — Real-time QnA</div>
              </div>

              <div className="text-end">
                <div className="small text-secondary">Server:</div>
                <div className={`fw-semibold ${connected ? "text-success" : "text-warning"}`}>
                  {connected ? "Connected" : "Offline (auto-reply)"}
                </div>
              </div>
            </div>

            {/* Chat window */}
            <div
              ref={messagesRef}
              className="bg-dark rounded-bottom shadow-lg p-3"
              style={{ height: 420, overflowY: "auto", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              {!hasEnteredName && (
                <div className="mb-3">
                  <label className="form-label">Enter your name to start chat</label>
                  <div className="d-flex">
                    <input
                      className="form-control me-2"
                      placeholder="Your name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && submitName()}
                    />
                    <button className="btn btn-warning" onClick={submitName}>
                      Start
                    </button>
                  </div>
                  <small className="text-secondary">Name is required to identify messages.</small>
                </div>
              )}

              {/* Messages */}
              <div>
                {messages.length === 0 && (
                  <div className="text-center text-secondary mt-5">
                    No messages yet — start the conversation.
                  </div>
                )}
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`d-flex mb-3 ${m.self ? "justify-content-end" : "justify-content-start"}`}
                  >
                    {!m.self && (
                      <div className="me-2">
                        <div
                          className="rounded-circle"
                          style={{
                            width: 36,
                            height: 36,
                            background: "rgba(255,255,255,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                          }}
                        >
                          {m.sender?.charAt(0)?.toUpperCase() || "Y"}
                        </div>
                      </div>
                    )}

                    <div
                      className={`p-2 rounded shadow-sm`}
                      style={{
                        maxWidth: "75%",
                        background: m.self
                          ? "linear-gradient(90deg,#ffc107,#ffd66b)"
                          : "rgba(255,255,255,0.04)",
                        color: m.self ? "#000" : "#e9ecef",
                        borderRadius: 12,
                      }}
                    >
                      <div className="small fw-bold">{m.self ? "You" : m.sender}</div>
                      <div className="mt-1">{m.text}</div>
                      <div className="small text-end text-muted mt-1">{m.time}</div>
                    </div>

                    {m.self && (
                      <div className="ms-2">
                        <div
                          className="rounded-circle"
                          style={{
                            width: 36,
                            height: 36,
                            background: "rgba(0,0,0,0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            border: "2px solid #ffc107",
                          }}
                        >
                          {name?.charAt(0)?.toUpperCase() || "Y"}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Input controls */}
            <div className="d-flex gap-2 mt-3">
              <input
                className="form-control"
                placeholder={hasEnteredName ? "Type a message and press Enter..." : "Enter your name first"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={!hasEnteredName}
              />
              <button className="btn btn-warning" onClick={sendMessage} disabled={!hasEnteredName}>
                Send
              </button>
              <button className="btn btn-outline-light" onClick={clearChat}>
                Clear Chat
              </button>
            </div>

            <div className="text-muted small mt-2">
              Messages are sent in real-time when connected to the server. When offline, messages receive an auto-reply.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
