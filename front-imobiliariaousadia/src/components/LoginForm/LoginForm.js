import React, { useState } from 'react';
import Button from '../Button/Button';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
          <div className="LoginForm">
          <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="submit-button">
        <input type="submit" value="Sign In" />
        </div>
        <div className='Register'>
          <Link to="/register">
          <Button name={'Register'}/>
          </Link>
        </div>
      </form>
    </div>
  </div>
      
  );
};

export default LoginForm;
