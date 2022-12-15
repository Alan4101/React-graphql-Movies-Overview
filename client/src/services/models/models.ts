export interface IGenre {
  id: string
  name: string
}
interface IInitialMovie {
  title: string
  poster: string
  releaseDate: string
  genres?: string[]
  adult?: boolean
  voteAverage?: number
  voteCount?: number
}
export interface IMovie extends IInitialMovie {
  id: string
  runtime?: number
  overview?: string
  originalLanguage?: string
  backdropPath?: string
  video?: boolean
  movieId?: string
  genreIds?: [number]
}
export interface ISelectedMovie extends IInitialMovie {
  _id: string
  movieId?: string
  overview?: string
  userDescription?: string
}

export interface IRecommendedMovies {
  _id: string
  title: string
  createdData: string
  movies: Array<ISelectedMovie>
}
