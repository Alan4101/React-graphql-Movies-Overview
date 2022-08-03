const { Movie } = require("./Movie");

class SelectedMovies{
  constructor(movies){
    this.data = movies.map(item => new Movie(item))
  }
}
module.exports = {
  SelectedMovies
}