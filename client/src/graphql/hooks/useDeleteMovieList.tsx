import { useMutation } from '@apollo/client'
import { DELETE_LIST_BY_ID } from './../recommended.mutation'

const useDeleteMovieList = () => {
  const [deleteMovieList, { loading, error }] = useMutation(DELETE_LIST_BY_ID, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          getRecommended(currentList = []) {
            return data
              ? currentList.filter(
                  (list: { __ref: string }) => list.__ref !== `RecomendedMovies:${data.deleteMovieListById._id}`
                )
              : currentList
          }
        }
      })
    }
  })

  return {
    deleteError: error,
    deleteLoading: loading,
    deleteMovieList
  }
}
export default useDeleteMovieList
