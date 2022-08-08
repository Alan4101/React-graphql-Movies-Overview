const {model, Schema} = require("mongoose")

const Movies = new Schema({
  title: String,
  poster: String,
  releaseDate: String,
  adult: Boolean,
  movieId: String,
  genres: [String],
  overview: String,
  userDescription: String,
})
module.exports = model("Movie", Movies)