import { MovieResolver } from './movies/resolvers';
import { SelectedMovieResolver } from './selectedMovies/resolvers';
import { CreditsResolvers } from './credits/resolvers';

export const resolvers = [
  MovieResolver,
  SelectedMovieResolver,
  CreditsResolvers
]