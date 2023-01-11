import {
  CreditsResolvers,
  MoviesResolvers,
  RecommendedResolvers,
} from "../controllers";
import { combineResolvers } from "../utils/utils";

export default {
  ...combineResolvers([
    CreditsResolvers,
    MoviesResolvers,
    RecommendedResolvers,
  ]),
};
