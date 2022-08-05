const axios = require("axios");

const { Movies } = require("./entities/Movies");
const { createUrl } = require("../../utils");
const { GetPopularMovies, GetGenres } = require("../../config/endpoints");

const MoviesSchema = require("../../models/Movies.model");
const { Genres } = require("./entities/Genres");

const getPopular = async (page, language) => {
  const { data } = await axios.get(createUrl(GetPopularMovies,  language , page ));
  return new Movies(data);
};

const getMovies = async () => {
  const data = await MoviesSchema.find({});
  return data;
};
const getMovieById = async (_id) => {
  const movie = await MoviesSchema.findById({_id});
  return movie;
} 
const getGenres = async () => {
  const { data } = await axios.get(createUrl(GetGenres));
  const newData = data.genres.map((item) => new Genres(item));
  return newData;
};
module.exports = {
  getPopular,
  getMovies,
  getMovieById,
  getGenres,
};
