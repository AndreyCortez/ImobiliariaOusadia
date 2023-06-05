import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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


const ImageGallery = () => {
  const images = [
    { src: Image1 },
    { src: Image2 },
    { src: Image3 },
    { src: Image4 },
    { src: Image5 },
    { src: Image6 },
    { src: Image7 },
    { src: Image8 },
    { src: Image9 }
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            className="gallery-image"
            alt={`Image ${i + 1}`}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ImageGallery;
