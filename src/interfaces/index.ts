export interface IFormProps {
  title: string
  handleClick: (email: string, password: string) => void
}

export interface IinitialStateUser {
  email: null | string
  token: null | string
  id: null | string
}
export interface IRecipe {
  id: string
  title: string
  image: string
  ingredients: string[]
  recipe: string
}
export interface IRecipes {
  recipes: IRecipe[]
}
export interface IRecipeProps {
  recipe: {
    id: string
    title: string
    recipe: string
    ingredients: string[]
    image: string
  }
}
export interface IWrapper {
  children?: React.ReactNode
}
