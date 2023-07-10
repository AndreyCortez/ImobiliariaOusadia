import React, { useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import AddProperty from '../components/AddProperty/AddProperty.js';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import TableProperties from '../components/TableProperties/TableProperties.js';
import './ManageLocation.css'; // Importando o arquivo CSS para estilização

const ManageLocation = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSearch = (searchTerm) => {
    console.log('Pesquisar por:', searchTerm);
  };

  const handleAddProperty = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <div>
      <Navbar />
      <div className="manage-location-container">
        <HeaderPage title={"Manage Location"} />
        <h2>Property</h2>
        <TableProperties />
        <button className="button" onClick={handleAddProperty}>Add new Property</button>
      </div>
      <Footer />
      {showModal && (
        <Popup open={showModal} onClose={handleCloseModal}>
        <AddProperty/>
        </Popup>
      )}
    </div>
  );
};

export default ManageLocation;
