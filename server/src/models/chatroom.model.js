import mongoose, { Schema } from "mongoose";

const chatroomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    users: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
const Chatroom = mongoose.model("Chatroom", chatroomSchema);

export default Chatroom;
