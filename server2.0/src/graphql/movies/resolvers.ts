import axios from "axios";
import { Movies } from "../../entities/Movies";

export const MovieResolver = {
  Query: {
    movies: async (parent: any, args: any) => {
      const {page, language} = args;
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f6b1fc60dfa4b565e46025dc0de1fa24&language=${language}&page=${page}`
      );
      return new Movies(data)
    },
  },
};
