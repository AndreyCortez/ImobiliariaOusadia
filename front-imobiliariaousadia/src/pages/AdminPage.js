import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import './AdminPage.css'

import { agentDetails } from '../data.js';
import { FaEnvelope, FaPencilAlt, FaPhone } from 'react-icons/fa';

const AdminPage = ({AdminId}) => {
    let admin = agentDetails[AdminId]
  return (
    <div>
      <Navbar />
      <div className='page-container'>
        <div className='admin-options'>
      <h1>Administrator's Page</h1>
      <button className='option-button'>Manage Administrators</button><br/>
      <button className='option-button'>Manage Locations</button><br/>
      <button className='option-button'>Manage Customers</button><br/>
      </div>

        <div className='admin-profile'>
      <img className='admin-image' src={admin.image}/>
      <h2>{admin.name}</h2>
      <hr/>
      <h5> <FaPhone/> {admin.telefone}</h5>
      <hr/>
      
      <h5><FaEnvelope/> {admin.email}</h5>
      <hr/>
      <button className='edit-button'><FaPencilAlt/> Edit Info </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;