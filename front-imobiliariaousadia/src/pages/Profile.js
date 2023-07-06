import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';
import { FaEnvelope, FaPencilAlt, FaPhone } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

import {backendUrl, imagesUrl} from '../config';

import './Profile.css';

const Profile = ({ UserId }) => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState(null);
  const [house, setHouse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the user ID from local storage
    const userId = localStorage.getItem('userId');

    // Fetch user data from the backend API using the retrieved user ID
    const fetchUserData = async () => {
      try {
        const response = await axios.get(backendUrl + `/users/${userId}`);
        const userData = response.data;
        setUser(userData);

        const offerResponse = await axios.get(backendUrl + `/offer/houses/user/${userId}`);
        const offerDetails = offerResponse.data;

        const houses = offerDetails.filter((offer) => offer.houseId !== null).map((offer) => offer.houseId);
        console.log(houses);

        setHouse(houses);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching user or offer data:', error);
        setLoading(false); 
      }
    };

    fetchUserData();
  }, []);
  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  const handleEditFormSubmit = async (event) => {
     // nessa função que lidamos com envio de imagens pro backend para ver como acessa só olhar o atributo src do profile
    event.preventDefault();
    // Retrieve the user ID from local storage
    const userId = localStorage.getItem('userId');
  
    try {
      // Check if any of the fields have changed and need to be updated
      const hasChanges = editedEmail || editedPhone || profileImage;
  
      if (hasChanges) {
        // Create a new FormData object to send the form data including the image
        const formData = new FormData();
        if (profileImage) {
          formData.append('image', profileImage);
        }
  
        // Send a POST request to the backend to upload the image if profileImage is not null
        let imageFilename = '';
        if (profileImage) {
          const uploadResponse = await axios.post(backendUrl + '/users/upload', formData);
          imageFilename = uploadResponse.data.filename;
        }
  
        // Update the user data with the new values if they are not null
        const updatedUserData = {
          ...user,
          email: editedEmail || user.email,
          phone: editedPhone || user.phone,
          imgProfile: imageFilename || user.imgProfile,
        };
  
        // Send a PUT request to update the user data
        await axios.put(backendUrl + `/users/${userId}`, updatedUserData);
      }
  
      // Close the popup after processing the data
      setShowEditPopup(false);
  
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  
  
  if (loading) {
    return <div>Loading...</div>; // Render a loading state
  }

  if (!user) {
    return <div>Error fetching user data.</div>; // Render an error message if user data is not available
  }

  return (
    <div>
      <Navbar />
      <HeaderPage title={'User Profile'} />
      <div className='page-container'>
        <div className='apraisals-container'>
          <h1>My Offers</h1>
          {house.map((house, index) => (
            <ImgContainer houseDetails={house} key={index} />
          ))}
        </div>

        <div className='vline'></div>

        <div className='profile-container'>
          {console.log(imagesUrl + user.imgProfile)}
          <img className='profile-image' src={ backendUrl + "/uploads/" + user.imgProfile} alt='Profile' />
          <h2>{user.name}</h2>
          <p>
            <FaEnvelope /> {user.email}
          </p>
          <hr />
          <p>
            <FaPhone /> {user.phone}
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
              <div className='form-group'>
                <label htmlFor='profileImage'>Profile Image:</label>
                <input
                  type='file'
                  id='profileImage'
                  accept='image/*'
                  onChange={(event) => setProfileImage(event.target.files[0])}
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
