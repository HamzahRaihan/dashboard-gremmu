import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const NewsContext = createContext({
  newsData: [],
});

export const NewsContextProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getAllNews = async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`);
      const data = await response.json();
      if (response.ok) {
        setNewsData(data.data);
      } else {
        console.error('error');
      }
    };
    getAllNews();
  }, []);

  return <NewsContext.Provider value={{ newsData }}>{children}</NewsContext.Provider>;
};

NewsContextProvider.propTypes = {
  children: PropTypes.node,
};
