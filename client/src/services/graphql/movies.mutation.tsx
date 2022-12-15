import { gql } from '@apollo/client'

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
    $voteCount: Int
  ) {
    createMovie(
      title: $title
      releaseDate: $releaseDate
      adult: $adult
      poster: $poster
      genres: $genres
      movieId: $movieId
      overview: $overview
      voteCount: $voteCount
      userDescription: $userDescription
    ) {
      success
      message
      movies {
        title
      }
    }
  }
`
export const REMOVE_MOVIE = gql`
  mutation RemoveMovie($id: ID) {
    deleteMovie(_id: $id) {
      title
    }
  }
`
export const ADD_USER_DESCRIPTION = gql`
  mutation AddUserDescription($id: ID, $userDescription: String) {
    addUserDescription(_id: $id, userDescription: $userDescription) {
      title
    }
  }
`
// export const REMOVE_USER_DESCRIPTION = gql`
//   mutation RemoveUserDescription($id: ID, ){

//   }
// `;
export const CREATE_RECOMENDED_MOVIES = gql`
  mutation CreateRecomendedMovie($title: String, $createdData: String, $movies: [MovieSelectedInput]) {
    createRecomendedMovies(title: $title, createdData: $createdData, movies: $movies) {
      title
      movies {
        title
      }
    }
  }
`
export const FELETE_ALL_SELECTED_MOVIES = gql`
  mutation DeleteAll {
    deleteAll {
      success
      message
    }
  }
`
