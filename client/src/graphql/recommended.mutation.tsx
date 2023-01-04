import { graphql as gql } from './__generated__/'

export const DELETE_LIST_BY_ID = gql(`
  mutation DeleteMovieList($id: ID!) {
    deleteMovieListById(_id: $id) {
    _id
    title
    }
  }
`)
export const UPDATE_RECOMENDED_LIST = gql(`
  mutation UpdateList($args: RecomendedUpdateInput) {
    updateRecomendedList(args: $args) {
      title
      description
  }
}
`)
