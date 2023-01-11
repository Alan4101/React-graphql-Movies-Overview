import MongoService from "./mongo.service";

import { RecomendedModel } from "../models";

const recService = new MongoService(RecomendedModel);

export const getRecomendedMovies = async () => await recService.getAll();

export const deleteCollectionById = async (_id) =>
  await recService.deleteById(_id);

export const updateCollection = async (args) => await recService.update(args);

export const createCollection = async (args) => await recService.create(args);
