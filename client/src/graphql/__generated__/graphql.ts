/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
};

export type Cast = CastAndCrew & {
  __typename?: 'Cast';
  adult: Scalars['Boolean'];
  castId: Scalars['ID'];
  character?: Maybe<Scalars['String']>;
  creditId: Scalars['ID'];
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  knownForDepartment?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  originalName: Scalars['String'];
  popularit?: Maybe<Scalars['Float']>;
  profilePath: Scalars['String'];
};

export type CastAndCrew = {
  adult: Scalars['Boolean'];
  creditId: Scalars['ID'];
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  knownForDepartment?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  originalName: Scalars['String'];
  popularit?: Maybe<Scalars['Float']>;
  profilePath: Scalars['String'];
};

export type CreateUserListInput = {
  createdData?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  movies?: InputMaybe<Array<InputMaybe<MovieSelectedInput>>>;
  title?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type Credits = {
  __typename?: 'Credits';
  cast: Array<Cast>;
  crew: Array<Crew>;
  id: Scalars['ID'];
};

export type Crew = CastAndCrew & {
  __typename?: 'Crew';
  adult: Scalars['Boolean'];
  creditId: Scalars['ID'];
  department: Scalars['String'];
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  job: Scalars['String'];
  knownForDepartment?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  originalName: Scalars['String'];
  popularit?: Maybe<Scalars['Float']>;
  profilePath: Scalars['String'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  adult?: Maybe<Scalars['Boolean']>;
  backdropPath?: Maybe<Scalars['String']>;
  genreIds: Array<Scalars['Int']>;
  id: Scalars['ID'];
  originalLanguage?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  poster: Scalars['String'];
  releaseDate: Scalars['String'];
  title: Scalars['String'];
  video?: Maybe<Scalars['Boolean']>;
  voteAverage?: Maybe<Scalars['Float']>;
  voteCount?: Maybe<Scalars['Int']>;
};

export type MovieCreatedInput = {
  adult?: InputMaybe<Scalars['Boolean']>;
  backdropPath?: InputMaybe<Scalars['String']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  movieId?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  userDescription?: InputMaybe<Scalars['String']>;
  voteAverage?: InputMaybe<Scalars['Float']>;
  voteCount?: InputMaybe<Scalars['Int']>;
};

export type MovieSelected = {
  __typename?: 'MovieSelected';
  _id: Scalars['ID'];
  adult?: Maybe<Scalars['Boolean']>;
  backdropPath?: Maybe<Scalars['String']>;
  genres: Array<Scalars['String']>;
  movieId: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster: Scalars['String'];
  releaseDate: Scalars['String'];
  sequenceNumber?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  userDescription?: Maybe<Scalars['String']>;
  voteAverage?: Maybe<Scalars['Float']>;
  voteCount?: Maybe<Scalars['Int']>;
};

export type MovieSelectedInput = {
  _id: Scalars['ID'];
  adult?: InputMaybe<Scalars['Boolean']>;
  backdropPath?: InputMaybe<Scalars['String']>;
  genres: Array<InputMaybe<Scalars['String']>>;
  movieId: Scalars['String'];
  overview?: InputMaybe<Scalars['String']>;
  poster: Scalars['String'];
  releaseDate: Scalars['String'];
  sequenceNumber?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  userDescription?: InputMaybe<Scalars['String']>;
  voteAverage?: InputMaybe<Scalars['Float']>;
  voteCount?: InputMaybe<Scalars['Int']>;
};

export type Movies = {
  __typename?: 'Movies';
  page: Scalars['Int'];
  results: Array<Movie>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserDescription: MovieSelected;
  createMovie: MovieSelected;
  createRecomendedMovies: RecomendedMovies;
  createUserList: User;
  deleteAll: DeleteResponse;
  deleteMovie: MovieSelected;
  deleteMovieListById: RecomendedMovies;
  loginUser: TokenResponse;
  registration: User;
  signUpUser: UserResponse;
  updateRecomendedList: RecomendedMovies;
};


export type MutationAddUserDescriptionArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  userDescription?: InputMaybe<Scalars['String']>;
};


export type MutationCreateMovieArgs = {
  movie: MovieCreatedInput;
};


export type MutationCreateRecomendedMoviesArgs = {
  createdData?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  movies?: InputMaybe<Array<InputMaybe<MovieSelectedInput>>>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserListArgs = {
  params: CreateUserListInput;
};


export type MutationDeleteMovieArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteMovieListByIdArgs = {
  _id: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationRegistrationArgs = {
  params: SingUpInput;
};


export type MutationSignUpUserArgs = {
  input: SingUpInput;
};


export type MutationUpdateRecomendedListArgs = {
  args?: InputMaybe<RecomendedUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  credits: Credits;
  genres: Array<Genre>;
  getRecommended: Array<RecomendedMovies>;
  getSelectedMovies: Array<MovieSelected>;
  logoutUser: Scalars['Boolean'];
  movieById: MovieSelected;
  movies: Movies;
  refreshAccessToken: TokenResponse;
  users: Array<User>;
};


export type QueryCreditsArgs = {
  language?: InputMaybe<Scalars['String']>;
  movieId?: InputMaybe<Scalars['ID']>;
};


export type QueryMovieByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryMoviesArgs = {
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type RecomendedMovies = {
  __typename?: 'RecomendedMovies';
  _id: Scalars['ID'];
  createdData: Scalars['String'];
  description: Scalars['String'];
  movies: Array<MovieSelected>;
  title: Scalars['String'];
};

export type RecomendedUpdateInput = {
  _id: Scalars['ID'];
  createdData?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  movies?: InputMaybe<Array<InputMaybe<MovieSelectedInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type SingUpInput = {
  age: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  picture: Scalars['String'];
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  access_token: Scalars['String'];
  status: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  age: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  picture: Scalars['String'];
  recomendedList: Array<RecomendedMovies>;
  role: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified: Scalars['Boolean'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  status: Scalars['String'];
  user: User;
};

export type AddMovieMutationVariables = Exact<{
  movie: MovieCreatedInput;
}>;


export type AddMovieMutation = { __typename?: 'Mutation', createMovie: { __typename?: 'MovieSelected', _id: string, movieId: string, title: string } };

export type RemoveMovieMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type RemoveMovieMutation = { __typename?: 'Mutation', deleteMovie: { __typename?: 'MovieSelected', _id: string, movieId: string } };

export type AddUserDescriptionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  userDescription?: InputMaybe<Scalars['String']>;
}>;


export type AddUserDescriptionMutation = { __typename?: 'Mutation', addUserDescription: { __typename?: 'MovieSelected', title: string } };

export type CreateRecomendedMovieMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  createdData?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  movies?: InputMaybe<Array<InputMaybe<MovieSelectedInput>> | InputMaybe<MovieSelectedInput>>;
}>;


export type CreateRecomendedMovieMutation = { __typename?: 'Mutation', createRecomendedMovies: { __typename?: 'RecomendedMovies', title: string, description: string, movies: Array<{ __typename?: 'MovieSelected', title: string }> } };

export type DeleteAllMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllMutation = { __typename?: 'Mutation', deleteAll: { __typename?: 'DeleteResponse', success: boolean, message?: string | null } };

export type MoviesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', page: number, totalResults: number, totalPages: number, results: Array<{ __typename?: 'Movie', adult?: boolean | null, title: string, releaseDate: string, poster: string, voteCount?: number | null, voteAverage?: number | null, backdropPath?: string | null, id: string, genreIds: Array<number>, overview?: string | null }> } };

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', selectedMovies: Array<{ __typename?: 'MovieSelected', _id: string, title: string, poster: string, adult?: boolean | null, movieId: string, genres: Array<string>, releaseDate: string, overview?: string | null, voteCount?: number | null, userDescription?: string | null, backdropPath?: string | null, voteAverage?: number | null }> };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type GetMovieByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMovieByIdQuery = { __typename?: 'Query', movieById: { __typename?: 'MovieSelected', _id: string, title: string, poster: string, adult?: boolean | null, movieId: string, genres: Array<string>, releaseDate: string, overview?: string | null, voteCount?: number | null, userDescription?: string | null, backdropPath?: string | null, voteAverage?: number | null } };

export type CreditsQueryVariables = Exact<{
  movieId?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type CreditsQuery = { __typename?: 'Query', credits: { __typename?: 'Credits', id: string, cast: Array<{ __typename?: 'Cast', name: string, profilePath: string, id: string, creditId: string, adult: boolean, gender?: number | null, originalName: string }> } };

export type DeleteMovieListMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteMovieListMutation = { __typename?: 'Mutation', deleteMovieListById: { __typename?: 'RecomendedMovies', _id: string, title: string } };

export type UpdateListMutationVariables = Exact<{
  args?: InputMaybe<RecomendedUpdateInput>;
}>;


export type UpdateListMutation = { __typename?: 'Mutation', updateRecomendedList: { __typename?: 'RecomendedMovies', title: string, description: string } };

export type GetRecommendedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecommendedQuery = { __typename?: 'Query', getRecommended: Array<{ __typename?: 'RecomendedMovies', title: string, _id: string, createdData: string, description: string, movies: Array<{ __typename?: 'MovieSelected', _id: string, title: string, poster: string, adult?: boolean | null, movieId: string, genres: Array<string>, releaseDate: string, overview?: string | null, voteCount?: number | null, userDescription?: string | null, sequenceNumber?: number | null }> }> };

export type LoginUserMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'TokenResponse', access_token: string, status: string } };


export const AddMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieCreatedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"movie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AddMovieMutation, AddMovieMutationVariables>;
export const RemoveMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}}]}}]}}]} as unknown as DocumentNode<RemoveMovieMutation, RemoveMovieMutationVariables>;
export const AddUserDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userDescription"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"userDescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userDescription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AddUserDescriptionMutation, AddUserDescriptionMutationVariables>;
export const CreateRecomendedMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecomendedMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdData"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movies"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieSelectedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecomendedMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"createdData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdData"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"movies"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movies"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecomendedMovieMutation, CreateRecomendedMovieMutationVariables>;
export const DeleteAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteAllMutation, DeleteAllMutationVariables>;
export const MoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Movies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"genreIds"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}}]}}]}}]}}]} as unknown as DocumentNode<MoviesQuery, MoviesQueryVariables>;
export const GetMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"selectedMovies"},"name":{"kind":"Name","value":"getSelectedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"userDescription"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}}]}}]} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;
export const GenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GenresQuery, GenresQueryVariables>;
export const GetMovieByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovieBYId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"userDescription"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}}]}}]} as unknown as DocumentNode<GetMovieByIdQuery, GetMovieByIdQueryVariables>;
export const CreditsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Credits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"credits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePath"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creditId"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}}]}}]}}]} as unknown as DocumentNode<CreditsQuery, CreditsQueryVariables>;
export const DeleteMovieListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMovieList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMovieListById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteMovieListMutation, DeleteMovieListMutationVariables>;
export const UpdateListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RecomendedUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRecomendedList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateListMutation, UpdateListMutationVariables>;
export const GetRecommendedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecommended"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecommended"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdData"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"userDescription"}},{"kind":"Field","name":{"kind":"Name","value":"sequenceNumber"}}]}}]}}]}}]} as unknown as DocumentNode<GetRecommendedQuery, GetRecommendedQueryVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;