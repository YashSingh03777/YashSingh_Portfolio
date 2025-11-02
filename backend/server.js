// ---------- Imports ----------
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

// ---------- Route Imports ----------
import contactRoutes from "./routes/contactRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

// ---------- Config ----------
dotenv.config();
const app = express();
const server = createServer(app);

// ---------- Middleware ----------
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // your frontend domain (e.g. https://yash-portfolio.netlify.app)
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// ---------- API Routes ----------
app.use("/api/contact", contactRoutes);
app.use("/api/questions", questionRoutes);

// ✅ Simple test route (for quick Render check)
app.get("/", (req, res) => {
  res.json({ message: "🚀 Portfolio backend running successfully!" });
});

// ---------- SOCKET.IO SETUP ----------
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`💬 New user connected: ${socket.id}`);

  // User joins chat
  socket.on("join", (payload) => {
    const name = payload?.name || "Anonymous";
    console.log(`👤 ${name} joined the chat`);
    socket.broadcast.emit("server-message", {
      text: `${name} joined the chat`,
      time: new Date().toLocaleTimeString(),
    });
  });

  // Chat message
  socket.on("chat-message", (msg) => {
    console.log(`📨 Message from ${msg.sender}: ${msg.text}`);
    socket.broadcast.emit("chat-message", msg);
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

// ---------- DATABASE CONNECTION ----------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ---------- START SERVER ----------
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("💡 Socket.IO active and listening");
});
