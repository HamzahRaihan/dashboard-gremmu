import { createContext } from 'react';

export const PetitionContext = createContext();

export const PetitionContextProvider = ({ children }) => {
  return <PetitionContext.Provider>{children}</PetitionContext.Provider>;
};
