import mongoose from "mongoose";

const Movie = new mongoose.Schema(
  {
    title: String,
    poster: String,
    releaseDate: String,
    adult: Boolean,
    movieId: String,
    genres: [String],
    overview: String,
    voteCount: Number,
    userDescription: String,
    backdropPath: String,
    voteAverage: Number,
    sequenceNumber: Number,
  },
  { versionKey: false }
);
const MovieModel = mongoose.model("Movie", Movie);

export { MovieModel };
