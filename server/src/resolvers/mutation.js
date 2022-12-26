import { MovieModel, RecomenedModel } from '../../models'

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
const deleteMovie = async (parent, { _id }) => {
  return await MovieModel.findByIdAndRemove(_id);
};
const addUserDescription = async (parent, args) => {
  return await MovieModel.findByIdAndUpdate(args._id, {
    userDescription: args.userDescription,
  });
};

const createRecomendedMovies = async (parent, args) => {
  const data = new RecomenedModel({
    title: args.title,
    createdData: args.createdData,
    movies: args.movies,
  });
  return await data.save();
};
const deleteAll = async (_, args) => {
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

export {
  createMovie,
  deleteMovie,
  addUserDescription,
  createRecomendedMovies,
  deleteAll,
};
