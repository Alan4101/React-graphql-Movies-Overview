import { gql } from "@apollo/client";
import { CORE_SELECTED_MOVIE_FIELDS } from "./fragment";

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
  ${CORE_SELECTED_MOVIE_FIELDS}
  query GetMovies {
    getSelectedMovies {
      _id
      ...CoreSelectedMovieFields
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
  ${CORE_SELECTED_MOVIE_FIELDS}
  query GetMovieBYId($id: ID!) {
    movieById(_id: $id) {
      ...CoreSelectedMovieFields
    }
  }
`;
export const SEARCH_MOVIE = gql`
  query SearchMovie($query: String, $language: String){
    searchMovie(query: $query, language: $language){
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
`
