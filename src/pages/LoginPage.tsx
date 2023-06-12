import { Link } from 'react-router-dom'
import Login from '../components/Login/Login'

const LoginPage = () => {
  return (
    <>
      <h2>Login</h2>
      <Login />
      <Link to="/register">register</Link>
    </>
  )
}

export default LoginPage
