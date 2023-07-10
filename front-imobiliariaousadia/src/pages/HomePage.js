import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import SearchHouses from '../components/SearchHouses/SearchHouses.js';
import Highlights from '../components/Highlights/Highlights.js';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <SearchHouses />
      </div>
      <Highlights />
      <Footer />
    </>
  );
};

export default HomePage;