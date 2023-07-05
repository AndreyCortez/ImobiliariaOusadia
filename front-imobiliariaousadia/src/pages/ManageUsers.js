import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TableUsers from "../components/TableUsers/TableUsers";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";
import { backendUrl } from "../config.js";
import "./ManageLocation.css";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import AddUser from "../components/AddUser/AddUser";

const ManageUsers = ({ type }) => {
  const [showModal, setShowModal] = useState(false);
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

  const handleAddProperty = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        />
        <button className="button" onClick={handleAddProperty}>Add new User</button>
      </div>
      <Footer />
      {showModal && (
        <Popup open={showModal} onClose={handleCloseModal}>
        <AddUser userType = {type} />
        </Popup>
        )}
    </>
  );
};

export default ManageUsers;
