import { MovieSelected } from '../../graphql'

export interface IRecommendedMovies {
  _id: string
  title: string
  createdData: string
  movies: Array<MovieSelected>
}
