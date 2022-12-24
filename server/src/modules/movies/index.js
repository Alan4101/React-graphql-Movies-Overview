const axios = require("axios");

const { Movies } = require("./entities/Movies");
const { Genres } = require("./entities/Genres");
const { Credits } = require("./entities/Credits");

const { createUrl } = require("../../utils");
const RecomendedMovies = require('../../models/RecomendedMovies.model');

const { GetPopularMovies, GetGenres, SearchMovie } = require("../../config/endpoints");

const MoviesSchema = require("../../models/Movies.model");

/**
 * 
 * @param {number of page for pagination} page 
 * @param {language} language 
 * @returns all movies from themoviedb resource
 */
const getPopular = async (page, language) => {
  const { data } = await axios.get(createUrl(GetPopularMovies,  language , page ));
  return new Movies(data);
};
/**
 * 
 * @returns selected movies from mobgodb
 */
const getMovies = async () => {
  const data = await MoviesSchema.find({});
  return data;
};
/**
 * 
 * @param {selected movie id} _id 
 * @returns one selected movie
 */
const getMovieById = async (_id) => {
  const movie = await MoviesSchema.findById({_id});
  return movie;
} 
/**
 * 
 * @returns all movies genes 
 */
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
/**
 * 
 * @param {selected movieId} movieId 
 * @param {*} language 
 * @returns all cast 
 */
const getCredits = async (movieId, language) =>{
  const {data} = await axios.get(`${createUrl(`movie/${movieId}/credits?`, language)}`)
  return new Credits(data)
}
module.exports = {
  getPopular,
  getMovies,
  getMovieById,
  getGenres,
  getReccomendedMovies,
  searchMovieByName,
  getCredits
};
