const axios = require("axios");

const { Movies } = require("./entities/Movies");
const { createUrl } = require("../../utils");
const { GetPopularMovies, GetGenres } = require("../../config/endpoints");

const MoviesSchema = require("../../models/Movies.model");
const { Genres } = require("./entities/Genres");

const getPopular = async (page) => {
  const { data } = await axios.get(createUrl(GetPopularMovies, page, "en-US"));
  return new Movies(data);
};

const getMovies = async () => {
  const data = await MoviesSchema.find({});
  return data;
};

const getGenres = async () => {
  const { data } = await axios.get(createUrl(GetGenres));
  const newData = data.genres.map((item) => new Genres(item));
  return newData;
};
module.exports = {
  getPopular,
  getMovies,
  getGenres,
};
