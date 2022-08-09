const {model, Schema} = require("mongoose")

const RecomendedMovies = new Schema({
  title: String,
  poster: String,
  releaseDate: String,
  adult: Boolean,
  movieId: String,
  genres: [String],
  overview: String,
  userDescription: String,
})
module.exports = model("RecomendedMovies", RecomendedMovies)