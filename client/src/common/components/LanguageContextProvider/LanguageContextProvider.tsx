import { FC, ReactNode, useReducer } from 'react'
import { defaultContext, LanguageContext, languageReducer } from '../../../services/context/LanguageContext'

export const LanguageContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, {
    locale: defaultContext
  })
  const value = { state, dispatch }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
