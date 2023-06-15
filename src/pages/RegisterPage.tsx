import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'
import Wrapper from '../components/Wrapper'

const RegisterPage = () => {
  return (
    <Wrapper>
      <Row justify="center" align="middle" >
        <Col span={24}>
          <h2 style={{ textAlign: 'center'}}>Registe</h2>
        </Col>
        <SignUp />
        <Col span={24} style={{ textAlign: 'center', marginBottom: '40px' }}>
          Alredy have an acount <Link to="/" >login</Link >
        </Col>
      </Row>
    </Wrapper>
  )
}

export default RegisterPage
