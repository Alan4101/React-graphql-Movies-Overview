import {
  getPopular,
  addUserDescription,
  getGenres,
  getMovieById,
  getAllSelectedMovies,
  createMovie,
  deleteMovieCollecton,
  deleteOneMovie,
} from "../services/movie.service";

const MoviesResolvers = {
  Query: {
    movies: async (_, { page, language }) => await getPopular(page, language),

    getSelectedMovies: async (_, __) => await getAllSelectedMovies(),

    genres: async (_, __) => await getGenres(),

    movieById: async (_, { _id }) => await getMovieById(_id),
  },
  Mutation: {
    createMovie: async (_, args) => await createMovie(args),

    deleteMovie: async (_, { _id }) => await deleteOneMovie(_id),

    addUserDescription: async (_, args) => await addUserDescription(args),

    deleteAll: async (_, __) => await deleteMovieCollecton(),
  },
};
export default MoviesResolvers;
