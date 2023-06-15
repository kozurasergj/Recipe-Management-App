import axios from 'axios';

export const getRecipesApi = async () => {
  try {
    const response = await axios.get('http://localhost:3001/recipes');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
