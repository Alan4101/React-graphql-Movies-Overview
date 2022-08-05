const Movie = require('../models/Movies.model')

const createMovie = async (parent, args) => {
  const newMovie = new Movie({
    title: args.title,
    poster: args.poster,
    releaseDate: args.releaseDate,
    genres: args.genres,
    adult: args.adult,
    movieId: args.movieId,
    overview: args.overview,
  })
  try {
    const movie = await newMovie.save()
    if(movie){
      return true
    }
  } catch (error) {
    return false
  }
}
const deleteMovie = async (parent, args)=>{
  return await Movie.findByIdAndRemove(args._id)
}
module.exports = {  
  createMovie,
   deleteMovie
  }
