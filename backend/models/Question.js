import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, default: "" }, // your reply
}, { timestamps: true });

export default mongoose.model("Question", questionSchema);
