import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      required: true,
    },
    author: { type: Boolean, default: false, required: true },
    coursesEnrolled: {
      type: [{ ref: "Course", type: "ObjectId" }],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
