export interface IGenre {
  id: string;
  name: string;
}
export interface IMovie {
  title: string;
  poster: string;
  releaseDate: string;
  genres?: IGenre[];
  runtime?: number;
}

