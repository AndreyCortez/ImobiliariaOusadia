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
  const [mainImage, setMainImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);

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

    const handleMainImageChange = (e) => {
      setMainImage(e.target.files[0]);
    };

    const handleOtherImagesChange = (e) => {
      const filesArray = Array.from(e.target.files);
      setOtherImages(filesArray);
    };

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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Starting handleEditSubmit');
  
      let mainImageFilename = editedHouse.mainImage || null;
      let otherImagesFilenames = editedHouse.otherImages || [];
  
      // Upload main image if a new one is selected
      if (mainImage) {
        console.log('Uploading main image');
        const mainImageFormData = new FormData();
        mainImageFormData.append('image', mainImage);
        const mainImageResponse = await axios.post(`${backendUrl}/users/upload`, mainImageFormData);
        mainImageFilename = mainImageResponse.data.filename;
        console.log('Main image uploaded:', mainImageFilename);
      }
  
      // Upload other images if new ones are selected
      if (otherImages.length > 0) {
        otherImagesFilenames = [];
        console.log('Uploading other images');
        for (let i = 0; i < otherImages.length; i++) {
          const image = otherImages[i];
          const imageFormData = new FormData();
          imageFormData.append(`image`, image);
          const imageResponse = await axios.post(`${backendUrl}/users/upload`, imageFormData);
          const imageFilename = imageResponse.data.filename;
          otherImagesFilenames.push(imageFilename);
          console.log(`Uploaded image ${i + 1}: ${imageFilename}`);
        }
      }
  
      // Create the updated house object with the uploaded filenames
      const updatedHouse = {
        ...editedHouse,
        mainImage: mainImageFilename,
        otherImages: otherImagesFilenames,
      };
  
      // Update the house using PUT request
      const response = await axios.put(`${backendUrl}/houses/${selectedHouse._id}`, updatedHouse);
  
      console.log('Casa atualizada:', response.data);
      setSelectedHouse(null);
      setEditedHouse(null);
      setShowEditPopup(false);
      setHouses(houses.map((item) => (item._id === response.data._id ? response.data : item)));
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar casa:', error);
    }
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

                <div className="form-group">
                  <label>Main Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleMainImageChange}
                  />
                </div>

                <div className="form-group">
                  <label>Other Images</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleOtherImagesChange}
                  />
                </div>
                <button onClick={(e) => handleEditSubmit(e)}>Save</button>
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
