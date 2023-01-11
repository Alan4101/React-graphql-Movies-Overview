import { createUser } from "../services";
import { getAllUsers } from "./../services/user.service";

const UserResolvers = {
  Query: {
    users: async (_, __) => await getAllUsers(),
  },
  Mutation: {
    registration: async (_, args) => await createUser(args),
  },
};
export default UserResolvers;
