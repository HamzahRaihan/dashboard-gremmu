import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useState } from 'react';

export const UserContext = createContext(null);

export const UserDispatchContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(UserReducer, []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllUsers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
        if (response.ok) {
          const responseJson = await response.json();
          dispatch({ type: 'SET_USER', users: responseJson.data });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllUsers();
  }, []);

  useEffect(() => {
    console.log('users data fetched', users);
  }, [users]);

  return (
    <UserContext.Provider value={{ users, loading }}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;

const UserReducer = (users, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.users;
  }
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
