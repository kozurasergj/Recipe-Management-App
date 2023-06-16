import { configureStore } from '@reduxjs/toolkit'

import recipesSlice from './slices/recipesSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    allRecipes: recipesSlice
  }
})

export type DispathType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
