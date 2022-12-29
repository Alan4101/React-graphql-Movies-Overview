import { IPrimeMovie } from "./IPrimeMovie";

export interface ISelectedMovie extends IPrimeMovie {
  _id: string;
  movieId: string;
  genres: string[];
  userDescription: string;
}
export type ISelectedMovieArgs = Omit<ISelectedMovie, '_id'>
