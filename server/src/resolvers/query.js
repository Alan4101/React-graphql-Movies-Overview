const {getPopular, getMovies, getGenres } = require('../modules/movies/index');

const movies = async (parent, args) => await getPopular(args.page, args.language);

const getSelectedMovies = async (parent, args) => await getMovies();

const genres = async (parent, args) => await getGenres()

module.exports = { 
  movies, 
  getSelectedMovies,
  genres
}