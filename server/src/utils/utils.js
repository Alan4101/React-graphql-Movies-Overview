import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { errorHandler } from "../controllers";
import { GraphQLError } from "graphql";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

const API_KEY = process.env.API_KEY;

export const createUrl = (endpoint, language = "en-US", page) => {
  if (page) {
    return `${BASE_URL}${endpoint}api_key=${API_KEY}&language=${language}&page=${page}`;
  } else {
    return `${BASE_URL}${endpoint}api_key=${API_KEY}&language=${language}`;
  }
};
/**
 * 
 * @param {*} resolversArray
 * @returns object contains query and mutation
 */
export const combineResolvers = (resolversArray) => {
  let resolvers = {};

  resolversArray.forEach(({ Query, Mutation }) => {
    resolvers.Query = { ...resolvers.Query, ...Query };
    resolvers.Mutation = { ...resolvers.Mutation, ...Mutation };
  });

  return resolvers;
};
/**
 *
 * @param {*} message - string, message about error
 * @param {*} codeGQL - optional, graphql code, default "FORBIDDEN"
 * @returns graphql error
 */
export const ForbiddenError = (message, codeGQL = "FORBIDDEN") => {
  return new GraphQLError(message, {
    extensions: { code: codeGQL },
  });
};

export const signJwt = (payload, Key, options) => {
  const privateKey = Buffer.from(process.env[Key], "base64").toString("ascii");
  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = (token, Key) => {
  try {
    const publicKey = Buffer.from(process.env[Key], "base64").toString("ascii");
    const decoded = jwt.verify(token, publicKey);
    return decoded;
  } catch (error) {
    errorHandler(error);
  }
};
