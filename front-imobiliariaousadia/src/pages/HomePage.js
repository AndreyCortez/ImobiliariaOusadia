import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import SearchHouses from '../components/SearchHouses/SearchHouses.js';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <SearchHouses />
      </div>;
      <h1>Welcome to the Homepage</h1>
      <p>Put your content here...</p>
      <Footer />
    </>
  );
};

export default HomePage;