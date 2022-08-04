const { IMAGE_BASE_PATH } = require("../../../config");

class Movie {
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
      this.voteAverge = movie.vote_averge;
      this.voteCount = movie.vote_count;
      this.popularity = movie.popularity;
      this.genreIds = movie.genre_ids;
  }
}

module.exports = {
  Movie
} 