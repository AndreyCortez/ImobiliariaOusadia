import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config';

const ProfileEditPopup = ({ user, onCancel, onSave }) => {
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedPhone, setEditedPhone] = useState(user.phone);
  const [profileImage, setProfileImage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      let imageFilename = user.imgProfile;

      if (profileImage) {
        const formData = new FormData();
        formData.append('image', profileImage);

        const uploadResponse = await axios.post(backendUrl + '/users/upload', formData);
        console.log(uploadResponse);
        imageFilename = uploadResponse.data.filename;
      }

      const updatedUserData = {
        ...user,
        email: editedEmail,
        phone: editedPhone,
        imgProfile: imageFilename,
      };

      await updateUser(updatedUserData);

      // Call the onSave callback function
      onSave();
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const updateUser = async (updatedUserData) => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.put(backendUrl + `/users/${userId}`, updatedUserData);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  return (
    <div className='edit-popup'>
      <h2>Edit User Info</h2>
      <form onSubmit={handleFormSubmit}>
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
          <label htmlFor='image'>Profile Image:</label>
          <input
            type='file'
            id='image'
            accept='image/*'
            onChange={(event) => setProfileImage(event.target.files[0])}
          />
        </div>

        <div className='edit-popup-buttons'>
          <button type='submit'>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditPopup;
