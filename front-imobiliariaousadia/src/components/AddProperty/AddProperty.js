import React, { useState } from 'react';
import './AddProperty.css';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

import { backendUrl } from '../../config';

const AddProperty = () => {
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [typeOfProperty, setTypeOfProperty] = useState('');
  const [estimatedValue, setEstimatedValue] = useState('');
  const [landSize, setLandSize] = useState('');
  const [city, setCity] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [garage, setGarage] = useState('');
  const [realtorCPF, setRealtorCPF] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTypeOfPropertyChange = (event) => {
    setTypeOfProperty(event.target.value);
  };

  const handleEstimatedValueChange = (event) => {
    setEstimatedValue(event.target.value);
  };

  const handleLandSizeChange = (event) => {
    setLandSize(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleBathroomsChange = (event) => {
    setBathrooms(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleGarageChange = (event) => {
    setGarage(event.target.value);
  };

  const handleRealtorCPFChange = (event) => {
    setRealtorCPF(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      address === '' ||
      description === '' ||
      typeOfProperty === '' ||
      estimatedValue === '' ||
      landSize === '' ||
      city === '' ||
      bathrooms === '' ||
      bedrooms === '' ||
      garage === '' ||
      realtorCPF === ''
    ) {

    } else {
      try {
        // Send the POST request to the backend
        const response = await axios.post(backendUrl + '/houses', {
          address,
          description,
          typeOfProperty,
          estimatedValue,
          landSize,
          city,
          bathrooms,
          bedrooms,
          garage,
          realtorCPF,
          status: 'available', // Assuming the status is always set to 'available' for a new property
        });

        // Handle the response
        console.log('Property added successfully:', response.data);

        // Clear the form fields
        setAddress('');
        setDescription('');
        setTypeOfProperty('');
        setEstimatedValue('');
        setLandSize('');
        setCity('');
        setBathrooms('');
        setBedrooms('');
        setGarage('');
        setRealtorCPF('');
      } catch (error) {
        // Handle the error
        console.error('Error adding property:', error);
      }
     };
  }

  return (
    <div className="AddProperty">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Address:</label>
          <br />
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="typeOfProperty">Type of Property:</label>
          <br />
          <input
            type="text"
            id="typeOfProperty"
            value={typeOfProperty}
            onChange={handleTypeOfPropertyChange}
          />
        </div>
        <div>
          <label htmlFor="estimatedValue">Estimated Value:</label>
          <br />
          <input
            type="number"
            id="estimatedValue"
            value={estimatedValue}
            onChange={handleEstimatedValueChange}
          />
        </div>
        <div>
          <label htmlFor="landSize">Land Size:</label>
          <br />
          <input
            type="number"
            id="landSize"
            value={landSize}
            onChange={handleLandSizeChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <label htmlFor="bathrooms">Bathrooms:</label>
          <br />
          <input
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={handleBathroomsChange}
          />
        </div>
        <div>
          <label htmlFor="bedrooms">Bedrooms:</label>
          <br />
          <input
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={handleBedroomsChange}
          />
        </div>
        <div>
          <label htmlFor="garage">Garage:</label>
          <br />
          <input
            type="number"
            id="garage"
            value={garage}
            onChange={handleGarageChange}
          />
        </div>
        <div>
          <label htmlFor="realtorCPF">Realtor CPF:</label>
          <br />
          <input
            type="text"
            id="realtorCPF"
            value={realtorCPF}
            onChange={handleRealtorCPFChange}
          />
        </div>
        <div className="submit-button">
          <input type="submit" value="Add Property" />
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
