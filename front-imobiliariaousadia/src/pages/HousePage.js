
import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImageShow from '../components/ImageShow/ImageShow.js'
import Information from '../components/Information/Information.js';

const HousePage = () => {
  return (
    <div>
      <Navbar />
      <ImageShow/>
      <Information/>
      <Footer />
    </div>
  );
};

export default HousePage;
