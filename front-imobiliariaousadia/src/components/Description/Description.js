import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import './Description.css';


const Description = () => {
  return (
    <div className="information">
    <div className="property">
      <div>
        <h3>Property information</h3>
        <h3>Property ID</h3>
        <h3>Property type</h3>
        <h3>Land size</h3>
      </div>
      <div>
        <h3>L22461995</h3>
        <h3>House</h3>
        <h3>731.0 squareMeter</h3>
      </div>
    </div>
  </div>
  );
};

export default Description;
