import mongoose from "mongoose";

const RecomendedList = new mongoose.Schema(
  {
    title: {type: String, required: true},
    createdData: {type: String, required: true},
    description: {type: String, required: true},
    movies: [
      {
        _id: {type: String, required: true} ,
        title: {type: String, required: true},
        poster: {type: String, required: true},
        releaseDate: String,
        adult: Boolean,
        movieId: String,
        genres: [String],
        overview: String,
        voteCount: Number,
        userDescription: String,
        sequenceNumber: Number

      },
    ],
  },
  { versionKey: false }
);
const RecomendedModel = mongoose.model("RecomendedList", RecomendedList);
export { RecomendedModel };
