import { GraphQLError } from "graphql";

import { errorHandler } from "../controllers";
import { UsersModel } from "../models";
import { verifyJwt } from "../utils/utils";

// const authUser = async (req) => {
//   try {
//     let access_token;
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       access_token = req.headers.authorization.split(" ")[1];
//     } else if (req.cookies.access_token) {
//       const { access_token: token } = req.cookies;
//       access_token = token;
//     }

//     if (!access_token) return false;

//     // const decoded = verifyJwt(access_token, "JWT_ACCESS_PUBLIC_KEY");
//     const decoded = verifyJwt(access_token, process.env.JWT_ACCESS_PUBLIC_KEY);

//     if (!decoded) return false;

//     const user = await UsersModel.findById(JSON.parse(session).id);

//     if (!user) {
//       throw new GraphQLError(
//         "The user belonging to this token no logger exist",
//         { extensions: { code: "FORBIDDEN" } }
//       );
//     }
//     return user;
//   } catch (error) {
//     errorHandler(error);
//   }
// };
const authUser = async (context) => {
  let access_token;
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    access_token = authHeader.split("Bearer")[1];
    if (access_token) {
      try {
        // const decoded = verifyJwt(access_token, "JWT_ACCESS_PUBLIC_KEY");
        const decoded = verifyJwt(
          access_token,
          process.env.JWT_ACCESS_PUBLIC_KEY
        );

        if (!decoded) return false;

        return decoded;
      } catch (error) {
        throw new GraphQLError(
          "The user belonging to this token no logger exist",
          { extensions: { code: "FORBIDDEN" } }
        );
      }
    }
    throw new Error("Authorization token must be 'Bearer [token]'");
  }
  throw new Error("Authorization header must be provided");
};
export default authUser;
