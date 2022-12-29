
import { resolvers } from './generatedResolvers';
import { MovieQuery } from './movies/query.graphql';
import { MovieTypes } from './movies/types.graphql';
import { CreditsTypeDefs } from './credits/index';
import { SelectedMovieTypesDefs } from './selectedMovies/index';

export const generateSchema = () => {
  const typeDefs = [
    MovieQuery,
    MovieTypes,
    SelectedMovieTypesDefs,
    CreditsTypeDefs
  ].join(' ')
  
  return {
    typeDefs,
    resolvers,
  }
}