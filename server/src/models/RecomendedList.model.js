import mongoose from "mongoose";

const RecomendedList = new mongoose.Schema(
  {
    title: String,
    createdData: String,
    movies: [
      {
        _id: String,
        title: String,
        poster: String,
        releaseDate: String,
        adult: Boolean,
        movieId: String,
        genres: [String],
        overview: String,
        voteCount: Number,
        userDescription: String,
      },
    ],
  },
  { versionKey: false }
);
const RecomenedModel = mongoose.model("RecomendedList", RecomendedList);
export default RecomenedModel;
