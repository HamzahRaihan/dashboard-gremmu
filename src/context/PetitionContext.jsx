import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export const PetitionContext = createContext(null);

export const PetitionDispatchContext = createContext(null);

const PetitionContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [petitionByID, setPetitionByID] = useState([]);
  console.log('🚀 ~ file: PetitionContext.jsx:12 ~ PetitionContextProvider ~ petitionByID:', petitionByID);
  const [petitions, dispatch] = useReducer(PetitionReducer, []);
  const navigate = useNavigate();
  console.log('🚀 ~ file: PetitionContext.jsx:10 ~ PetitionContextProvider ~ petitions:', petitions);

  const { id } = useParams();
  console.log('🚀 ~ file: PetitionContext.jsx:17 ~ PetitionContextProvider ~ id:', id);

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

  useEffect(() => {
    setLoading(true);
    const getPetitionsByID = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions/${id ? id : 1}`);
        if (response.ok) {
          const responseJson = await response.json();
          setPetitionByID(responseJson.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPetitionsByID();
  }, [id]);

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
        dispatch({ type: 'ADD_PETITION', newPetition: responseJson.data });
        navigate('/petitions');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const editPetition = async ({ id, title, description, image }) => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId: userData.id, id, title, description, image }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        toast.success('Successfully edited');
        navigate('/petitions');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deletePetition = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        toast.success('Successfully deleted');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PetitionContext.Provider value={{ petitions, petitionByID, loading, postPetition, editPetition, deletePetition }}>
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
    case 'ADD_PETITION':
      return [...petitions, action.newPetition];
    case 'EDIT_PETITION':
      return petitions.map((p) => {
        if (p.id == action.payload.id) {
          return action.payload;
        } else {
          return p;
        }
      });
    case 'DELETE_PETITION':
      return petitions.filter((p) => p.id !== action.id);
    default:
      return petitions;
  }
};
