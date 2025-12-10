import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },         // user name
    email: { type: String, required: true },        // user email
    message: { type: String, required: true },      // user's message

    // ⭐ track who sent the message
    sender: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // ⭐ group messages per user session
    conversationId: {
      type: String,
      required: true,
    },

    // ⭐ admin reply (optional)
    reply: { type: String, default: "" },

    // ⭐ reply time
    repliedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
