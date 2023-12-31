import { HeartFilled } from '@ant-design/icons'
import { Col, Collapse, CollapseProps } from 'antd'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { IRecipeProps } from '../interfaces'
import { removeFavorite, setFavorite } from '../store/slices/recipesSlice'

const Recipe = ({ recipe }: IRecipeProps) => {
  const dispatch = useAppDispatch()

  const favorite = useAppSelector((state) => state.allRecipes.favorite)
  const isFavorite = favorite.some((favoriteItem) => favoriteItem.id === recipe.id)

  const handleLike = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id: recipe.id }))
    } else {
      dispatch(setFavorite({ id: recipe.id }))
    }
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Recipe',
      children: <p>{recipe.recipe}</p>
    },
    {
      key: '2',
      label: 'Ingredients',
      children: (
        <>
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <p key={index}>{ingredient}</p>
          ))}
        </>
      )
    }
  ]

  return (
    <Col
      key={recipe.id}
      xs={24} // Takes full width on extra small screens
      sm={20} // Takes half width on small screens
      md={10} // Takes one-third width on medium screens
      lg={7} // Takes one-fourth width on large screens
      xl={7}
      style={{
        boxShadow: '4px 4px 15px rgba(56, 56, 56, 0.6)'
      }}
    >
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}
        className={cn('card', isFavorite && 'favorite')}
      >
        <h2 style={{ textAlign: 'center' }}>{recipe.title}</h2>
        <button
          style={{
            border: 'none',
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            backgroundColor: 'transparent'
          }}
          onClick={handleLike}
        >
          {isFavorite ? (
            <HeartFilled
              className='heart-checked'
              style={{ color: 'red', fontSize: '40px' }}
            />
          ) : (
            <HeartFilled style={{ color: 'rgb(21, 9, 70)', fontSize: '30px' }} />
          )}
        </button>
        <img src={recipe.image} alt='dish' className='img' />
        <Collapse items={items} />
      </div>
    </Col>
  )
}

export default Recipe
