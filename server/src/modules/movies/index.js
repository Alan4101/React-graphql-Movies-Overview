const axios = require("axios");

const { Movies } = require("./entities/Movies");
const { createUrl } = require("../../utils");
const RecomendedMovies = require('../../models/RecomendedMovies.model');

const { GetPopularMovies, GetGenres, SearchMovie } = require("../../config/endpoints");

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
const getReccomendedMovies = async()=> {
  return await RecomendedMovies.find({})
}
const searchMovieByName = async (query, language) =>{
  const {data } = await axios.get(`${createUrl(SearchMovie, language)}&query=${query}`)
  return new Movies(data);
}
module.exports = {
  getPopular,
  getMovies,
  getMovieById,
  getGenres,
  getReccomendedMovies,
  searchMovieByName
};
