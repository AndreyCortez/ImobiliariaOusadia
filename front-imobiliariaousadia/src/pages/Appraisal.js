import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import AppraisalForm from '../components/AppraisalForm/AppraisalForm.js';

const Appraisal = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '18px', // Ajuste o tamanho da fonte conforme necessário
  };

  return (
    <>
      <Navbar />
      <HeaderPage title="Request an Appraisal" />
      <div style={containerStyle}>
        <p style={paragraphStyle}>
          Please fill in the information below so that we can contact our responsible agent to make the purchase of the property and clarify any doubts you may have.
        </p>
      </div>
      <AppraisalForm />
      <Footer />
    </>
  );
};

export default Appraisal;
