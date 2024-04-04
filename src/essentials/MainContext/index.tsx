import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface IMainContext {
  // your values goes here
  loggedIn?: boolean;
  setLoggedIn?: Dispatch<SetStateAction<boolean>>;
}

export const MainContext = createContext<IMainContext>({});

const Provider = MainContext.Provider;

export const MainProvider: React.FC<{ children: any }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return <Provider value={{ loggedIn, setLoggedIn }}>{children}</Provider>;
};
