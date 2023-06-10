import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import RegistrationForm from '../components/RegisterForm/RegisterForm.js';

const Register = () => {

  return (
    <> 
    <Navbar />
    <HeaderPage title="Register" />
    <RegistrationForm/>
      <Footer />
    </>
   
  );
};

export default Register;
