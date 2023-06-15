import { useState } from 'react'
import { IFormProps } from '../interfaces';

import { Button, Form, Input } from 'antd';

const FormUser = ({ title, handleClick }: IFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinishFailed = () => {
    handleClick(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: '900px' }}
      initialValues={{ remember: true }}
      onFinish={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!'
          },
          {
            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
            message: 'Please enter a valid email!'
          }
        ]}
      >
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
          {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{6,15}$/,
            message: 'Please enter a valid password (at least 6 characters long, containing at least one letter and one digit, and only containing English characters)',
          },
        ]}
      >
        <Input.Password
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => handleClick(email, password)}
        >
          {title}
        </Button>
      </Form.Item>
    </Form >
  )
}

export default FormUser;
