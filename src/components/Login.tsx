import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormUser from './FormUser';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useRedux';

const Login = () => {
  const dispatch = useAppDispatch();
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
        alert("You have successfully LOGIN TO FIREBASE!")
        navigate('/home', { replace: true });
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  return (
    <div>
      <FormUser
        title={"Sign In"}
        handleClick={handleLogin}
      />
    </div>
  )
}

export default Login
