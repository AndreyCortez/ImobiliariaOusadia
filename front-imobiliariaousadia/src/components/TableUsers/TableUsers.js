import React, { useState } from 'react';
import axios from 'axios';
import './TableUsers.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TableUsers = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleEdit = (id) => {
    const user = data.find(item => item.id === id);
    setSelectedUser(user);
    setEditedUser({ ...user });
    setShowEditPopup(true);
  };

  const handleDelete = (id) => {
    const user = data.find(item => item.id === id);
    setSelectedUser(user);
    setShowDeletePopup(true);
  };

  const handleEditSubmit = () => {
    // Simulando uma requisição para atualizar o usuário
    axios
      .put(`/users/${selectedUser.id}`, editedUser)
      .then(response => {
        console.log('Usuário atualizado:', response.data);
        setSelectedUser(null);
        setEditedUser(null);
        setShowEditPopup(false);
        // Atualizar a lista de usuários após a edição
        // ...
      })
      .catch(error => {
        console.error('Erro ao atualizar usuário:', error);
      });
  };

  const handleDeleteConfirm = () => {
    // Simulando uma requisição para excluir o usuário
    axios
      .delete(`/users/${selectedUser.id}`)
      .then(response => {
        console.log('Usuário excluído:', selectedUser);
        setSelectedUser(null);
        setShowDeletePopup(false);
        // Atualizar a lista de usuários após a exclusão
        // ...
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
      });
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
              key={item.id}
              className={index % 2 === 0 ? 'highlighted-row' : ''}
            >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.cpf}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
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
                  <label>CPF</label>
                  <input
                    type="text"
                    value={editedUser.cpf}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, cpf: e.target.value })
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
