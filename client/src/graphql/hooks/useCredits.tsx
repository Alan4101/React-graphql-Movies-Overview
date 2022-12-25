import { useLazyQuery } from '@apollo/client'
import { GET_CREDITS_BY_ID } from '../movies.query'

const useCredits = () => {
  const [getCredits, { data, loading, error }] = useLazyQuery(GET_CREDITS_BY_ID)
  return {
    getCredits,
    castList: data?.credits.cast,
    castLoading: loading,
    castError: error
  }
}
export default useCredits
