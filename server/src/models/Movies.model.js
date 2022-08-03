const {model, Schema} = require("mongoose")

// const Movies = new Schema({
//   title: String,
//   poster: String,
//   releaseDate: String,
//   genres: [{id: String, name: String}],
//   runtime: Number,
//   adult: Boolean,
//   overview: String,
//   originalLanguage: String,
//   backdropPath: String,
//   voteCount: Number,
//   video: Boolean,
//   voteAverage: Number,
// })
const Movies = new Schema({
  title: String,
  poster: String,
  releaseDate: String,
  genres: String,
  adult: Boolean,
  movieId: String,
})
module.exports = model("Movie", Movies)