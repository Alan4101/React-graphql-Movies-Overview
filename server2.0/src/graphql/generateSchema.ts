
import { resolvers } from './generatedResolvers';
import { MovieQuery } from './movies/query.graphql';
import { MovieTypes } from './movies/types.graphql';
import { SelectedMovieMutation } from './selectedMovies/mutation.graphql';
import { SelectedMovieQuery } from './selectedMovies/query.graphql';
import { SelectedMoviesTypes } from './selectedMovies/types.graphql';

export const generateSchema = () => {
  const typeDefs = [
    MovieQuery,
    MovieTypes,
    SelectedMovieMutation,
    SelectedMovieQuery,
    SelectedMoviesTypes,
  ].join(' ')
  
  return {
    typeDefs,
    resolvers,
  }
}