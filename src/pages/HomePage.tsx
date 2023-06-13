import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAppDispath } from '../hooks/useRedux';
import { removeUser } from '../store/slices/userSlice';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const { isAuth, email } = useAuthentication();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login', { replace: true });
    }
  }, [isAuth, navigate]);



  return (
    <>
      <h2>HomePage</h2>
      {isAuth ? (
        <div>
          Welcome !!!
          Let's go cooking !!!
          <hr />
          <button onClick={() => dispatch(removeUser())}>
            Log out from {email}
          </button>
        </div>
      ) :
        navigate('/login', { replace: true })
      }
    </>
  );
};

export default HomePage;
