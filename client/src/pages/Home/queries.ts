import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query Movies($page: Int, $language: String) {
    movies(page: $page, language: $language) {
      page
      totalResults
      totalPages
      results {
        adult
        title
        releaseDate
        poster
        voteCount
        voteAverage
        backdropPath
        id
        genreIds
        overview
      }
    }
  }
`;

export const GET_SELECTED_MOVIES = gql`
  query GetMovies {
    getSelectedMovies {
      _id
      title
      poster
      adult
      movieId
      genres
    }
  }
`;
export const GET_GENRES = gql`
  query {
    genres {
      id
      name
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query GetMovieBYId($id: ID!) {
    movieById(_id: $id) {
      title
      genres
      releaseDate
      overview
      poster
      adult
      movieId
      userDescription
    }
  }
`;
