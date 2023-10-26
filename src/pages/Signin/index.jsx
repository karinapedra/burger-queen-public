import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email | !password) {
      setError('Fill in all the fields');
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate('/home');
  };

  return (
    <C.Container>
      <C.Label>Login</C.Label>
      {/* <img src='.../assets/brand/bq-logo-burger.png' alt="Logo" /> */}
      <C.Content>
        <Input
          type='email'
          placeholder='email@example.com'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type='password'
          placeholder='Insert your password'
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text='Sign in' onClick={handleLogin} />
      </C.Content>
    </C.Container>
  );
};

export default Signin;
