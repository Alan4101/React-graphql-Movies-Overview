import { createUser, createUserRecommendedList } from "../services";
import { getAllUsers } from "./../services/user.service";
import errorHandler from './error.controller';

const UserResolvers = {
  Query: {
    users: async (_, __) => await getAllUsers(),
  },
  Mutation: {
    registration: async (_, { params: user }) => await createUser(user),

    createUserList: async(_, {params: args}) => {
      try {
      const res = await createUserRecommendedList(args)
      return res  
      } catch (error) {
        errorHandler(error)
      }
    } 
  },
};
export default UserResolvers;
