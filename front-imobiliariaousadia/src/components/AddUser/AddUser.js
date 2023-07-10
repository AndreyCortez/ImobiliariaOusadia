import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config';

const AddUser = ({ userType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === '' || email === '' || password === '' || cpf === '') {
      // Handle form validation or display an error message
      return;
    }

    try {
      const response = await axios.post(backendUrl + '/users', {
        name,
        email,
        password,
        cpf,
        isAdmin: userType === 'admin',
        phone,
      });

      console.log('User added successfully:', response.data);

      window.location.reload();

      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
      setCpf('');
      setPhone('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="AddUser">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <br />
          <input type="text" id="cpf" value={cpf} onChange={handleCpfChange} />
        </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <br />
            <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />
          </div>
        <div className="submit-button">
          <input type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
