import { gql } from "@apollo/client";

export const ADD_MOVIE_TO_SELECTED = gql`
  mutation AddMovie(
    $title: String
    $releaseDate: String
    $adult: Boolean
    $poster: String
    $genres: [String]
    $movieId: String
    $overview: String
    $userDescription: String
  ) {
    createMovie(
      title: $title
      releaseDate: $releaseDate
      adult: $adult
      poster: $poster
      genres: $genres
      movieId: $movieId
      overview: $overview
      userDescription: $userDescription
    ) {
      success
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
export const ADD_USER_DESCRIPTION = gql`
  mutation AddUserDescription($id: ID, $userDescription: String) {
    addUserDescription(_id: $id, userDescription: $userDescription) {
      title
    }
  }
`;
