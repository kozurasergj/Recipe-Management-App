import { useState } from 'react'
import { IFormProps } from '../../interfaces';

const Form = ({ title, handleClick }: IFormProps) => {
  const [email, setUmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setUmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => handleClick(email, password)}
      >
        {title}
      </button>
    </div>
  )
}

export default Form
