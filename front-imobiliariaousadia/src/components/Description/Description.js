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
      <p>Property ID</p>
      <p>Property type</p>
      <p>Land size</p>
    </div>
    <div className='values'>
      <p>L22461995</p>
      <p>House</p>
      <p>731.0 squareMeter</p>
    </div>
</div>

  </div>
  );
};

export default Description;
