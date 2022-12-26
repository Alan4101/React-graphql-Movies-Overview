import axios from "axios";
import { createUrl } from "./../../utils";
import { Credits, Genres, Movies } from "./entities";

import { GetGenres, GetPopularMovies } from "../../config/endpoints";
import { MovieModel, RecomendedModel } from "../../models";
/**
 *
 * @param {number of page for pagination} page
 * @param {language} language
 * @returns all movies from themoviedb resource
 */
const getPopular = async (page, language) => {
  const { data } = await axios.get(createUrl(GetPopularMovies, language, page));
  return new Movies(data);
};
/**
 *
 * @returns selected movies from mobgodb
 */
const getMovies = async () => {
  const data = await MovieModel.find({});
  return data;
};
/**
 *
 * @param {selected movie id} _id
 * @returns one selected movie
 */
const getMovieById = async (_id) => {
  const movie = await MovieModel.findById({ _id });
  return movie;
};
/**
 *
 * @returns all movies genes
 */
const getGenres = async () => {
  const { data } = await axios.get(createUrl(GetGenres));
  const newData = data.genres.map((item) => new Genres(item));
  return newData;
};
const getRecomendedMovies = async () => {
  return await RecomendedModel.find({});
};
const searchMovieByName = async (query, language) => {
  const { data } = await axios.get(
    `${createUrl(SearchMovie, language)}&query=${query}`
  );
  return new Movies(data);
};
/**
 *
 * @param {selected movieId} movieId
 * @param {*} language
 * @returns all cast
 */
const getCredits = async (movieId, language) => {
  const { data } = await axios.get(
    `${createUrl(`movie/${movieId}/credits?`, language)}`
  );
  return new Credits(data);
};

export {
  getPopular,
  getCredits,
  getRecomendedMovies,
  searchMovieByName,
  getGenres,
  getMovieById,
  getMovies,
};
