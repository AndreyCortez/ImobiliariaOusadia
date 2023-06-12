import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import {houseImages} from '../../data.js';

import './ImageShow.css';


const ImageShow = ({ houseId }) => {
  const house = houseImages.find((house) => house.id === houseId);
  console.log('Current house id:', houseId);
  const images = house?.photos.map((photo) => ({ src: photo })) || [];
  return (
    <Carousel images={images} style={{height: 500, thumbnailwidth: '100%'}}/>
  );
};

export default ImageShow;
