import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },        // Visitor Name
    question: { type: String, required: true },    // User message
    answer: { type: String, default: "" },         // Admin reply

    // ⭐ NEW: Track question status
    status: {
      type: String,
      enum: ["open", "answered"],
      default: "open",
    },

    // ⭐ NEW: Helpful for keeping chat history separate for each user
    conversationId: {
      type: String,
      default: null,
    },

    // ⭐ NEW: Admin reply time
    answeredAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true } // createdAt + updatedAt → helps restore after refresh
);

export default mongoose.model("Question", questionSchema);
