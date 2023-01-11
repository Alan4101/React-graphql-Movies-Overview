import axios from "axios";

import MongoService from "./mongo.service"

import { MovieModel } from "../models";
import { Movies , Genres} from './../entities';

import { createUrl } from '../utils/utils';

import { GetGenres, GetPopularMovies } from './../config/endpoints';

const moviesService = new MongoService(MovieModel);

/**
 * @param {number of page for pagination} page
 * @param {language} language
 * @returns all movies from themoviedb resource
 */
const getPopular = async (page, language) => {
  const { data } = await axios.get(createUrl(GetPopularMovies, language, page));
  return new Movies(data);
};

/**
 * @returns selected movies from mobgodb
 */
const getAllSelectedMovies = async () => await moviesService.getAll();

/**
 * @param {selected movie id} _id
 * @returns one selected movie
 */
const getMovieById = async (_id) => moviesService.getById(_id);

/**
 * @returns all movies genes
 */
const getGenres = async () => {
  const { data } = await axios.get(createUrl(GetGenres));
  const newData = data.genres.map((item) => new Genres(item));
  return newData;
};

const searchMovieByName = async (query, language) => {
  const { data } = await axios.get(
    `${createUrl(SearchMovie, language)}&query=${query}`
  );
  return new Movies(data);
};

const createMovie = async (args) => await moviesService.create(args)

const deleteOneMovie = async (_id) => await moviesService.deleteById(_id);

const addUserDescription = async (args) => await moviesService.update(args)

const deleteMovieCollecton = async () => await moviesService.deleteCollection()

export {
  getPopular,
  searchMovieByName,
  addUserDescription,
  getGenres,
  getMovieById,
  getAllSelectedMovies,
  createMovie,
  deleteMovieCollecton,
  deleteOneMovie,
};
