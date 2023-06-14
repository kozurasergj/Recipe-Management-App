export interface IFormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export interface IRecipe {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  recipe: string;
}
export interface IRecipes {
  recipes: IRecipe[];
}
