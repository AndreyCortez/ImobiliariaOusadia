import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import { houseDetails } from '../data.js';

const Profile = ({UserId}) => {
  return (
    <div>
      <Navbar />
        <HeaderPage title={'User Profile'}/>
      <h1>My Apraisals</h1>
      {houseDetails.map((house, index) => (
            <ImgContainer houseDetails = {house}
            />
          ))}
      <p></p>
      <Footer />
    </div>
  );
};

export default Profile;