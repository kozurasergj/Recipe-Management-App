import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom'
import { useAppDispath } from '../../hooks/useRedux';

const SignUp = () => {
  const dispatch = useAppDispath();
  const navigate = useNavigate();

  const handleRegistr = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid
        }))
        navigate('/', { replace: true });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error)
      });
  }

  return (
    <div>
      <Form
        title={"Sign Up"}
        handleClick={handleRegistr}
      />
    </div>
  )
}

export default SignUp
