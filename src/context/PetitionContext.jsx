import { createContext, useEffect, useState } from 'react';

export const PetitionContext = createContext();

const PetitionContextProvider = ({ children }) => {
  const [petitionsData, setPetitionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPetitions = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions`);
        if (response.ok) {
          const responseJson = await response.json();
          setPetitionsData(responseJson.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPetitions();
  }, []);

  return <PetitionContext.Provider>{children}</PetitionContext.Provider>;
};

export default PetitionContextProvider;

const token = localStorage.getItem('ACCOUNT_TOKEN');

const postPetition = async (newPetition) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/petitions`, {
      method: 'POST',
      body: JSON.stringify({
        newPetition,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const PetitionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const newPetition = {
        userId: action.userId,
        title: action.title,
        description: action.description,
        image: action.image,
      };

      postPetition(newPetition);

      return [...state, newPetition];
    }
  }
};
