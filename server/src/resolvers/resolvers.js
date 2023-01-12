import {
  AuthResolvers,
  CreditsResolvers,
  MoviesResolvers,
  RecommendedResolvers,
  UserResolvers,
} from "../controllers";
import DateTime from "./datetime";
import { combineResolvers } from "../utils/utils";

export default {
  DateTime,
  ...combineResolvers([
    AuthResolvers,
    UserResolvers,
    CreditsResolvers,
    MoviesResolvers,
    RecommendedResolvers,
  ]),
};
