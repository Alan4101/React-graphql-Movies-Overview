import { FC, ReactNode, useReducer } from "react";
import {
  defaultContext,
  LanguageContext,
  languageReduser,
} from "../../../services/context/LanguageContext";

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
