import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TableUsers from "../components/TableUsers/TableUsers";
import {users} from "../data";
import SearchBar from "../components/SearchBar/SearchBar";
import "./ManageLocation.css"

const ManageUsers = (type) =>{
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
      

      let usersdata = users.filter(user => user.userType === type.typeUser);
      const searchText =  "search by Name or email";
    return(
        <>
            <Navbar />
            <div className="manage-location-container">

            
            <h2>USERS</h2>

            <SearchBar onSearch={handleSearch}
            text = {searchText} />
            <TableUsers       
            data={usersdata}
            onEdit={handleEditar}            
            onView={handleVisualizar}
            onDelete={handleDeletar}
            />

            </div>
            <Footer />
        </>
    );
};

export default ManageUsers;