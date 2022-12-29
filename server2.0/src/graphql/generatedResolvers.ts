import { MovieResolver } from './movies/resolvers';
import { SelectedMovieResolver } from './selectedMovies/resolvers';

export const resolvers = [
  MovieResolver,
  SelectedMovieResolver
]