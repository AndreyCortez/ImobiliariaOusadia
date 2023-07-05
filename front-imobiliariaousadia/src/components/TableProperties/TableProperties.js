import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    axios
      .get(backendUrl + '/houses')
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
    // Navegar para a página da casa com o ID especificado
    window.location.href = `/house/${id}`;
  };

  const handleDelete = (id) => {
    const house = houses.find(item => item._id === id);
    setSelectedHouse(house);
    setShowDeletePopup(true);
  };

  const handleEditSubmit = () => {
    axios
      .put(`${backendUrl}/houses/${selectedHouse._id}`, editedHouse)
      .then(response => {
        console.log('Casa atualizada:', response.data);
        setSelectedHouse(null);
        setEditedHouse(null);
        setShowEditPopup(false);
        // Atualizar a lista de casas após a edição
        setHouses(houses.map(item => item._id === response.data._id ? response.data : item));
      })
      .catch(error => {
        console.error('Erro ao atualizar casa:', error);
      });
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`${backendUrl}/houses/${selectedHouse._id}`)
      .then(response => {
        console.log('Casa excluída:', selectedHouse);
        setSelectedHouse(null);
        setEditedHouse(null);
        setShowDeletePopup(false);
        // Atualizar a lista de casas após a exclusão
        setHouses(houses.filter(item => item._id !== selectedHouse._id));
      })
      .catch(error => {
        console.error('Erro ao excluir casa:', error);
      });
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
                  <label>Address</label>
                  <input
                    type="text"
                    value={editedHouse.address}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, address: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    value={editedHouse.city}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, city: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>House Type</label>
                  <input
                    type="text"
                    value={editedHouse.typeOfProperty}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, typeOfProperty: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Bedrooms</label>
                  <input
                    type="number"
                    value={editedHouse.bedrooms}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, bedrooms: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Bathrooms</label>
                  <input
                    type="number"
                    value={editedHouse.bathrooms}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, bathrooms: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Garage</label>
                  <input
                    type="number"
                    value={editedHouse.garage}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, garage: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Estimated Value</label>
                  <input
                    type="number"
                    value={editedHouse.estimatedValue}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, estimatedValue: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Realtor CPF</label>
                  <input
                    type="text"
                    value={editedHouse.realtorCPF}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, realtorCPF: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={editedHouse.description}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, description: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Land Size</label>
                  <input
                    type="number"
                    value={editedHouse.landSize}
                    onChange={(e) =>
                      setEditedHouse({ ...editedHouse, landSize: parseInt(e.target.value) })
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
            <h4>Are you sure you want to delete this house?</h4>
            <button onClick={handleDeleteConfirm}>Yes</button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default TableProperties;
