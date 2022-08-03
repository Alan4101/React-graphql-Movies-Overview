const Movie = require('../models/Movies.model')

const createMovie = (parent, args) => {
  const newMovie = new Movie({
    title: args.title,
    poster: args.poster,
    releaseDate: args.releaseDate,
    genres: args.genres,
    adult: args.adult,
    movieId: args.movieId
  })
  newMovie.save();
  return newMovie 
}
const deleteMovie = async (parent, args)=>{
  return await Movie.findByIdAndRemove(args._id)
}
module.exports = {  
  createMovie,
   deleteMovie
  }
