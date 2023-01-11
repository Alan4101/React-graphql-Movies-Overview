import {
  createCollection,
  deleteCollectionById,
  getRecomendedMovies,
  updateCollection,
} from "../services";

const RecommendedResolvers = {
  Query: {
    getRecommended: async (_, __) => await getRecomendedMovies(),
  },
  Mutation: {
    createRecomendedMovies: async (_, args) => await createCollection(args),

    updateRecomendedList: async (_, args) => await updateCollection(args),

    deleteMovieListById: async (_, { _id }) => await deleteCollectionById(_id),
  },
};
export default RecommendedResolvers;
