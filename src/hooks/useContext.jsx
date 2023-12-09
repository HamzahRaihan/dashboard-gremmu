import { useContext } from 'react';
import { PetitionContext, PetitionDispatchContext } from '../context/PetitionContext';
import { UserContext, UserDispatchContext } from '../context/UserContext';

export const usePetitionDispatch = () => {
  return useContext(PetitionDispatchContext);
};

export const usePetition = () => {
  return useContext(PetitionContext);
};

export const useUsers = () => {
  return useContext(UserContext);
};

export const useUsersDispatch = () => {
  return useContext(UserDispatchContext);
};
