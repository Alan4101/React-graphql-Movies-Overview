import { IMovie } from "./IMovie";

export interface IMovies {
  page: number;
  totalResults: number;
  totalPages: number;
  results: IMovie[];
}
