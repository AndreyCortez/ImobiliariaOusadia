import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import { Link, Navigate } from 'react-router-dom';
import './AdminPage.css';
import { FaEnvelope, FaPencilAlt, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import { backendUrl } from '../config.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProfileEditPopup from '../components/ProfileEditPopup/ProfileEditPopup.js';

const AdminPage = () => {
  const [admin, setAdmin] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(backendUrl + `/users/${userId}`);
        const adminData = response.data;
        setAdmin(adminData);
      } catch (error) {
        console.error('Error fetching admin details:', error);
      }
    };

    fetchAdminDetails();
  }, []);

  if (!admin) {
    return <div>Loading...</div>; // Render a loading state
  } else if (!admin.isAdmin) {
    return <Navigate to="/profile" />; // Redirect to the login page if not an admin
  }

  return (
    <div>
      <Navbar />
      <div className='page-container'>
        <div className='admin-options'>
          <h1>Administrator's Page</h1>
          <Link to={`/manageadm`}>
            <button className='option-button'>Manage Administrators</button>
            <br />
          </Link>
          <Link to='/managelocation'>
            <button className='option-button'>Manage Locations</button>
            <br />
          </Link>
          <Link to='/manageclient'>
            <button className='option-button'>Manage Customers</button>
            <br />
          </Link>
          <Link to='/manageoffer'>
            <button className='option-button'>Manage Offers</button>
            <br />
          </Link>
        </div>

        <div className='admin-profile'>
          <img className='admin-image' src={backendUrl + "/uploads/" + admin.imgProfile} alt='Admin' />

          <div className='admin-info'>
            <h2>{admin.name}</h2>
            <hr />
            <h5>
              <FaPhone /> {admin.phone}
            </h5>
            <hr />
            <h5>
              <FaEnvelope /> {admin.email}
            </h5>
            <hr />
            <button className='edit-button' onClick={() => setShowEditPopup(true)}>
              <FaPencilAlt /> Edit Info
            </button>
          </div>
        </div>
      </div>

      <Popup
        open={showEditPopup}
        onClose={() => setShowEditPopup(false)}
        modal
        closeOnDocumentClick
      >
        <ProfileEditPopup
          user={admin}
          onCancel={() => setShowEditPopup(false)}
          onSave={() => {
            setShowEditPopup(false);
            // Reload the page
            window.location.reload();
          }}
        />
      </Popup>

      <Footer />
    </div>
  );
};

export default AdminPage;
