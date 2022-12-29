import axios from "axios";
import { createUrlString } from "../../services/utils";
import { Credits } from "./../../entities/Credits";
type CreditsQueryArgs = {
  movieId: string;
  language: string;
};
export const CreditsResolvers = {
  Query: {
    credits: async (_: any, args: CreditsQueryArgs) => {
      const { movieId, language } = args;
      const { data } = await axios.get(
        `${createUrlString(`movie/${movieId}/credits?`, language)}`
      );
      return new Credits(data);
    },
  },
};
