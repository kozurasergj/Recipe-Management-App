import Wrapper from '../components/Wrapper';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAppDispatch } from '../hooks/useRedux';
import { Row } from 'antd';
import Recipe from '../components/Recipe';
import { setFavorite } from '../store/slices/recipesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const FavoritePage = () => {
  const { isAuth, email } = useAuthentication();
  
  const dispatch = useAppDispatch();
  const favorite = useSelector((state: any) => state.allRecipes.favorite);

  const id = '1';

  useEffect(() => {
    dispatch(setFavorite({ id }));
  }, [dispatch])


  return (
    <Wrapper>
      <h2>Favorite Page</h2>
      <Row justify="space-between" align="top" style={{ gap: '40px', padding: '20px' }}>
        {favorite.map((recipe: any) =>
          <Recipe recipe={recipe} />
        )}
      </Row>
    </Wrapper>
  );
};

export default FavoritePage;
