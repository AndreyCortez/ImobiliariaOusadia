import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css'

import './ImageShow.css';
import Image1 from '../../assets/test/house1.jpg';
import Image2 from '../../assets/test/house2.jpg';
import Image3 from '../../assets/test/house3.jpg';
import Image4 from '../../assets/test/house4.jpg';


const ImageShow = () => {
  const images = [{src:Image1}, {src:Image2}, {src:Image3}, {src:Image4}];

  return (
    <Carousel images={images} style={{height: 500, thumbnailwidth: '100%'}}/>
  );
};

export default ImageShow;
