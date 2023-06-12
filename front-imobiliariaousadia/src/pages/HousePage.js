import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImageShow from '../components/ImageShow/ImageShow.js';
import Information from '../components/Information/Information.js';
import Description from '../components/Description/Description.js';
import './HousePage.css';
import Button from '../components/Button/Button.js';
import { Link, useParams } from 'react-router-dom';

const HousePage = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />

        <ImageShow houseId={id} />

        <div className="content-container">
          <div className="information-container">
            <Information id={id} />
          </div>
          <div className="description-container">
            <Description id={id} />
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
