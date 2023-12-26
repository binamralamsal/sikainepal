import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  user: { type: String, ref: "User" },
  stars: { type: Number, min: 1, max: 5 },
  description: { type: String, required: false },
});

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true, default: 0 },
    author: { type: String, ref: "User" },
    featuredImage: { type: String, required: true },
    ratings: [ratingSchema],
  },
  {
    timestamps: true,
  }
);

export const Course =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
