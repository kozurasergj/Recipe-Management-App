import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom'
import { useAppDispath } from '../../hooks/useRedux';

const Login = () => {
  const dispatch = useAppDispath();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
        console.log(error);
      });
  }

  return (
    <div>
      <Form
        title={"Sign In"}
        handleClick={handleLogin}
      />
    </div>
  )
}

export default Login
