import mongoose from "mongoose";
const defaultImg= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBu9nYd722gKRVUMrE8FHpc6eALfJNEP9cna7_4XCyg&s'
const Movie = new mongoose.Schema(
  {
    title: String,
    poster: {type: String, default: defaultImg},
    releaseDate: String,
    adult: Boolean,
    movieId: String,
    genres: [String],
    overview: String,
    voteCount: Number,
    userDescription: String,
    backdropPath: String,
    voteAverage: Number,
    sequenceNumber: Number,
  },
  { versionKey: false }
);
const MovieModel = mongoose.model("Movie", Movie);

export { MovieModel };
