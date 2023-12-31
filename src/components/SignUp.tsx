import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../hooks/useRedux'
import { setUser } from '../store/slices/userSlice'
import FormUser from './FormUser'

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleRegistr = (email: string, password: string) => {
    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid
          })
        )
        navigate('/', { replace: true })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div>
      <FormUser title={'Sign Up'} handleClick={handleRegistr} />
    </div>
  )
}

export default SignUp
