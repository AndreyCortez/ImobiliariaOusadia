import React, { useState } from 'react';
import './RegisterForm.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { users } from '../../data';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerification, setEmailVerification] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

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

  const handleCpfChange = (event) => {
    const inputCpf = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    setCpf(inputCpf);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar se o CPF já está presente na lista de usuários
    const userExists = users.find((user) => user.cpf === cpf);

    if (userExists) {
      setPopupContent('User already exists');
      setShowPopup(true);
    } else if (email !== emailVerification) {
      setPopupContent('Emails do not match');
      setShowPopup(true);
    } else if (password !== passwordVerification) {
      setPopupContent('Passwords do not match');
      setShowPopup(true);
    } else {
      // Criar um novo usuário apenas se o CPF não existir na lista de usuários
      const newUser = {
        cpf,
        email,
        phone,
        password,
        userType: 'client',
        name: fullName,
      };

      // Adicionar o novo usuário ao array 'users'
      users.push(newUser);

      // Limpar os campos do formulário
      setFullName('');
      setEmail('');
      setEmailVerification('');
      setPassword('');
      setPasswordVerification('');
      setCpf('');
      setPhone('');

      setPopupContent('User registered successfully');
      setShowPopup(true);
      console.log('New User:', newUser);
    }
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
        <div>
          <label htmlFor="cpf">CPF:</label>
          <br />
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleCpfChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="submit-button">
          <input type="submit" value="Register" />
        </div>
        <div className='SignIn'>
          <Link to="/signin">
            <Button name={'Sign In'}/>
          </Link>
        </div>
      </form>
      <Popup open={showPopup} onClose={() => setShowPopup(false)}>
        <div>{popupContent}</div>
      </Popup>
    </div>
  );
};

export default RegistrationForm;
