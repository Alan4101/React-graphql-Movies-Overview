/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, useReducer, createContext, ReactNode } from 'react'
import jwtDecode from 'jwt-decode'
import { User } from '../../graphql'

enum AuthTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

type TAuthState = {
  user: User | null
}
type TAuthAction = {
  type: string
  payload: User | null
}

const initialState: TAuthState = {
  user: null
}
const token = localStorage.getItem('token')
if (token) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodedToken: any = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token')
  } else {
    initialState.user = decodedToken
  }
}
type AuthContext = {
  user: User | null,
  login: (userData: User) => void
  logout: () => void
}
const AuthContext = createContext<AuthContext>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (userData: User) => {},
  logout: () => {}
})

const authReducer = (state: TAuthState, action: TAuthAction) => {
  const { type } = action

  switch (type) {
    case AuthTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case AuthTypes.LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (userData: User) => {
    localStorage.setItem('token', userData.authToken)
    dispatch({
      type: AuthTypes.LOGIN,
      payload: userData
    })
  }
  const logout = () => {
    localStorage.removeItem('token')
    dispatch({
      type: AuthTypes.LOGOUT,
      payload: null
    })
  }

  return <AuthContext.Provider value={{ user: state.user, login, logout }}>{children}</AuthContext.Provider>
}
export {AuthProvider, AuthContext} 
