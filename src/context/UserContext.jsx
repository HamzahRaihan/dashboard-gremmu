import PropTypes from 'prop-types';
import { createContext } from 'react';

export const UserContext = createContext(null);

export const UserDispatchContext = createContext(null);

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContextProvider;

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
