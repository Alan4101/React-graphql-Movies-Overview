import base from "./../config/default";
import errorHandler from "./error.controller";
import checkIsLoggedIn from "./../middleware/checkIsLoggedIn";
import { ForbiddenError, verifyJwt } from "../utils/utils";
import { UsersModel } from "../models";

const { accessTokenExpireIn, refreshTokenExpireIn } = base;
const cookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

const accessTokenCookieOptions = {
  ...cookieOptions,
  maxAge: accessTokenExpireIn * 60 * 1000,
  expires: new Date(Date.now() + accessTokenExpireIn * 60 * 1000),
};

const refreshTokenCookieOptions = {
  ...cookieOptions,
  maxAge: refreshTokenExpireIn * 60 * 1000,
  expires: new Date(Date.now() + refreshTokenExpireIn * 60 * 1000),
};
async function signTokens(user) {
  // Create a Session
  // await redisClient.set(user.id, JSON.stringify(user), {
  //   EX: 60 * 60,
  // });

  // Create access token
  const access_token = signJwt({ user: user.id }, "JWT_ACCESS_PRIVATE_KEY", {
    expiresIn: `${base.jwtAccessTokenExpiresIn}m`,
  });

  // Create refresh token
  const refresh_token = signJwt({ user: user.id }, "JWT_REFRESH_PRIVATE_KEY", {
    expiresIn: `${base.jwtRefreshTokenExpiresIn}m`,
  });

  return { access_token, refresh_token };
}
const AuthResolvers = {
  Query: {
    // Auth
    refreshAccessToken: async (_, __, { req, res }) => {
      try {
        // Get the refresh token
        const { refresh_token } = req.cookies;

        // Validate the RefreshToken
        const decoded = verifyJwt(refresh_token, "JWT_REFRESH_PUBLIC_KEY");

        if (!decoded) {
          throw ForbiddenError("Could not refresh access token");
        }
        const session = req.session

        // Check if user exist and is verified
        const user = await UsersModel.findById(JSON.parse(session).id).select(
          "+verified"
        );

        if (!user || !user.verified) {
          throw ForbiddenError("Could not refresh access token");
        }

        // Sign new access token
        const access_token = signJwt(
          { user: user._id },
          "JWT_ACCESS_PRIVATE_KEY",
          {
            expiresIn: base.jwtAccessTokenExpiresIn,
          }
        );

        // Send access token cookie
        res.cookie("access_token", access_token, accessTokenCookieOptions);
        res.cookie("logged_in", "true", {
          ...accessTokenCookieOptions,
          httpOnly: false,
        });

        return {
          status: "success",
          access_token,
        };
      } catch (error) {
        errorHandler(error);
      }
    },
    logoutUser: async (_, __, { req, res }) => {
      try {
        await checkIsLoggedIn(req, getAuthUser);
        const user = await getAuthUser(req);

        // Logout user
        res.cookie("access_token", "", { maxAge: -1 });
        res.cookie("refresh_token", "", { maxAge: -1 });
        res.cookie("logged_in", "", { maxAge: -1 });

        return true;
      } catch (error) {
        errorHandler(error);
      }
    },
  },
  Mutation: {
    loginUser: async (_, { input: { email, password } }) => {
      try {
        const user = UsersModel.findOne({ email }).select(
          "+password +verified"
        );

        if (!user || !(await user.comparePassword(password, user.password))) {
          throw ForbiddenError("Invalid email or password", "UNAUTHENTICATED");
        }
        user.password = undefined;

        // Create a session and tokens
        const { access_token, refresh_token } = await signTokens(user);

        // Add refreshToken to cookie
        res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
        res.cookie("access_token", access_token, accessTokenCookieOptions);
        res.cookie("logged_in", true, {
          ...accessTokenCookieOptions,
          httpOnly: false,
        });

        return {
          status: "success",
          access_token,
        };
      } catch (error) {
        errorHandler(error);
      }
    },
    signUpUser: async (
      _,
      { input: { firstName, lastName, email, password, age, picture } }
    ) => {
      try {
        const user = UsersModel.create({
          firstName,
          lastName,
          email,
          password,
          age,
          picture,
        });

        return {
          status: "success",
          user,
        };
      } catch (error) {
        if (error.code === 11000) {
          throw ForbiddenError("User already exist");
        }
        errorHandler(error);
      }
    },
  },
};
export default AuthResolvers;
// https://github.com/wpcodevo/node_graphql_api/blob/node_graphql_api_jwt_auth/src/controllers/auth.controller.js
// https://codevoweb.com/graphql-api-with-node-mongodb-jwt-authentication/
