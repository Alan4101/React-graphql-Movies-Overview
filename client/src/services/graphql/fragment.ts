import { gql } from "@apollo/client";

export const CORE_SELECTED_MOVIE_FIELDS = gql`
  fragment CoreSelectedMovieFields on MovieSelected {
    _id
    title
    poster
    adult
    movieId
    genres
    releaseDate
    overview
    voteCount
    userDescription
  }
`;
