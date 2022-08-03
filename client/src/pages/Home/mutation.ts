import { gql } from "@apollo/client";

export const ADD_MOVIE_TO_SELECTED = gql`
  mutation AddMovie(
    $title: String
    $releaseDate: String
    $adult: Boolean
    $poster: String
    $genres: String
    $movieId: String
  ) {
    createMovie(
      title: $title
      releaseDate: $releaseDate
      adult: $adult
      poster: $poster
      genres: $genres
      movieId: $movieId
    ) {
      _id
      title
      poster
      genres
      adult
      releaseDate
      movieId
    }
  }
`;
export const REMOVE_MOVIE = gql`
  mutation RemoveMovie($id: ID) {
    deleteMovie(_id: $id) {
      title
    }
  }
`;
