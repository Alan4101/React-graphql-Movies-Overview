import MongoService from "./mongo.service";
import UsersModel from './../models/Users.model';

const userService = new MongoService(UsersModel)

export const getAllUsers = async () => await userService.getAll()

export const createUser = async (user) => await userService.create(user) 