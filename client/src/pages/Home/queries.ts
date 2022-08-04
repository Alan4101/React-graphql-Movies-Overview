import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query Movies($page: Int) {
    movies(page: $page) {
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
