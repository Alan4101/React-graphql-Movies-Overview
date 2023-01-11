import {
  CreditsResolvers,
  MoviesResolvers,
  RecommendedResolvers,
  UserResolvers,
} from "../controllers";
import { combineResolvers } from "../utils/utils";

export default {
  ...combineResolvers([
    UserResolvers,
    CreditsResolvers,
    MoviesResolvers,
    RecommendedResolvers,
  ]),
};
