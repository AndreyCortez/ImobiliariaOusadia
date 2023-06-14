import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import HeaderPage from '../components/HeaderPage/HeaderPage.js';
import Button from '../components/Button/Button.js';
import SearchBar from '../components/SearchBar/SearchBar.js';
import {houseDetails} from '../data.js';
import TableProperties from '../components/TableProperties/TableProperties.js';
import './ManageLocation.css'; // Importando o arquivo CSS para estilização

const ManageLocation = () => {
  const handleSearch = (searchTerm) => {
    console.log('Pesquisar por:', searchTerm);
  };

  const handleEditar = (id) => {
    console.log(`Editar item com ID ${id}`);
    // Lógica para editar o item com o ID fornecido
  };

  const handleVisualizar = (id) => {
    console.log(`Visualizar item com ID ${id}`);
    // Lógica para visualizar o item com o ID fornecido
  };

  const handleDeletar = (id) => {
    console.log(`Deletar item com ID ${id}`);
    // Lógica para deletar o item com o ID fornecido
  };
  const searchText = "Search by ID or address..";
  return (
    <div>
      <Navbar />
    <div className="manage-location-container">
      
      <HeaderPage title={"Manage Location"}/>
      <h2>Property</h2>
      <SearchBar onSearch={handleSearch} 
      text={searchText}
      />
      <TableProperties
        data={houseDetails}
        onEdit={handleEditar}
        onView={handleVisualizar}
        onDelete={handleDeletar}
      />
      <Button name="Add new Property"/>
        </div>
      <Footer />
      </div>
  );
};

export default ManageLocation;
