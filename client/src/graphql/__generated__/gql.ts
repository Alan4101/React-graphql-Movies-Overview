/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation AddMovie(\n    $title: String\n    $releaseDate: String\n    $adult: Boolean\n    $poster: String\n    $genres: [String]\n    $movieId: String\n    $overview: String\n    $userDescription: String\n    $voteCount: Int\n    $backdropPath: String\n    $voteAverage: Float\n  ) {\n    createMovie(\n      title: $title\n      releaseDate: $releaseDate\n      adult: $adult\n      poster: $poster\n      genres: $genres\n      movieId: $movieId\n      overview: $overview\n      voteCount: $voteCount\n      userDescription: $userDescription\n      backdropPath: $backdropPath\n      voteAverage: $voteAverage\n    ) {\n        _id\n        movieId      \n        title\n      \n    }\n  }\n": types.AddMovieDocument,
    "\n  mutation RemoveMovie($id: ID) {\n    deleteMovie(_id: $id) {\n    _id\n    movieId\n    }\n  }\n": types.RemoveMovieDocument,
    "\n  mutation AddUserDescription($id: ID, $userDescription: String) {\n    addUserDescription(_id: $id, userDescription: $userDescription) {\n      title\n    }\n  }\n": types.AddUserDescriptionDocument,
    "\n  mutation CreateRecomendedMovie($title: String, $createdData: String, $movies: [MovieSelectedInput]) {\n    createRecomendedMovies(title: $title, createdData: $createdData, movies: $movies) {\n      title\n      movies {\n        title\n      }\n    }\n  }\n": types.CreateRecomendedMovieDocument,
    "\n  mutation DeleteAll {\n    deleteAll {\n      success\n      message\n    }\n  }\n": types.DeleteAllDocument,
    "\n  query Movies($page: Int, $language: String) {\n    movies(page: $page, language: $language) {\n      page\n      totalResults\n      totalPages\n      results {\n        adult\n        title\n        releaseDate\n        poster\n        voteCount\n        voteAverage\n        backdropPath\n        id\n        genreIds\n        overview\n      }\n    }\n  }\n": types.MoviesDocument,
    "\n  query GetMovies {\n    selectedMovies: getSelectedMovies {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n": types.GetMoviesDocument,
    "\n  query genres{\n    genres {\n      id\n      name\n    }\n  }\n": types.GenresDocument,
    "\n  query GetMovieBYId($id: ID!) {\n    movieById(_id: $id) {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n": types.GetMovieByIdDocument,
    "\nquery Credits($movieId: ID, $language: String) {\n  credits(movieId: $movieId, language: $language) {\n    id\n    cast {\n      name\n      profilePath\n      id\n      creditId\n      adult\n      gender\n      originalName\n    }\n  }\n}\n": types.CreditsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddMovie(\n    $title: String\n    $releaseDate: String\n    $adult: Boolean\n    $poster: String\n    $genres: [String]\n    $movieId: String\n    $overview: String\n    $userDescription: String\n    $voteCount: Int\n    $backdropPath: String\n    $voteAverage: Float\n  ) {\n    createMovie(\n      title: $title\n      releaseDate: $releaseDate\n      adult: $adult\n      poster: $poster\n      genres: $genres\n      movieId: $movieId\n      overview: $overview\n      voteCount: $voteCount\n      userDescription: $userDescription\n      backdropPath: $backdropPath\n      voteAverage: $voteAverage\n    ) {\n        _id\n        movieId      \n        title\n      \n    }\n  }\n"): (typeof documents)["\n  mutation AddMovie(\n    $title: String\n    $releaseDate: String\n    $adult: Boolean\n    $poster: String\n    $genres: [String]\n    $movieId: String\n    $overview: String\n    $userDescription: String\n    $voteCount: Int\n    $backdropPath: String\n    $voteAverage: Float\n  ) {\n    createMovie(\n      title: $title\n      releaseDate: $releaseDate\n      adult: $adult\n      poster: $poster\n      genres: $genres\n      movieId: $movieId\n      overview: $overview\n      voteCount: $voteCount\n      userDescription: $userDescription\n      backdropPath: $backdropPath\n      voteAverage: $voteAverage\n    ) {\n        _id\n        movieId      \n        title\n      \n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveMovie($id: ID) {\n    deleteMovie(_id: $id) {\n    _id\n    movieId\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveMovie($id: ID) {\n    deleteMovie(_id: $id) {\n    _id\n    movieId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUserDescription($id: ID, $userDescription: String) {\n    addUserDescription(_id: $id, userDescription: $userDescription) {\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation AddUserDescription($id: ID, $userDescription: String) {\n    addUserDescription(_id: $id, userDescription: $userDescription) {\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRecomendedMovie($title: String, $createdData: String, $movies: [MovieSelectedInput]) {\n    createRecomendedMovies(title: $title, createdData: $createdData, movies: $movies) {\n      title\n      movies {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRecomendedMovie($title: String, $createdData: String, $movies: [MovieSelectedInput]) {\n    createRecomendedMovies(title: $title, createdData: $createdData, movies: $movies) {\n      title\n      movies {\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteAll {\n    deleteAll {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAll {\n    deleteAll {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Movies($page: Int, $language: String) {\n    movies(page: $page, language: $language) {\n      page\n      totalResults\n      totalPages\n      results {\n        adult\n        title\n        releaseDate\n        poster\n        voteCount\n        voteAverage\n        backdropPath\n        id\n        genreIds\n        overview\n      }\n    }\n  }\n"): (typeof documents)["\n  query Movies($page: Int, $language: String) {\n    movies(page: $page, language: $language) {\n      page\n      totalResults\n      totalPages\n      results {\n        adult\n        title\n        releaseDate\n        poster\n        voteCount\n        voteAverage\n        backdropPath\n        id\n        genreIds\n        overview\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMovies {\n    selectedMovies: getSelectedMovies {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n"): (typeof documents)["\n  query GetMovies {\n    selectedMovies: getSelectedMovies {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query genres{\n    genres {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query genres{\n    genres {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMovieBYId($id: ID!) {\n    movieById(_id: $id) {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n"): (typeof documents)["\n  query GetMovieBYId($id: ID!) {\n    movieById(_id: $id) {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Credits($movieId: ID, $language: String) {\n  credits(movieId: $movieId, language: $language) {\n    id\n    cast {\n      name\n      profilePath\n      id\n      creditId\n      adult\n      gender\n      originalName\n    }\n  }\n}\n"): (typeof documents)["\nquery Credits($movieId: ID, $language: String) {\n  credits(movieId: $movieId, language: $language) {\n    id\n    cast {\n      name\n      profilePath\n      id\n      creditId\n      adult\n      gender\n      originalName\n    }\n  }\n}\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;