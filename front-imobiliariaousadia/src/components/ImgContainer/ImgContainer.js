import React from 'react';
import './ImgContainer.css';
import Image1 from '../../assets/test/houseFront1.jpg';
import { FaBed, BsFillCarFrontFill, FaBath } from 'react-icons/fa';

const ImgContainer = ({ image, city, address, bathrooms, bedrooms, garage }) => {
  return (
    <div className="house-container">
      <img className="house-image" src={Image1} alt="House" />
      <h2>{city}</h2>
      <p>{address}</p>
      <div className="house-details">
        <div className="icon">
          <FaBath />
          <div className="info">
            <p>{bathrooms}</p>
          </div>
        </div>
        <div className="icon">
          <FaBed />
          <div className="info">
            <p>{bedrooms}</p>
          </div>
        </div>
        <div className="icon">
          <FaBed />
          <div className="info">
            <p>{garage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgContainer;
