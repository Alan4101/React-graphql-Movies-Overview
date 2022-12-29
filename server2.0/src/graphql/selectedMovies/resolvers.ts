import { ISelectedMovieArgs } from "../../interfaces";
import MovieModel from "../../models/Movies";
import { MongoClient } from "./../../services/MongoClient";

const db = new MongoClient(MovieModel);
type TAddDescriptionArgs = {
  _id: string;
  userDescription: string;
};
export const SelectedMovieResolver = {
  Query: {
    selectedMovies: async () => {
      return await db.get();
    },
    movieById: async (_: any, { _id }: { _id: string }) => {
      return await db.getById(_id);
    },
  },
  Mutation: {
    createMovie: async (_: any, args: ISelectedMovieArgs) => {
      return await db.create(args);
    },
    deleteMovie: async (_: any, { _id }: { _id: string }) => {
      return await db.deleteById(_id);
    },
    deleteAll: async (_: any, args: any) => {
      return await db.deleteAllInModel();
    },
    addDescription: async (_: any, args: TAddDescriptionArgs) => {
      const { _id, userDescription } = args;
      return await db.updateById({
        _id,
        shouldUpdateFields: { userDescription },
      });
    },
  },
};
