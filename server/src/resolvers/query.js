const {
  getPopular,
  getMovies,
  getGenres,
  getMovieById,
  getReccomendedMovies,
  getCredits,
} = require("../modules/movies/index")

const movies = async (parent, args) =>
  await getPopular(args.page, args.language)

const getSelectedMovies = async (parent, args) => await getMovies()

const genres = async (parent, args) => await getGenres()

const movieById = async (parent, args) => await getMovieById(args._id)

const getRecommended = async (parent, args) => await getReccomendedMovies()

const credits = async (parent, args) =>
  await getCredits(args.movieId, args.language)

module.exports = {
  movies,
  getSelectedMovies,
  genres,
  movieById,
  getRecommended,
  credits,
}
