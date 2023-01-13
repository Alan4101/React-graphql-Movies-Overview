import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { SIGN_IN } from './../user.mutation'
import { AuthContext } from '../../services/context/AuthContext'
import { User } from '../__generated__'

const useSignIn = () => {
  const navigate = useNavigate()
  const context = useContext(AuthContext)

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
    update(proxy, { data }) {
      if (data) {
        console.log(data)
        context.login(data as unknown as User)
        navigate('/')
      }
    }
  })
  return {
    signIn,
    authLoading: loading,
    data,
    authError: error
  }
}
export default useSignIn
