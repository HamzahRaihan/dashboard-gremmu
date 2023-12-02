import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const NewsContext = createContext({
  newsData: [],
  handleAddNews: async () => {},
  categories: [],
  loading: false,
});

export const NewsContextProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('🚀 ~ file: NewsContext.jsx:13 ~ NewsContextProvider ~ categories:', categories);
  const token = localStorage.getItem('ACCOUNT_TOKEN');

  const userData = JSON.parse(localStorage.getItem('ACCOUNT_DATA'));
  console.log('🚀 ~ file: NewsContext.jsx:16 ~ NewsContextProvider ~ userData:', userData);

  const getAllNews = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`);
    const data = await response.json();
    if (response.ok) {
      setNewsData(data.data);
    } else {
      console.error('error');
    }
  };
  useEffect(() => {
    getAllNews();
  }, []);

  const handleAddNews = async (title, description, fileUrl, catId) => {
    console.log('🚀 ~ file: NewsContext.jsx:35 ~ handleAddNews ~ fileUrl:', fileUrl);
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          image: fileUrl,
          userId: userData.id,
          catId,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        await getAllNews();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`);
        if (response.ok) {
          const responseJson = await response.json();
          setCategories(responseJson.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  return <NewsContext.Provider value={{ newsData, handleAddNews, categories }}>{children}</NewsContext.Provider>;
};

NewsContextProvider.propTypes = {
  children: PropTypes.node,
};
