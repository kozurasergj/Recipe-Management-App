import axios from 'axios';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAppDispath } from '../hooks/useRedux';
import { removeUser } from '../store/slices/userSlice';
import Recipes from '../components/Recipes';

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
    <Wrapper>
      <section >
        <h2>Home Page</h2>
        {isAuth ? (
          <div>
            <Recipes />
            <Button
              style={{ backgroundColor: 'rgb(21, 9, 70)' }}
              onClick={() => dispatch(removeUser())}
              type="primary"
            >
              Log out from {email}
            </Button>
          </div>
        ) :
          navigate('/login', { replace: true })
        }
      </section>
    </Wrapper>
  );
};

export default HomePage;
