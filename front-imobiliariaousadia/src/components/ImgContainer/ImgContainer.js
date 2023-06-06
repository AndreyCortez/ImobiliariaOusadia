import React from 'react';
import './ImgContainer.css';
import Image1 from '../../assets/test/houseFront1.jpg';
import Image2 from '../../assets/test/houseFront2.jpg';
import Image3 from '../../assets/test/houseFront3.jpg';
import Image4 from '../../assets/test/houseFront4.jpg';
import Image5 from '../../assets/test/houseFront5.jpg';
import Image6 from '../../assets/test/houseFront6.jpg';
import Image7 from '../../assets/test/houseFront7.jpg';
import Image8 from '../../assets/test/houseFront8.jpg';
import Image9 from '../../assets/test/houseFront9.jpg';

import { FaBed, FaBath } from 'react-icons/fa';
import {AiFillCar} from 'react-icons/ai';

const ImgContainer = ({ image, city, address, bathrooms, bedrooms, garage }) => {
  let imgSrc;

  switch (image) {
    case 'Image1':
      imgSrc = Image1;
      break;
    case 'Image2':
      imgSrc = Image2;
      break;
    case 'Image3':
      imgSrc = Image3;
      break;
    case 'Image4':
      imgSrc = Image4;
      break;
    case 'Image5':
      imgSrc = Image5;
      break;
    case 'Image6':
      imgSrc = Image6;
      break;
    case 'Image7':
      imgSrc = Image7;
      break;
    case 'Image8':
      imgSrc = Image8;
      break;
    case 'Image9':
      imgSrc = Image9;
      break;
    default:
      imgSrc = Image1;
  }
  
  
  return (
    <div className="house-container">
    <img className="house-image" src={imgSrc} alt="House" />
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
