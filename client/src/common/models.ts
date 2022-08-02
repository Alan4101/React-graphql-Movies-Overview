export interface IGenre {
  id: string;
  name: string;
}
export interface IMovie {
  id: string;
  title: string;
  poster: string;
  releaseDate: string;
  genres?: IGenre[];
  runtime?: number;
  adult?: Boolean;
  overview?: string;
  originalLanguage?: String;
  backdropPath?: String;
  voteCount?: number;
  video?: boolean;
  voteAverage?: number;
}
