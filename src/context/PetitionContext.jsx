import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PetitionContext = createContext(null);

export const PetitionDispatchContext = createContext(null);

const PetitionContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [petitions, dispatch] = useReducer(PetitionReducer, []);
  const navigate = useNavigate();
  console.log('🚀 ~ file: PetitionContext.jsx:10 ~ PetitionContextProvider ~ petitions:', petitions);

  const userData = JSON.parse(localStorage.getItem('ACCOUNT_DATA'));

  useEffect(() => {
    setLoading(true);
    const getPetitions = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions`);
        if (response.ok) {
          const responseJson = await response.json();
          dispatch({ type: 'SET_PETITION', petitions: responseJson.data });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPetitions();
  }, []);

  const postPetition = async ({ title, description, image }) => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions`, {
        method: 'POST',
        body: JSON.stringify({ userId: userData.id, title, description, image }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const responseJson = await response.json();
        navigate('/petitions');
        dispatch({ type: 'ADD_PETITION', newPetition: responseJson.data });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Petitions State:', petitions);
  }, [petitions]);

  return (
    <PetitionContext.Provider value={{ petitions, loading, postPetition }}>
      <PetitionDispatchContext.Provider value={dispatch}>{children}</PetitionDispatchContext.Provider>
    </PetitionContext.Provider>
  );
};

export default PetitionContextProvider;

const token = localStorage.getItem('ACCOUNT_TOKEN');

export const usePetitionDispatch = () => {
  return useContext(PetitionDispatchContext);
};

export const usePetition = () => {
  return useContext(PetitionContext);
};

const PetitionReducer = (petitions, action) => {
  switch (action.type) {
    case 'SET_PETITION':
      return action.petitions;
    case 'ADD_PETITION': {
      return action.newPetition;
    }
    default:
      return petitions;
  }
};
