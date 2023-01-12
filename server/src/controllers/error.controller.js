import { GraphQLError } from "graphql";
// import { ApolloServerErrorCode } from '@apollo/server/errors'

const handleCastError = (error) => {
  const message = `Invalid ${error.path}: ${error.valeu}`;
  throw new GraphQLError(message, {
    extensions: { code: "GRAPHQL_VALIDATION_FAILED" },
  });
};

const handleValidationError = (error) => {
  const message = Object.values(error.errors).map((el) => el.message);
  throw new GraphQLError(`Invalid input: ${message.join(", ")}`, {
    extensions: { code: "GRAPHQL_VALIDATION_FAILED" },
  });
};
const errorHandler = (err) => {
  if (err.name === "CastError") handleCastError(err);
  if (err.name === "ValidationError") handleValidationError(err);
  throw err;
};

export default errorHandler;
