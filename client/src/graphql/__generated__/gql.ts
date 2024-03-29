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
    "\n  mutation AddMovie(\n    $movie: MovieCreatedInput!\n    # $title: String\n    # $releaseDate: String\n    # $adult: Boolean\n    # $poster: String\n    # $genres: [String]\n    # $movieId: String\n    # $overview: String\n    # $userDescription: String\n    # $voteCount: Int\n    # $backdropPath: String\n    # $voteAverage: Float\n  ) {\n    createMovie(\n      movie: $movie\n      # title: $title\n      # releaseDate: $releaseDate\n      # adult: $adult\n      # poster: $poster\n      # genres: $genres\n      # movieId: $movieId\n      # overview: $overview\n      # voteCount: $voteCount\n      # userDescription: $userDescription\n      # backdropPath: $backdropPath\n      # voteAverage: $voteAverage\n    ) {\n        _id\n        movieId      \n        title\n      \n    }\n  }\n": types.AddMovieDocument,
    "\n  mutation RemoveMovie($id: ID) {\n    deleteMovie(_id: $id) {\n    _id\n    movieId\n    }\n  }\n": types.RemoveMovieDocument,
    "\n  mutation AddUserDescription($id: ID, $userDescription: String) {\n    addUserDescription(_id: $id, userDescription: $userDescription) {\n      title\n    }\n  }\n": types.AddUserDescriptionDocument,
    "\n  mutation CreateRecomendedMovie($title: String, $createdData: String, $description: String, $movies: [MovieSelectedInput]) {\n    createRecomendedMovies(title: $title, createdData: $createdData, description: $description, movies: $movies) {\n      title\n      description\n      movies {\n        title\n      }\n    }\n  }\n": types.CreateRecomendedMovieDocument,
    "\n  mutation DeleteAll {\n    deleteAll {\n      success\n      message\n    }\n  }\n": types.DeleteAllDocument,
    "\n  query Movies($page: Int, $language: String) {\n    movies(page: $page, language: $language) {\n      page\n      totalResults\n      totalPages\n      results {\n        adult\n        title\n        releaseDate\n        poster\n        voteCount\n        voteAverage\n        backdropPath\n        id\n        genreIds\n        overview\n      }\n    }\n  }\n": types.MoviesDocument,
    "\n  query GetMovies {\n    selectedMovies: getSelectedMovies {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n": types.GetMoviesDocument,
    "\n  query genres{\n    genres {\n      id\n      name\n    }\n  }\n": types.GenresDocument,
    "\n  query GetMovieBYId($id: ID!) {\n    movieById(_id: $id) {\n      _id\n    title\n    poster\n    adult\n    movieId\n    genres\n    releaseDate\n    overview\n    voteCount\n    userDescription\n    backdropPath\n    voteAverage\n    }\n  }\n": types.GetMovieByIdDocument,
    "\n  query Credits($movieId: ID, $language: String) {\n    credits(movieId: $movieId, language: $language) {\n    id\n    cast {\n      name\n      profilePath\n      id\n      creditId\n      adult\n      gender\n      originalName\n    }\n  }\n}\n": types.CreditsDocument,
    "\n  mutation DeleteMovieList($id: ID!) {\n    deleteMovieListById(_id: $id) {\n    _id\n    title\n    }\n  }\n": types.DeleteMovieListDocument,
    "\n  mutation UpdateList($args: RecomendedUpdateInput) {\n    updateRecomendedList(args: $args) {\n      title\n      description\n  }\n}\n": types.UpdateListDocument,
    "\n  query GetRecommended {\n    getRecommended {\n      title\n      _id\n      createdData\n      description\n      movies {\n        _id\n        title\n        poster\n        adult\n        movieId\n        genres\n        releaseDate\n        overview\n        voteCount\n        userDescription\n        sequenceNumber\n\n      }\n    }\n  }\n": types.GetRecommendedDocument,
    "\n  mutation LoginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    status\n    user {\n      authToken\n      lastName\n      _id\n      firstName\n      picture\n      recomendedList {\n        _id\n        createdData\n        description\n        movies {\n          _id\n          adult\n          backdropPath\n          genres\n          overview\n          poster\n          releaseDate\n          title\n          sequenceNumber\n          userDescription\n          voteAverage\n          voteCount\n          movieId\n        }\n        title\n      }\n      role\n    }\n  }\n}\n": types.LoginUserDocument,
    "\nmutation SignUpUser($input: SingUpInput!) {\n  signUpUser(input: $input) {\n    user {\n      createdAt\n      firstName\n      email\n      age\n      _id\n      lastName\n      password\n      picture\n      role\n      updatedAt\n      verified\n    }\n    status\n  }\n}\n": types.SignUpUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddMovie(\n    $movie: MovieCreatedInput!\n    # $title: String\n    # $releaseDate: String\n    # $adult: Boolean\n    # $poster: String\n    # $genres: [String]\n    # $movieId: String\n    # $overview: String\n    # $userDescription: String\n    # $voteCount: Int\n    # $backdropPath: String\n    # $voteAverage: Float\n  ) {\n    createMovie(\n      movie: $movie\n      # title: $title\n      # releaseDate: $releaseDate\n      # adult: $adult\n      # poster: $poster\n      # genres: $genres\n      # movieId: $movieId\n      # overview: $overview\n      # voteCount: $voteCount\n      # userDescription: $userDescription\n      # backdropPath: $backdropPath\n      # voteAverage: $voteAverage\n    ) {\n        _id\n        movieId      \n        title\n      \n    }\n  }\n"): (typeof documents)["\n  mutation AddMovie(\n    $movie: MovieCreatedInput!\n    # $title: String\n    # $releaseDate: String\n    # $adult: Boolean\n    # $poster: String\n    # $genres: [String]\n    # $movieId: String\n    # $overview: String\n    # $userDescription: String\n    # $voteCount: Int\n    # $backdropPath: String\n    # $voteAverage: Float\n  ) {\n    createMovie(\n      movie: $movie\n      # title: $title\n      # releaseDate: $releaseDate\n      # adult: $adult\n      # poster: $poster\n      # genres: $genres\n      # movieId: $movieId\n      # overview: $overview\n      # voteCount: $voteCount\n      # userDescription: $userDescription\n      # backdropPath: $backdropPath\n      # voteAverage: $voteAverage\n    ) {\n        _id\n        movieId      \n        title\n      \n    }\n  }\n"];
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
export function graphql(source: "\n  mutation CreateRecomendedMovie($title: String, $createdData: String, $description: String, $movies: [MovieSelectedInput]) {\n    createRecomendedMovies(title: $title, createdData: $createdData, description: $description, movies: $movies) {\n      title\n      description\n      movies {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRecomendedMovie($title: String, $createdData: String, $description: String, $movies: [MovieSelectedInput]) {\n    createRecomendedMovies(title: $title, createdData: $createdData, description: $description, movies: $movies) {\n      title\n      description\n      movies {\n        title\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query Credits($movieId: ID, $language: String) {\n    credits(movieId: $movieId, language: $language) {\n    id\n    cast {\n      name\n      profilePath\n      id\n      creditId\n      adult\n      gender\n      originalName\n    }\n  }\n}\n"): (typeof documents)["\n  query Credits($movieId: ID, $language: String) {\n    credits(movieId: $movieId, language: $language) {\n    id\n    cast {\n      name\n      profilePath\n      id\n      creditId\n      adult\n      gender\n      originalName\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMovieList($id: ID!) {\n    deleteMovieListById(_id: $id) {\n    _id\n    title\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMovieList($id: ID!) {\n    deleteMovieListById(_id: $id) {\n    _id\n    title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateList($args: RecomendedUpdateInput) {\n    updateRecomendedList(args: $args) {\n      title\n      description\n  }\n}\n"): (typeof documents)["\n  mutation UpdateList($args: RecomendedUpdateInput) {\n    updateRecomendedList(args: $args) {\n      title\n      description\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRecommended {\n    getRecommended {\n      title\n      _id\n      createdData\n      description\n      movies {\n        _id\n        title\n        poster\n        adult\n        movieId\n        genres\n        releaseDate\n        overview\n        voteCount\n        userDescription\n        sequenceNumber\n\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRecommended {\n    getRecommended {\n      title\n      _id\n      createdData\n      description\n      movies {\n        _id\n        title\n        poster\n        adult\n        movieId\n        genres\n        releaseDate\n        overview\n        voteCount\n        userDescription\n        sequenceNumber\n\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    status\n    user {\n      authToken\n      lastName\n      _id\n      firstName\n      picture\n      recomendedList {\n        _id\n        createdData\n        description\n        movies {\n          _id\n          adult\n          backdropPath\n          genres\n          overview\n          poster\n          releaseDate\n          title\n          sequenceNumber\n          userDescription\n          voteAverage\n          voteCount\n          movieId\n        }\n        title\n      }\n      role\n    }\n  }\n}\n"): (typeof documents)["\n  mutation LoginUser($input: LoginInput!) {\n  loginUser(input: $input) {\n    status\n    user {\n      authToken\n      lastName\n      _id\n      firstName\n      picture\n      recomendedList {\n        _id\n        createdData\n        description\n        movies {\n          _id\n          adult\n          backdropPath\n          genres\n          overview\n          poster\n          releaseDate\n          title\n          sequenceNumber\n          userDescription\n          voteAverage\n          voteCount\n          movieId\n        }\n        title\n      }\n      role\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation SignUpUser($input: SingUpInput!) {\n  signUpUser(input: $input) {\n    user {\n      createdAt\n      firstName\n      email\n      age\n      _id\n      lastName\n      password\n      picture\n      role\n      updatedAt\n      verified\n    }\n    status\n  }\n}\n"): (typeof documents)["\nmutation SignUpUser($input: SingUpInput!) {\n  signUpUser(input: $input) {\n    user {\n      createdAt\n      firstName\n      email\n      age\n      _id\n      lastName\n      password\n      picture\n      role\n      updatedAt\n      verified\n    }\n    status\n  }\n}\n"];

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