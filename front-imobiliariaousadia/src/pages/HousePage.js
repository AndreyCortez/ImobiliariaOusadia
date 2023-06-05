
import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImageShow from '../components/ImageShow/ImageShow.js'
import Information from '../components/Information/Information.js';
import Description from '../components/Description/Description.js';
import "./HomePage.js"

const HousePage = () => {
  return (
    <div>
      <Navbar />
      <ImageShow/>
      
      <div class="container">
        <Information/>
        <Description/>
      </div>
      
      <Footer />
    </div>
  );
};

export default HousePage;
