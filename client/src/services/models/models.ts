export interface IGenre {
  id: string;
  name: string;
}
interface IInitialMovie {
  title: string;
  poster: string;
  releaseDate: string;
  genres?: string[];
  adult?: Boolean;
}
export interface IMovie extends IInitialMovie {
  id: string;
  runtime?: number;
  overview?: string;
  originalLanguage?: String;
  backdropPath?: String;
  voteCount?: number;
  video?: boolean;
  voteAverage?: number;
  movieId?: string;
}
export interface ISelectedMovie extends IInitialMovie {
  _id: string;
  movieId?: string;
  overview?: string;
  userDescription?: string;
}
