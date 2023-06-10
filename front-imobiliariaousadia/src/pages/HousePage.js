import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImageShow from '../components/ImageShow/ImageShow.js';
import Information from '../components/Information/Information.js';
import Description from '../components/Description/Description.js';
import './HomePage.js';
import './HousePage.css';
import Button from '../components/Button/Button.js';

const HousePage = () => {
  return (
    <div>
      <Navbar />
      <ImageShow />

      <div className="container">
        <div className="information-container">
          <Information />
        </div>
        <div className="description-container">
          <Description />
          <div className="Button">
            <Button name="Make your Apraisal" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HousePage;
