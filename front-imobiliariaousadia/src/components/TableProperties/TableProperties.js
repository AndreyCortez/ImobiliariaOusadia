import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TableProperties.css';
import { backendUrl } from '../../config.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TableProperties = () => {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [editedHouse, setEditedHouse] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  useEffect(() => {
    axios.get(backendUrl + '/houses')
      .then(response => {
        setHouses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEdit = (id) => {
    const house = houses.find(item => item._id === id);
    setSelectedHouse(house);
    setEditedHouse({ ...house });
    setShowEditPopup(true);
  };

  const handleView = (id) => {
    // Lógica para lidar com a ação de visualização
    console.log('Visualizar item com ID:', id);
  };

  const handleDelete = (id) => {
    const house = houses.find(item => item._id === id);
    setSelectedHouse(house);
    setShowDeletePopup(true);
  };

  const handleEditSubmit = () => {
    // Lógica para atualizar a casa no banco de dados
    console.log('Casa atualizada:', editedHouse);
    setSelectedHouse(null);
    setEditedHouse(null);
    setShowEditPopup(false);
  };

  const handleDeleteConfirm = () => {
    // Lógica para excluir a casa do banco de dados
    console.log('Casa excluída:', selectedHouse);
    setSelectedHouse(null);
    setEditedHouse(null);
    setShowDeletePopup(false);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((item, index) => (
            <tr
              key={item._id}
              className={index % 2 === 0 ? 'highlighted-row' : ''}
            >
              <td>{item._id}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => handleEdit(item._id)}>Edit</button>
                <button onClick={() => handleView(item._id)}>Visualize</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Popup */}
      {showEditPopup && (
        <Popup open={showEditPopup} onClose={() => setShowEditPopup(false)}>
          <div className="edit-popup">
            <h2>Edit House</h2>
            {editedHouse && (
              <form>
                <div className="form-group">
                  <label>House Type</label>
                  <input
                    type="text"
                    value={editedHouse.houseType}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, houseType: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Estimated Value</label>
                  <input
                    type="number"
                    value={editedHouse.estimatedValue}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, estimatedValue: e.target.value })
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
      {showDeletePopup && (
        <Popup open={showDeletePopup} onClose={() => setShowDeletePopup(false)}>
          <div className="delete-popup">
            <h2>Delete House</h2>
            <p>Are you sure you want to delete this house?</p>
            <button onClick={handleDeleteConfirm}>Yes</button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default TableProperties;
