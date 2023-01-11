import { getCredits } from "../services";

const CreditsResolvers = {
  Query: {
    credits: async (_, { movieId, language }) =>
      await getCredits(movieId, language),
  },
};

export default CreditsResolvers;
