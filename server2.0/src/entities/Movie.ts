import * as dotenv from "dotenv";
import { IMovie } from "../interfaces";

dotenv.config();

const IMAGE_BASE_PATH = process.env.IMAGE_BASE_PATH!

export class Movie implements IMovie{
  id: string;
  title: string;
  releaseDate: string;
  poster: string;
  adult: boolean;
  overview: string;
  backdropPath: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  genreIds: number[];

  constructor(movie: any) {
      this.id = movie.id;
      this.title = movie.title;
      this.releaseDate = movie.release_date;
      this.poster = `${IMAGE_BASE_PATH}${movie.poster_path}`;
      this.adult = movie.adult;
      this.overview = movie.overview;
      this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
      this.video = movie.video;
      this.voteAverage = movie.vote_average;
      this.voteCount = movie.vote_count;
      this.genreIds = movie.genre_ids;
  }
  
}

