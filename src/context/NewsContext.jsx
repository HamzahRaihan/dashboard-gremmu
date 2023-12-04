import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

export const NewsContext = createContext({
  newsData: [],
  handleAddNews: async () => {},
  handleEditNews: async () => {},
  categories: [],
  loading: false,
  newsById: [],
});

export const NewsContextProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newsById, setNewsById] = useState([]);
  const token = localStorage.getItem('ACCOUNT_TOKEN');

  const userData = JSON.parse(localStorage.getItem('ACCOUNT_DATA'));

  const navigate = useNavigate();

  const { id } = useParams();
  console.log('🚀 ~ file: NewsContext.jsx:25 ~ NewsContextProvider ~ id:', id);

  const getAllNews = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`);
      const data = await response.json();
      if (response.ok) {
        console.log('Data fetched', data);
        setNewsData(data.data);
      } else {
        console.error('error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const handleAddNews = async (title, description, fileUrl, categoryId) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          image: fileUrl,
          userId: userData.id,
          categoryId,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        await getAllNews();
        navigate('/news');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getNewsByID = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news/${id}`);
        const responseJson = await response.json();
        setNewsById(responseJson.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getNewsByID();
  }, [id]);

  const handleEditNews = async (title, description, fileUrl, categoryId) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/news/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          description,
          image: fileUrl,
          userId: userData.id,
          categoryId,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        await getAllNews();
        navigate('/news');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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

  return <NewsContext.Provider value={{ newsData, handleAddNews, categories, loading, newsById, handleEditNews }}>{children}</NewsContext.Provider>;
};

NewsContextProvider.propTypes = {
  children: PropTypes.node,
};
