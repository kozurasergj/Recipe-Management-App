import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'
import Wrapper from '../components/Wrapper'

const RegisterPage = () => {
  return (
    <Wrapper>
      <h2>Registe</h2>
      <SignUp />
      Alredy have an acount <Link to="/" >login</Link >
    </Wrapper>
  )
}

export default RegisterPage
