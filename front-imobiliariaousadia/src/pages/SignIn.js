import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import LoginForm from '../components/LoginForm/LoginForm.js';

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <HeaderPage title={"Sign In"}/>
      <LoginForm/>
      <Footer />
    </div>
  );
};

export default SignIn;