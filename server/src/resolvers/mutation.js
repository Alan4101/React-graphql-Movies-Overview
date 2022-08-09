const Movie = require('../models/Movies.model');
const RecomendedMovies = require('../models/RecomendedMovies.model');

const createMovie = async (parent, args) => {
  const newMovie = new Movie({
    title: args.title,
    poster: args.poster,
    releaseDate: args.releaseDate,
    genres: args.genres,
    adult: args.adult,
    movieId: args.movieId,
    overview: args.overview,
    userDescription: args.userDescription,
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
const addUserDescription = async (parent, args) => {
  return await Movie.findByIdAndUpdate(args._id, {userDescription: args.userDescription})
}

const createRecomendedMovies = async (parent, args) => {
  const data = new RecomendedMovies({
    title: args.title,
    createdData: args.createdData,
    movies: args.movies
  }) 
return await data.save()
}

module.exports = {  
  createMovie,
   deleteMovie,
   addUserDescription,
   createRecomendedMovies,
  }
