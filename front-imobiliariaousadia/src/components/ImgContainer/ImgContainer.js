import React from 'react';
import './ImgContainer.css';

import { FaBed, FaBath } from 'react-icons/fa';
import {AiFillCar} from 'react-icons/ai';

const ImgContainer = ({ image, city, address, bathrooms, bedrooms, garage }) => {
  return (
    <div className="house-container">
    <img className="house-image" src={image} alt="House" />
      <div className='house-address'>
        <h2>{city}</h2>
        <p>{address}</p>
      </div>
     
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
          <AiFillCar />
          <div className="info">
            <p>{garage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgContainer;
