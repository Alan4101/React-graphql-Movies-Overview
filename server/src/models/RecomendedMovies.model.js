const {model, Schema} = require("mongoose")
const Movie = require('./Movies.model');

const RecomendedMovies = new Schema({
  title: String,
  createdData: String,
  movies: [{
    _id: String,
    title: String,
    poster: String,
    releaseDate: String,
    adult: Boolean,
    movieId: String,
    genres: [String],
    overview: String,
    userDescription: String,
  }],
},{versionKey: false})
module.exports = model("RecomendedMovies", RecomendedMovies)