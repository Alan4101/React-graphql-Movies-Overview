import { IPrimeMovie } from './IPrimeMovie';

export interface IMovie extends IPrimeMovie {
  id: string;
  genreIds: number[];
}
