
import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import "./HomePage.js";
import HeaderPage from '../components/HeaderPage/HeaderPage.js';

//import {houseDetails} from '../data.js';

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
            <ImgContainer
              key={index}
              image={house.image}
              city={house.city}
              address={house.address}
              bathrooms={house.bathrooms}
              bedrooms={house.bedrooms}
              garage={house.garage}
            />
          ))}
        </div>
      </div>
      <Footer/>
      </div>
     
  );
};

export default SellPage;
