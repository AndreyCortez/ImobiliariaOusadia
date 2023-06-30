import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImageShow from '../components/ImageShow/ImageShow.js';
import Information from '../components/Information/Information.js';
import Description from '../components/Description/Description.js';
import './HousePage.css';
import Button from '../components/Button/Button.js';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { backendUrl } from '../config.js';

const HousePage = () => {
  const { id } = useParams();
  const [houseDetails, setHouseDetails] = useState(null);

  useEffect(() => {
    axios.get(backendUrl + '/houses/' + id)
      .then(response => {
        setHouseDetails(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!houseDetails) {
    return <div>Loading...</div>;
  }

  const { _id, address, estimatedValue, description } = houseDetails;

  return (
    <div>
      <Navbar />

      <ImageShow houseId={_id} />

      <div className="content-container">
        <div className="information-container">
          <Information address={address} estimatedValue={estimatedValue} description={description} />
        </div>
        <div className="description-container">
          <Description id={_id} propertyType={houseDetails.typeOfProperty} landSize={houseDetails.landSize} />
          <div className="Button">
            <Link to={`/offer`}>
              <Button name="Make your Offer" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HousePage;
