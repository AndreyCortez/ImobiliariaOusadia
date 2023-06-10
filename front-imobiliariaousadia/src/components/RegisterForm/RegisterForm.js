import React, { useState } from 'react';
import './RegisterForm.css';
import Button from '../Button/Button';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerification, setEmailVerification] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailVerificationChange = (event) => {
    setEmailVerification(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordVerificationChange = (event) => {
    setPasswordVerification(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados de registro ao servidor
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Email Verification:', emailVerification);
    console.log('Password:', password);
    console.log('Password Verification:', passwordVerification);
  };

  return (
    <div className="RegistrationForm">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
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
          <label htmlFor="emailVerification">Verify Email:</label>
          <br />
          <input
            type="email"
            id="emailVerification"
            value={emailVerification}
            onChange={handleEmailVerificationChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="passwordVerification">Verify Password:</label>
          <br />
          <input
            type="password"
            id="passwordVerification"
            value={passwordVerification}
            onChange={handlePasswordVerificationChange}
          />
        </div>
        <div className="submit-button">
          <input type="submit" value="Register" />
        </div>
        <div className='SignIn'>
          <Button name={'Sign In'}/>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
