
import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import "./HomePage.js"

const SellPage = () => {
  
  const houseDetails = [
    {
      image: 'houseFront1.jpg',
      city: 'New York',
      address: '123 Broadway',
      bathrooms: 2,
      bedrooms: 3,
      garage: 1
    },
    {
      image: 'houseFront1.jpg',
      city: 'Los Angeles',
      address: '456 Hollywood Blvd',
      bathrooms: 3,
      bedrooms: 4,
      garage: 2
    },
    {
      image: 'houseFront1.jpg',
      city: 'Chicago',
      address: '789 Magnolia Ave',
      bathrooms: 2,
      bedrooms: 2,
      garage: 0
    },
    {
      image: 'houseFront1.jpg',
      city: 'San Francisco',
      address: '321 Golden Gate St',
      bathrooms: 4,
      bedrooms: 5,
      garage: 3
    },
    {
      image: 'houseFront1.jpg',
      city: 'Miami',
      address: '987 Ocean Drive',
      bathrooms: 3,
      bedrooms: 4,
      garage: 2
    },
    {
      image: 'houseFront1.jpg',
      city: 'Seattle',
      address: '555 Rainier Ave',
      bathrooms: 2,
      bedrooms: 3,
      garage: 1
    },
    {
      image: 'houseFront1.jpg',
      city: 'Boston',
      address: '222 Beacon St',
      bathrooms: 3,
      bedrooms: 4,
      garage: 2
    },
    {
      image: 'houseFront1.jpg',
      city: 'Denver',
      address: '777 Rocky Road',
      bathrooms: 2,
      bedrooms: 2,
      garage: 1
    },
    {
      image: 'houseFront1.jpg',
      city: 'Austin',
      address: '888 Lakeview Ave',
      bathrooms: 3,
      bedrooms: 3,
      garage: 2
    }
  ];
  

  return (
    <div>
      <h1>House Details</h1>
      <div className="container">
        <div className="house-list">
          {houseDetails.map((house, index) => (
            <ImgContainer
              key={index}
              image={house.image}
              city={house.city}
              address={house.address}
              bathrooms={house.bathrooms}
              bedrooms={house.bedrooms}
              garage={house.garage}
            />
          ))}
        </div>
      </div>
      </div>
      
  );
};

export default SellPage;
