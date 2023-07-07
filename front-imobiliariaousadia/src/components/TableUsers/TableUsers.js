import React, { useState } from 'react';
import axios from 'axios';
import './TableUsers.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { backendUrl } from '../../config.js';


const TableUsers = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleEdit = (id) => {
    const user = data.find(item => item._id === id);
    setSelectedUser(user);
    setEditedUser({ ...user });
    setShowEditPopup(true);
  };

  const handleDelete = (id) => {
    const user = data.find(item => item._id === id);
    setSelectedUser(user);
    setShowDeletePopup(true);
  };

  const handleEditSubmit = () => {
    // Simulating a request to update the user
    axios
      .put(`${backendUrl}/users/${selectedUser._id}`, editedUser)
      .then(response => {
        console.log('Updated user:', response.data);
        setSelectedUser(null);
        setEditedUser(null);
        setShowEditPopup(false);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
      window.location.reload();
  };
  
  const handleDeleteConfirm = () => {
    axios
      .delete(`${backendUrl}/users/${selectedUser._id}`)
      .then(response => {
        console.log('Usuário excluído:', selectedUser);
        setSelectedUser(null);
        setShowDeletePopup(false);
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
      });
      window.location.reload();
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Phone</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item._id}
              className={index % 2 === 0 ? 'highlighted-row' : ''}
            >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.cpf}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => handleEdit(item._id)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Popup */}
      {selectedUser && (
        <Popup open={showEditPopup} onClose={() => setShowEditPopup(false)}>
          <div className="edit-popup">
            <h2>Edit User</h2>
            {editedUser && (
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={editedUser.phone}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, phone: e.target.value })
                    }
                  />
                </div>
                <button onClick={handleEditSubmit}>Save</button>
              </form>
            )}
          </div>
        </Popup>
      )}

      {/* Delete Popup */}
      {selectedUser && (
        <Popup open={showDeletePopup} onClose={() => setShowDeletePopup(false)}>
          <div className="delete-popup">
            <h2>Delete User</h2>
            <h4>Are you sure you want to delete this user?</h4>
            <button onClick={handleDeleteConfirm}>Yes</button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default TableUsers;
