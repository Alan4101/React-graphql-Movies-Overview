import { graphql as gql } from './__generated__/'

export const GET_ALL_MOVIES = gql(`
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
`)

export const GET_SELECTED_MOVIES = gql(`
  query GetMovies {
    selectedMovies: getSelectedMovies {
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
    backdropPath
    voteAverage
    }
  }
`)
export const GET_GENRES = gql(`
  query genres{
    genres {
      id
      name
    }
  }
`)

export const GET_MOVIE_BY_ID = gql(`
  query GetMovieBYId($id: ID!) {
    movieById(_id: $id) {
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
    backdropPath
    voteAverage
    }
  }
`)
export const GET_CREDITS_BY_ID = gql(`
query Credits($movieId: ID, $language: String) {
  credits(movieId: $movieId, language: $language) {
    id
    cast {
      name
      profilePath
      id
      creditId
      adult
      gender
      originalName
    }
  }
}
`)
// export const SEARCH_MOVIE = gql(`
//   query SearchMovie($query: String, $language: String) {
//     searchMovie(query: $query, language: $language) {
//       results {
//         adult
//         title
//         releaseDate
//         poster
//         voteCount
//         voteAverage
//         backdropPath
//         id
//         genreIds
//         overview
//       }
//     }
//   }
// `)
