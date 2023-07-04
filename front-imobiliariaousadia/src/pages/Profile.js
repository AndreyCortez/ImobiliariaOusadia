import React, { useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';
import { FaEnvelope, FaPencilAlt, FaPhone } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './Profile.css';

import { houseDetails, userDetails } from '../data.js';

const Profile = ({ UserId }) => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const user = userDetails[UserId];

  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para processar as informações editadas do usuário
    // ...

    // Fechar o popup após o processamento dos dados
    setShowEditPopup(false);
  };

  return (
    <div>
      <Navbar />
      <HeaderPage title={'User Profile'} />
      <div className='page-container'>
        <div className='apraisals-container'>
          <h1>My Apraisals</h1>
          {houseDetails.map((house, index) => (
            <ImgContainer houseDetails={house} key={index} />
          ))}
        </div>

        <div className='vline'></div>

        <div className='profile-container'>
          <img className='profile-image' src={user.image} alt='Profile' />
          <h2>{user.name}</h2>
          <p>
            <FaEnvelope /> {user.email}
          </p>
          <hr />
          <p>
            <FaPhone /> {user.telefone}
          </p>
          <hr />
          <button className='edit-button' onClick={handleEditClick}>
            <FaPencilAlt /> Edit Info
          </button>
        </div>

        <Popup
          open={showEditPopup}
          onClose={() => setShowEditPopup(false)}
          modal
          closeOnDocumentClick
        >
          <div className='edit-popup'>
            <h2>Edit User Info</h2>
            <form onSubmit={handleEditFormSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  id='email'
                  value={editedEmail}
                  onChange={(event) => setEditedEmail(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone:</label>
                <input
                  type='tel'
                  id='phone'
                  value={editedPhone}
                  onChange={(event) => setEditedPhone(event.target.value)}
                />
              </div>
              <div className='edit-popup-buttons'>
                <button type='submit'>Save</button>
                <button onClick={() => setShowEditPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </Popup>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
