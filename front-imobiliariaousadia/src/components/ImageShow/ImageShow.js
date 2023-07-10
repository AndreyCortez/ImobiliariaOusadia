import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { backendUrl } from '../../config.js';

import './ImageShow.css';

const ImageShow = ({ houseId }) => {
  const [house, setHouse] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await axios.get(`${backendUrl}/houses/${houseId}`);
        setHouse(response.data);
      } catch (error) {
        console.error('Error fetching house:', error);
      }
    };

    fetchHouse();
  }, [houseId]);

  useEffect(() => {
    const houseImages = house?.otherImages || [];
    const mainImage = house?.mainImage;
    const imageUrls = houseImages.map((photo) => ({ src: backendUrl + '/uploads/' + photo }));

    if (mainImage) {
      imageUrls.push({ src: backendUrl + '/uploads/' + mainImage });
    }

    setImages(imageUrls);
  }, [house]);

  console.log('Current house id:', houseId);

  return <Carousel images={images} style={{ height: 500, thumbnailwidth: '100%' }} />;
};

export default ImageShow;
