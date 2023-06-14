import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Wrapper from '../components/Wrapper'
import { Col,  Row } from 'antd';

const LoginPage = () => {
  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={24}>
          <h2 style={{ textAlign: 'center' }}>Login</h2>
        </Col>
        <Login />
        <Col span={24}>
          If you don't have an account yet, you can click  
          <Link to="/register" style={{ textAlign: 'center' }}> register </Link>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default LoginPage
