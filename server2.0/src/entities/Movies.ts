import { IMovie, IMovies } from '../interfaces';
import { Movie } from './Movie'


export class Movies implements IMovies{
  page: number;
  totalResults: number;
  totalPages: number;
  results: IMovie[];
  
  constructor(movies: any) {
    this.page = movies.page;
    this.totalResults = movies.total_results;
    this.totalPages = movies.total_pages;
    this.results = movies.results.map((movie: any) => new Movie(movie))
  }
  
}

