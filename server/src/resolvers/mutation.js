import { MovieModel, RecomendedModel } from "../models";

const createMovie = async (_, args) => {
  const newMovie = new MovieModel({
    title: args.title,
    poster: args.poster,
    releaseDate: args.releaseDate,
    genres: args.genres,
    adult: args.adult,
    movieId: args.movieId,
    overview: args.overview,
    userDescription: args.userDescription,
    voteCount: args.voteCount,
    backdropPath: args.backdropPath,
    voteAverage: args.voteAverage,
  });
  const movie = await newMovie.save();
  return movie;
};
const deleteMovie = async (_, { _id }) => {
  return await MovieModel.findByIdAndRemove(_id);
};
const addUserDescription = async (_, args) => {
  return await MovieModel.findByIdAndUpdate(args._id, {
    userDescription: args.userDescription,
  });
};

const createRecomendedMovies = async (_, args) => {
  const data = new RecomendedModel({
    title: args.title,
    createdData: args.createdData,
    description: args.description,
    movies: args.movies,
  });
  return await data.save();
};
const deleteAll = async (_, __) => {
  const data = await MovieModel.deleteMany({});
  if (!data) {
    return {
      success: false,
      message: "Error",
    };
  }
  return {
    success: true,
    message: "Success",
  };
};
const deleteMovieListById = async (_, { _id }) => {
  return await RecomendedModel.findByIdAndRemove(_id);
};
const updateRecomendedList = async (_, { args }) => {
  const { _id, ...rest } = args;
  return await RecomendedModel.findByIdAndUpdate(_id, { ...rest });
};
export {
  createMovie,
  deleteMovie,
  addUserDescription,
  createRecomendedMovies,
  deleteAll,
  deleteMovieListById,
  updateRecomendedList,
};
