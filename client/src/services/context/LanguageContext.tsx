import { createContext, Dispatch, Reducer } from 'react'
import { LanguageAction } from '../../common/constants/constants'
import { saveTolocalStorage, getFromLocalStorage } from '../../utils/utils'

interface IContext {
  state: ReduserState
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>
}
interface LanguageReduserAction {
  type: LanguageAction
  payload: string
}
interface ReduserState {
  locale: string
}
export const defaultContext = getFromLocalStorage('language') || 'en-US'
export const LanguageContext = createContext<IContext | null>(null)

export const languageReducer: Reducer<ReduserState, LanguageReduserAction> = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case LanguageAction.reset:
      return { ...state, defaultContext }
    case LanguageAction.setLocale:
      saveTolocalStorage('language', payload)
      return { ...state, locale: payload }
    default:
      return state
  }
}
