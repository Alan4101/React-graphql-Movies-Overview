import { GraphQLError } from "graphql";

import { errorHandler } from "../controllers";
import { UsersModel } from "../models";
import { verifyJwt } from "../utils/utils";

const authUser = async (req) => {
  try {
    let access_token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      access_token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.access_token) {
      const { access_token: token } = req.cookies;
      access_token = token;
    }

    if (!access_token) return false;

    const decoded = verifyJwt(access_token, "JWT_ACCESS_PUBLIC_KEY");

    if (!decoded) return false;

    // Check if the session is valid
    const session = await redisClient.get(decoded.user);

    if (!session) {
      throw new GraphQLError("Session has expired", {
        extensions: { code: "FORBIDDEN" },
      });
    }
    const user = await UsersModel.findById(JSON.parse(session).id);

    if (!user) {
      throw new GraphQLError(
        "The user belonging to this token no logger exist",
        { extensions: { code: "FORBIDDEN" } }
      );
    }
    return user;
  } catch (error) {
    errorHandler(error);
  }
};
export default authUser;
