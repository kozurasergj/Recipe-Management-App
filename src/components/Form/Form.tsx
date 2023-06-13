import { useState, FormEvent } from 'react'
import { IFormProps } from '../../interfaces';

const Form = ({ title, handleClick }: IFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
    </form>
  )
}

export default Form
