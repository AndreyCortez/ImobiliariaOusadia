
import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import "./SellPage.css";
import HeaderPage from '../components/HeaderPage/HeaderPage.js';

import {houseDetails} from '../data.js';

const SellPage = () => {

  return (
    <div>
      <Navbar/>
      <HeaderPage
        title="Buy your House"
      />
      <div className="container">
        <div className="house-list">
          {houseDetails.map((house, index) => (
            <ImgContainer houseDetails = {house}
            />
          ))}
        </div>
      </div>
      <Footer/>
      </div>
     
  );
};

export default SellPage;
