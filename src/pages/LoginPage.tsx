import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

import Login from '../components/Login'
import Wrapper from '../components/Wrapper'

const LoginPage = () => {
  return (
    <Wrapper>
      <Row justify='center' align='middle'>
        <Col span={24}>
          <h2 style={{ textAlign: 'center' }}>Login</h2>
        </Col>
        <Login />
        <Col span={24} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p>If you don't have an account yet, you can click</p>
          <Link to='/register'> register </Link>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default LoginPage
