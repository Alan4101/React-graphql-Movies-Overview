import { Schema, model } from "mongoose";

const Movie: Schema = new Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  releaseDate: { type: String, required: true },
  adult: Boolean,
  movieId: { type: String, required: true },
  genres: [String],
  overview: String,
  voteCount: Number,
  userDescription: String,
  backdropPath: { type: String, required: true },
  voteAverage: { type: Number, required: true },
});
const MovieModel = model("Movie", Movie);

export default MovieModel;
