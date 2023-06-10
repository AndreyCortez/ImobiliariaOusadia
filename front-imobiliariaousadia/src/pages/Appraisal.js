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

  return (
    <> 
    <Navbar />
    <HeaderPage title="Request an Appraisal" />
    <div style={containerStyle}>
      <p>
        Please fill in the information below so that we can contact our <br />
        responsible agent to make the purchase of the property and <br />
        clarify any doubts you may have.<br />
      </p>
    </div>
        <AppraisalForm />
      <Footer />
    </>
   
  );
};

export default Appraisal;
