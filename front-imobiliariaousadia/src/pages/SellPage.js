import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';
import "./SellPage.css";
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import axios from 'axios';

import { backendUrl } from '../config.js';

const SellPage = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get(backendUrl + '/houses')
      .then(response => {
        setHouses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <HeaderPage title="Buy your House" />
      <div className="house-list">
        {houses.map((house, index) => (
          <ImgContainer key={index} houseDetails={house} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default SellPage;
