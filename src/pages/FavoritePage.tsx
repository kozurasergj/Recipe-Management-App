import Wrapper from '../components/Wrapper';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { Row } from 'antd';
import Recipe from '../components/Recipe';
import { setFavorite } from '../store/slices/recipesSlice';
import { useEffect } from 'react';
import {  Typography } from 'antd';
import { IRecipe } from '../interfaces';
const { Text} = Typography;

const FavoritePage = () => {
  const { isAuth, email } = useAuthentication();
  
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((state: any) => state.allRecipes.favorite);

  const id = '1';

  useEffect(() => {
    dispatch(setFavorite({ id }));
  }, [dispatch])


  return (
    <Wrapper>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Favorite Page</h2>
      <Row justify="space-between" align="top" style={{ gap: '40px', padding: '20px' }}>
        {favorite.length < 1 && <Text type="danger">You haven't added any cards yet. Please like at least one recipe</Text>}
        {favorite.map((recipe: IRecipe) =>
          <Recipe recipe={recipe} />
        )}
      </Row>
    </Wrapper>
  );
};

export default FavoritePage;
