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

export type MovieSelected = {
  __typename?: 'MovieSelected';
  _id: Scalars['ID'];
  adult?: Maybe<Scalars['Boolean']>;
  genres: Array<Scalars['String']>;
  movieId: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster: Scalars['String'];
  releaseDate: Scalars['String'];
  title: Scalars['String'];
  userDescription?: Maybe<Scalars['String']>;
  voteAverage?: Maybe<Scalars['Float']>;
  voteCount?: Maybe<Scalars['Int']>;
};

export type MovieSelectedInput = {
  _id: Scalars['ID'];
  adult?: InputMaybe<Scalars['Boolean']>;
  genres: Array<InputMaybe<Scalars['String']>>;
  movieId: Scalars['String'];
  overview?: InputMaybe<Scalars['String']>;
  poster: Scalars['String'];
  releaseDate: Scalars['String'];
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
  deleteAll: DeleteResponse;
  deleteMovie: MovieSelected;
};


export type MutationAddUserDescriptionArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  userDescription?: InputMaybe<Scalars['String']>;
};


export type MutationCreateMovieArgs = {
  adult?: InputMaybe<Scalars['Boolean']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  movieId?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<Scalars['String']>;
  poster?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  userDescription?: InputMaybe<Scalars['String']>;
  voteCount?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateRecomendedMoviesArgs = {
  createdData?: InputMaybe<Scalars['String']>;
  movies?: InputMaybe<Array<InputMaybe<MovieSelectedInput>>>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteMovieArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<Genre>;
  getRecommended: Array<RecomendedMovies>;
  getSelectedMovies: Array<MovieSelected>;
  movieById: MovieSelected;
  movies: Movies;
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
  _id?: Maybe<Scalars['ID']>;
  createdData?: Maybe<Scalars['String']>;
  movies: Array<MovieSelected>;
  title?: Maybe<Scalars['String']>;
};

export type AddMovieMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['String']>;
  adult?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  movieId?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<Scalars['String']>;
  userDescription?: InputMaybe<Scalars['String']>;
  voteCount?: InputMaybe<Scalars['Int']>;
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
  movies?: InputMaybe<Array<InputMaybe<MovieSelectedInput>> | InputMaybe<MovieSelectedInput>>;
}>;


export type CreateRecomendedMovieMutation = { __typename?: 'Mutation', createRecomendedMovies: { __typename?: 'RecomendedMovies', title?: string | null, movies: Array<{ __typename?: 'MovieSelected', title: string }> } };

export type DeleteAllMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllMutation = { __typename?: 'Mutation', deleteAll: { __typename?: 'DeleteResponse', success: boolean, message?: string | null } };

export type MoviesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', page: number, totalResults: number, totalPages: number, results: Array<{ __typename?: 'Movie', adult?: boolean | null, title: string, releaseDate: string, poster: string, voteCount?: number | null, voteAverage?: number | null, backdropPath?: string | null, id: string, genreIds: Array<number>, overview?: string | null }> } };

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', selectedMovies: Array<{ __typename?: 'MovieSelected', _id: string, title: string, poster: string, adult?: boolean | null, movieId: string, genres: Array<string>, releaseDate: string, overview?: string | null, voteCount?: number | null, userDescription?: string | null }> };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type GetMovieByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMovieByIdQuery = { __typename?: 'Query', movieById: { __typename?: 'MovieSelected', _id: string, title: string, poster: string, adult?: boolean | null, movieId: string, genres: Array<string>, releaseDate: string, overview?: string | null, voteCount?: number | null, userDescription?: string | null } };


export const AddMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"releaseDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adult"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poster"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"genres"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"overview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userDescription"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"voteCount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"releaseDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"releaseDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"adult"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adult"}}},{"kind":"Argument","name":{"kind":"Name","value":"poster"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poster"}}},{"kind":"Argument","name":{"kind":"Name","value":"genres"},"value":{"kind":"Variable","name":{"kind":"Name","value":"genres"}}},{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}},{"kind":"Argument","name":{"kind":"Name","value":"overview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"overview"}}},{"kind":"Argument","name":{"kind":"Name","value":"voteCount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"voteCount"}}},{"kind":"Argument","name":{"kind":"Name","value":"userDescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userDescription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AddMovieMutation, AddMovieMutationVariables>;
export const RemoveMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}}]}}]}}]} as unknown as DocumentNode<RemoveMovieMutation, RemoveMovieMutationVariables>;
export const AddUserDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userDescription"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"userDescription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userDescription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AddUserDescriptionMutation, AddUserDescriptionMutationVariables>;
export const CreateRecomendedMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecomendedMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdData"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movies"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieSelectedInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecomendedMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"createdData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdData"}}},{"kind":"Argument","name":{"kind":"Name","value":"movies"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movies"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecomendedMovieMutation, CreateRecomendedMovieMutationVariables>;
export const DeleteAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteAllMutation, DeleteAllMutationVariables>;
export const MoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Movies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"genreIds"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}}]}}]}}]}}]} as unknown as DocumentNode<MoviesQuery, MoviesQueryVariables>;
export const GetMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"selectedMovies"},"name":{"kind":"Name","value":"getSelectedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"userDescription"}}]}}]}}]} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;
export const GenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GenresQuery, GenresQueryVariables>;
export const GetMovieByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovieBYId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"movieId"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"voteCount"}},{"kind":"Field","name":{"kind":"Name","value":"userDescription"}}]}}]}}]} as unknown as DocumentNode<GetMovieByIdQuery, GetMovieByIdQueryVariables>;