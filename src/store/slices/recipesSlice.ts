import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRecipesApi } from '../../api';
import { IRecipe } from '../../interfaces';

export interface IInitialState {
  recipes: IRecipe[];
  favorite: IRecipe[];
}

const initialState: IInitialState = {
  recipes: [],
  favorite: []
};

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async () => {
    const response = await getRecipesApi();
    return response;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setFavorite(state, action) {
      const { id } = action.payload;
      const isRecipeAlreadyFavorite = state.favorite.some(recipe => recipe.id === id);
      if (!isRecipeAlreadyFavorite) {
        const recipe = state.recipes.find(recipe => recipe.id === id);
        if (recipe) {
          state.favorite.push(recipe);
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRecipes.fulfilled, (state: any, action: any) => {
      state.recipes = action.payload;
    });
  },
})

export const { setFavorite } = recipesSlice.actions;
export default recipesSlice.reducer;
