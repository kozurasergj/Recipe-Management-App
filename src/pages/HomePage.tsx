import { Button } from 'antd'
import { Row } from 'antd'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Recipe from '../components/Recipe'
import Wrapper from '../components/Wrapper'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { IRecipe } from '../interfaces'
import { getRecipes } from '../store/slices/recipesSlice'
import { removeUser } from '../store/slices/userSlice'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { isAuth, email } = useAuthentication()

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  const recipes = useAppSelector((state) => state.allRecipes.recipes)

  return (
    <>
      <Wrapper>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Home</h2>
        <Row justify='space-between' align='top' style={{ gap: '40px', padding: '20px' }}>
          {recipes?.map((recipe: IRecipe, index: number) => (
            <Recipe recipe={recipe} key={index} />
          ))}
        </Row>
        {isAuth ? (
          <Button
            style={{ backgroundColor: 'rgb(21, 9, 70)' }}
            onClick={() => dispatch(removeUser())}
            type='primary'
          >
            Log out from {email}
          </Button>
        ) : (
          <div>
            <Link to='/'>Log In</Link> or <Link to='/register'> Sign Up </Link>
          </div>
        )}
      </Wrapper>
    </>
  )
}

export default HomePage
