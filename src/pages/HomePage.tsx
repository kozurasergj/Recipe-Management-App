import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { Row } from 'antd';
import { removeUser } from '../store/slices/userSlice';
import Recipe from '../components/Recipe';
import { useEffect } from 'react';
import { getRecipes } from '../store/slices/recipesSlice';
import { IRecipe } from '../interfaces';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuthentication();


  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const recipes = useAppSelector((state) => state.allRecipes.recipes);

  return (
    <>
      <Wrapper>
        <h2 style={{ textAlign: 'center',marginBottom:'40px' }}>Home</h2>
        <Row justify="space-between" align="top" style={{ gap: '40px', padding: '20px' }}>
          {recipes?.map((recipe: IRecipe) =>
            <Recipe recipe={recipe} />
          )}
        </Row>
        {isAuth ?
          (<Button
            style={{ backgroundColor: 'rgb(21, 9, 70)' }}
            onClick={() => dispatch(removeUser())}
            type="primary"
          >
            Log out from {email}
          </Button>) :
          <div>
            <Link to="/" >Log In</Link> or <Link to="/register"> Sign Up </Link>
          </div>
        }
      </Wrapper>
    </>
  );
};

export default HomePage;
