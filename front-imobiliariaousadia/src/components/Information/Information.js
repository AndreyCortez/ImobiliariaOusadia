import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import './Information.css';
import { houseDescription } from '../../data.js';

const Information = ({ id }) => {
  const house = houseDescription.find((house) => house.id === id);

  console.log('Current house id:', id);

  if (!house) {
    return <div>House not found.</div>;
  }

  const { address, description, typeOfProperty, price } = house;

  return (
    <>
      <div className='title'>
        <h1 className="address">{address}</h1>
        <h2 className="price">From ${price}</h2>
      </div>
      
      <div className="description">
        <p className="description-text">{description}</p>
      </div>
    </>
  );
};

export default Information;
