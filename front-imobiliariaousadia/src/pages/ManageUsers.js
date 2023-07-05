import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TableUsers from "../components/TableUsers/TableUsers";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";
import { backendUrl } from "../config.js";
import "./ManageLocation.css";

const ManageUsers = ({ type }) => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`${backendUrl}/users/role/${type}`)
      .then((response) => {
        setUsersData(response.data);
        console.log (type);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [type]);

  const handleSearch = (searchTerm) => {
    console.log("Pesquisar por:", searchTerm);
    setSearchText(searchTerm);
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

  const filteredUsersData = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="manage-location-container">
        <h2>USERS</h2>

        <SearchBar onSearch={handleSearch} text="search by Name or email" />
        <TableUsers
          data={filteredUsersData}
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
