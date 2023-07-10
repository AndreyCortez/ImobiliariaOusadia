import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import SearchHouses from '../components/SearchHouses/SearchHouses.js';
import Highlights from '../components/Highlights/Highlights.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';
import './HomePage.css';
import axios from 'axios';
import { backendUrl } from '../config';

const HomePage = () => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/houses`)
      .then((response) => {
        setHouses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching houses:', error);
      });
  }, []);

  const handleFilter = (filteredHouses) => {
    setFilteredHouses(filteredHouses);
  };

  return (
    <>
      <Navbar />
      <div className="background-container">
        <SearchHouses houses={houses} onFilter={handleFilter} />
      </div>
      <div className="filtered-houses-container">
        {filteredHouses.map((house, index) => (
          <ImgContainer key={index} houseDetails={house} />
        ))}
      </div>
      <Highlights houses={houses} />
      <Footer />
    </>
  );
};

export default HomePage;
