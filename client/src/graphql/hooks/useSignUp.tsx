import { useMutation } from '@apollo/client';
import { SIGN_UP } from './../user.mutation';

const useSignUp = () => {
  const [signUp, {data}] = useMutation(SIGN_UP)
  return {
    signUp,
    data
  }
}
export default useSignUp
