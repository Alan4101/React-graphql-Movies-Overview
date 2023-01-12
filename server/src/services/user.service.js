import MongoService from "./mongo.service";
import UsersModel from "./../models/Users.model";
import errorHandler from "./../controllers/error.controller";
import { GraphQLError } from "graphql";

const userService = new MongoService(UsersModel);

export const getAllUsers = async () => await userService.getAll();

export const createUser = async (user) => await userService.create(user);

export const createUserRecommendedList = async ({ userId, ...list }) => {
  try {
    const user = await userService.getById(userId);
    
    if (!user) throw new GraphQLError("User is not found");

    const params = {
      _id: userId,
      recomendedList: [list],
    };
    console.log(params)

    return await UsersModel.findByIdAndUpdate({_id: userId}, {
      recomendedList: [list]
    })
  } catch (error) {
    errorHandler(error);
  }
};
