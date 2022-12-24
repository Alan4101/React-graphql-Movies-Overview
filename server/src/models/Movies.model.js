const {model, Schema} = require("mongoose")

const Movies = new Schema({
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
  voteAverage: Number
})
module.exports = model("Movie", Movies)