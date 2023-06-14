import { Row } from 'antd';
import { recipes } from '../data/recipes';
import { IRecipe } from '../interfaces';
import Recipe from './Recipe';

const Recipes = () => {

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Recipes</h2>
      <Row justify="space-between" align="top" style={{ gap: '40px', padding: '20px' }}>
        {recipes.map((recipe: IRecipe) =>
          <Recipe recipe={recipe} />
        )}
      </Row>
    </>
  );
};

export default Recipes;
