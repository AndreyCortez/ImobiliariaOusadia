import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import './Description.css';

const Description = ({ id, propertyType, landSize }) => {

  return (
    <div className="information">
      <div className="property">
        <div>
          <h3>Property information</h3>
          <p>Property ID: {id}</p>
          <p>Property type: {propertyType}</p>
          <p>Land size: {landSize} square meters</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
