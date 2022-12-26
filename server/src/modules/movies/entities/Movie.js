import { IMAGE_BASE_PATH } from "../../../config";

export class Movie {
  constructor(movie) {
      this.movie = movie;
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
      this.popularity = movie.popularity;
      this.genreIds = movie.genre_ids;
  }
}

