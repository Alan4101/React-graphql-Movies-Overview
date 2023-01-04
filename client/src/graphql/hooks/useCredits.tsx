import { useLazyQuery } from '@apollo/client'
import { GET_CREDITS_BY_ID } from '../movies.query'
import { CreditsQuery } from '../__generated__'

const useCredits = () => {
  const [getCredits, { data, loading, error }] = useLazyQuery<CreditsQuery>(GET_CREDITS_BY_ID)
  return {
    getCredits,
    castList: data?.credits.cast,
    castLoading: loading,
    castError: error
  }
}
export default useCredits
