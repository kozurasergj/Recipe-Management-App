import axios from 'axios';

export const getRecipesApi = async () => {
  try {
    const response = await axios.get('http://localhost:3001/recipes');
    return response.data;
  } catch (error) {
    console.log('An error occurred while fetching recipes.Please run the following command in your terminal |npm run server| or |yarn server|')
    console.error(error);
  }
};
