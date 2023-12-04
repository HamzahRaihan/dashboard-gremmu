import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
  handleLogin: async () => {},
  handleLogout: async () => {},
  token: undefined,
  userData: undefined,
  loading: false,
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const tokenData = localStorage.getItem('ACCOUNT_TOKEN');
    const userHasLoggedIn = JSON.parse(localStorage.getItem('ACCOUNT_DATA'));
    if (tokenData) {
      setToken(tokenData);
      setUserData(userHasLoggedIn);
    } else {
      setToken(undefined);
      setUserData(undefined);
    }
  }, []);

  const handleLogin = async (email, password) => {
    setLoading(true);
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
      setToken(getToken);
      setUserData(decoded);
    }
    if (response.status === 404) {
      console.error('Akun tidak ditemukan');
    } else {
      console.error('Login failed:', responseJson.error);
    }

    const auth = JSON.parse(localStorage.getItem('ACCOUNT_DATA'));
    if (auth?.role == 'admin') {
      navigate('/');
    } else if (auth?.role == 'user') {
      navigate('/forbidden');
    } else {
      console.error('Not log in yet');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('ACCOUNT_TOKEN');
    localStorage.removeItem('ACCOUNT_DATA');
    setToken(undefined);
    setUserData(undefined);
    navigate('/login');
  };

  return <AuthContext.Provider value={{ token, handleLogin, userData, handleLogout, loading }}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
