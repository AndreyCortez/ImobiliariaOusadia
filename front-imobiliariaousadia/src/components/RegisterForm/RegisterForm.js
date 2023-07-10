import React, { useState } from 'react';
import './RegisterForm.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

import { backendUrl } from '../../config';
import { validateFullName, validateEmailVerification, validatePasswordVerification, validateEmail, validatePassword, validateCpf, validatePhone } from '../../validationUtils';

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
  const [fieldErrors, setFieldErrors] = useState({});

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
    const inputCpf = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    setCpf(inputCpf);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const errors = {};
  
    if (
      fullName === '' ||
      email === '' ||
      emailVerification === '' ||
      password === '' ||
      passwordVerification === '' ||
      cpf === '' ||
      phone === ''
    ) {
      setPopupContent('Please fill in all fields');
      setShowPopup(true);
      return;
    } 
    if (!validateCpf(cpf)) {
      errors.cpf = 'invalid CPF';
    } 
    if (!validatePhone(phone)) {
      errors.phone = 'invalid phone number';
    } 
    if (email !== emailVerification) {
      errors.emailVerification = 'Emails do not match';
    } 
    if (password !== passwordVerification) {
      errors.passwordVerification = 'Passwords do not match';
    }
  
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      console.log(errors)
      return;
    } else{
      console.log("deu ruim");
      try {
        // Send the POST request to the backend
        const response = await axios.post(backendUrl + '/users', {
          name: fullName,
          email,
          cpf,
          phone,
          password,
          imgProfile: 'default_user.avif',
          isAdmin: false, // Assuming isAdmin is set to false for regular users
        });
    
        // Handle the response
        console.log('User registered successfully:', response.data);
        setPopupContent('User registered successfully');
        setShowPopup(true);
    
        // Clear the form fields
        setFullName('');
        setEmail('');
        setEmailVerification('');
        setPassword('');
        setPasswordVerification('');
        setCpf('');
        setPhone('');
        setFieldErrors({});
    } catch (error) {
      // Handle the error
      console.error('Error registering user:', error);
      setPopupContent('Error registering user');
      setShowPopup(true);
    }    
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
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
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
          {fieldErrors.emailVerification && (
          <span className="error">{fieldErrors.emailVerification}</span>)}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
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
                    {fieldErrors.passwordVerification && (
          <span className="error">{fieldErrors.passwordVerification}</span>)}
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <br />
          <input type="text" id="cpf" value={cpf} onChange={handleCpfChange} />
          {fieldErrors.cpf && (
          <span className="error">{fieldErrors.cpf}</span>)}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <br />
          <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />
          {fieldErrors.phone && (
          <span className="error">{fieldErrors.phone}</span>)}
        </div>
        <div className="submit-button">
          <input type="submit" value="Register" />
        </div>

        <div className="submit-button">
          <Link to="/signin">
            <input type="submit" value="Sign In" />
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
