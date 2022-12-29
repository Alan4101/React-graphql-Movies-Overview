import { SelectedMovieMutation } from "./mutation.graphql";
import { SelectedMovieQuery } from "./query.graphql";
import { SelectedMoviesTypes } from "./types.graphql";

export const SelectedMovieTypesDefs = [
  SelectedMovieMutation,
  SelectedMovieQuery,
  SelectedMoviesTypes,
].join('');
