const {getPopular, getMovies } = require('../modules/movies/index');

const movies = async (parent, args) => await getPopular(args.page);

const getSelectedMovies = async (parent, args) => await getMovies();

module.exports = { 
  movies, 
  getSelectedMovies
}