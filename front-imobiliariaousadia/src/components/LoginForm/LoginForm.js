import React, { useState } from 'react';
import Button from '../Button/Button';
import './LoginForm.css';

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
    // Aqui você pode adicionar a lógica para enviar as credenciais ao servidor e autenticar o usuário
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirecionar para outra página ou componente após o envio do formulário
    // Exemplo: history.push('/dashboard');
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
          <Button name={'Register'}/>
        </div>
      </form>
    </div>
  </div>
      
  );
};

export default LoginForm;
