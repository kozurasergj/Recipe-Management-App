import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp/SignUp'

const RegisterPage = () => {
  return (
    <>
      <h2>Registe</h2>
      <SignUp />
      Alredy have an acount <Link to="/login" >login</Link >
    </>
  )
}

export default RegisterPage
