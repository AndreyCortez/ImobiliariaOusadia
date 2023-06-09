import React from 'react';
import './ImgContainer.css';
import { Link } from 'react-router-dom';
import { backendUrl } from '../../config';
import { FaBed, FaBath } from 'react-icons/fa';
import {AiFillCar} from 'react-icons/ai';

const ImgContainer = ({ houseDetails }) => {
  return (
    <Link to={`/house/${houseDetails._id}`}>
    <div className="house-container">
    <img className="house-image" src={backendUrl + "/uploads/" + houseDetails.mainImage} alt="House" />
      <div className='house-address'>
        <h2>{houseDetails.city}</h2>
        <p>{houseDetails.address}</p>
      </div>
     
      <div className="house-details">
        <div className="icon">
          <FaBath />
          <div className="info">
            <p>{houseDetails.bathrooms}</p>
          </div>
        </div>
        <div className="icon">
          <FaBed />
          <div className="info">
            <p>{houseDetails.bedrooms}</p>
          </div>
        </div>
        <div className="icon">
          <AiFillCar />
          <div className="info">
            <p>{houseDetails.garage}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ImgContainer;
