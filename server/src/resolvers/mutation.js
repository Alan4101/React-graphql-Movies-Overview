const Movie = require('../models/Movies.model');
const RecomendedMovies = require('../models/RecomendedMovies.model');

const createMovie = async (_, args) => {
  const newMovie = new Movie({
    title: args.title,
    poster: args.poster,
    releaseDate: args.releaseDate,
    genres: args.genres,
    adult: args.adult,
    movieId: args.movieId,
    overview: args.overview,
    userDescription: args.userDescription,
    voteCount: args.voteCount,
  })
    const movie = await newMovie.save()
    if(!movie){
      return {
        success: false,
        message: "Error",
      }
    }
    return {
      success: true,
      message: "Movie was created.",
      movies: movie
    }
  
}
const deleteMovie = async (parent, {_id})=>{
  return await Movie.findByIdAndRemove(_id)
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
const deleteAll =  async (_, args) =>{
    const data = await Movie.deleteMany({});
    if(!data){
      return {
        success: false,
        message: 'Error'
      }
    }
    return {
      success: true,
      message: 'Success'
    }
 
  }


  
  


module.exports = {  
  createMovie,
   deleteMovie,
   addUserDescription,
   createRecomendedMovies,
   deleteAll,
  }
