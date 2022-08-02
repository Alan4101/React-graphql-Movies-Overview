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
      this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdropPath}`;
      this.video = movie.video;
      this.voteAverge = movie.voteAverge;
      this.voteCount = movie.voteCount;
      this.popularity = movie.popularity;
  }
}

module.exports = {
  Movie
} 