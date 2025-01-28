import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    chatroom: {
      type: Schema.Types.ObjectId,
      ref: "Chatroom",
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Message = mongoose.model("Message", messageSchema);

export default Message;
