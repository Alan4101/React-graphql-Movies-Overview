import { errorHandler } from "../controllers";
import { ForbiddenError } from "./../utils/utils";

const checkIsLoggedIn = async (req, getAuthUser) => {
  try {
    // check if user is logged in
    const authUser = getAuthUser(req);
    if (!authUser) {
      throw ForbiddenError("You are not logged in", "UNAUTHENTICATED");
    }
  } catch (error) {
    errorHandler(error);
  }
};
export default checkIsLoggedIn;
