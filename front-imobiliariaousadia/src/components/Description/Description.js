import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import './Description.css';
import { houseDescription } from '../../data';

const Description = ({ id }) => {
  const house = houseDescription.find((house) => house.id === id);

  if (!house) {
    return <div>House not found.</div>;
  }

  const { typeOfProperty, landSize } = house;

  return (
    <div className="information">
      <div className="property">
        <div>
          <h3>Property information</h3>
          <p>Property ID</p>
          <p>Property type</p>
          <p>Land size</p>
        </div>
        <div className="values">
          <p>{id}</p>
          <p>{typeOfProperty}</p>
          <p>{landSize} square meters</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
