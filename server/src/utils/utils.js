import * as dotenv from 'dotenv' 
dotenv.config()

const BASE_URL = process.env.BASE_URL

const API_KEY = process.env.API_KEY

export const createUrl = (endpoint, language = "en-US", page) => {
  if (page) {
    return `${BASE_URL}${endpoint}api_key=${API_KEY}&language=${language}&page=${page}`;
  } else {
    return `${BASE_URL}${endpoint}api_key=${API_KEY}&language=${language}`;
  }
};

export const combineResolvers = (arr) => {
  let resolvers = {};
  
  arr.forEach(({ Query, Mutation }) => {
    resolvers.Query = { ...resolvers.Query, ...Query };
    resolvers.Mutation = { ...resolvers.Mutation, ...Mutation };
  });

  return resolvers;
};
