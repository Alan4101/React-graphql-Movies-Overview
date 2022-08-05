import {
  createContext,
  FC,
  useReducer,
  ReactNode,
  Dispatch,
  Reducer,
} from "react";
import { saveTolocalStorage, getFromLocalStorage } from "../../utils/utils";

interface IContext {
  state: any;
  dispatch: Dispatch<any>;
}
export const LanguageContext = createContext<IContext | null>(null);

const defaultContext = getFromLocalStorage("language") || "en-US";

enum LanguageAction {
  reset = "reset",
  setLocale = "setLocale",
}
interface LanguageReduserAction {
  type: LanguageAction;
  payload: string;
}
interface ReduserState {
  locale: string;
}

const languageReduser: Reducer<ReduserState, LanguageReduserAction> = (
  state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case LanguageAction.reset:
      return { ...state, defaultContext };
    case LanguageAction.setLocale:
      saveTolocalStorage("language", payload);
      return { ...state, locale: payload };
    default:
      return state;
  }
};

export const LanguageContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(languageReduser, {
    locale: defaultContext,
  });
  const value = { state, dispatch };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
