import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext({
  handleLogin: async () => {},
  handleLogout: async () => {},
  token: null,
  userData: null,
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const tokenData = localStorage.getItem('ACCOUNT_TOKEN');
    const userHasLoggedIn = localStorage.getItem('ACCOUNT_DATA');
    if (tokenData) {
      setToken(tokenData);
      setUserData(userHasLoggedIn);
    } else {
      setToken(undefined);
      setUserData(undefined);
    }
  }, []);

  const handleLogin = async (email, password) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    if (response.ok) {
      localStorage.setItem('ACCOUNT_TOKEN', responseJson.data);
      const getToken = localStorage.getItem('ACCOUNT_TOKEN');
      const decoded = jwtDecode(getToken);
      localStorage.setItem('ACCOUNT_DATA', JSON.stringify(decoded));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ACCOUNT_TOKEN');
    localStorage.removeItem('ACCOUNT_DATA');
    setToken('');
    setUserData('');
  };

  return <AuthContext.Provider value={{ token, handleLogin, userData, handleLogout }}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
