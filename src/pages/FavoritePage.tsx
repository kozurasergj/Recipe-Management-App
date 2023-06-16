import { Row } from 'antd'
import { Typography } from 'antd'

import Recipe from '../components/Recipe'
import Wrapper from '../components/Wrapper'
import { useAppSelector } from '../hooks/useRedux'
import { IRecipe } from '../interfaces'
const { Text } = Typography

const FavoritePage = () => {
  const favorite = useAppSelector((state) => state.allRecipes.favorite)

  return (
    <Wrapper>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Favorite Page</h2>
      <Row justify='space-between' align='top' style={{ gap: '40px', padding: '20px' }}>
        {favorite.length < 1 && (
          <Text type='danger'>
            You haven't added any cards yet. Please like at least one recipe
          </Text>
        )}
        {favorite.map((recipe: IRecipe, index: number) => (
          <Recipe recipe={recipe} key={index} />
        ))}
      </Row>
    </Wrapper>
  )
}

export default FavoritePage
