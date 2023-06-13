import React from 'react';
import { houseStatus } from '../data.js';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import TableOffer from '../components/TableOffer/TableOffer.js';
import './ManageOffer.css';


const ManageOffer = () => {
  return (
    <div>
      <Navbar />
      <HeaderPage title={'Manage Offers'} />
      <div className="manage-offer-container">
        <h2>Offers</h2>
        <TableOffer/>
      </div>
      <Footer />
    </div>
  );
};

export default ManageOffer;
