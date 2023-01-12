import { useMutation } from '@apollo/client';
import { SIGN_IN } from './../user.mutation';

const useSignIn = () => {
  const [signIn, {data}] = useMutation(SIGN_IN)
  return {
    signIn,
    data
  }
}
export default useSignIn
