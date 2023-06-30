import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import './Information.css';

const Information = ({ address, estimatedValue, description }) => {

  return (
    <>
      <div className='title'>
        <h1 className="address">{address}</h1>
        <h2 className="price">From ${estimatedValue}</h2>
      </div>
      
      <div className="description">
        <p className="description-text">{description}</p>
      </div>
    </>
  );
};

export default Information;
