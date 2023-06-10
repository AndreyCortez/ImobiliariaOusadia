import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import './Profile.css'

import { houseDetails, userDetails } from '../data.js';
import { FaEnvelope, FaPencilAlt, FaPhone } from 'react-icons/fa';

const Profile = ({UserId}) => {
    let user = userDetails[UserId];

  return (
    <div>
      <Navbar />

        <HeaderPage title={'User Profile'}/>
      
        <div className='page-container'>
        <div className='apraisals-container'>
            <h1>My Apraisals</h1>
            {houseDetails.map((house, index) => (
                <ImgContainer houseDetails = {house}/>
            ))}
        </div>

        <div className='vline'></div>

        <div className='profile-container'>
        <img className='profile-image' src={user.image}/>
        <h2>{user.name}</h2>
        
        <p><FaEnvelope /> {user.email}</p>
        <hr/>
        <p> <FaPhone /> {user.telefone}</p>
        <hr/>
        <button className='edit-button'><FaPencilAlt/> Edit Info </button>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;