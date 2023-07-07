import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TableOffer.css';
import Popup from 'reactjs-popup';
import { backendUrl } from '../../config.js';
import 'reactjs-popup/dist/index.css';

const TableOffer = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = () => {
    axios
      .get(backendUrl + '/offer/pending')
      .then((response) => {
        setOffers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching offers:', error);
      });
  };

  const handleAcceptOffer = (id, userId) => {
    console.log(`Accept offer for offer ID ${id}`);
    axios
      .put(backendUrl + `/offer/${id}`, { status: 'accepted' })
      .then(() => {
        const updatedOffers = offers.map((offer) => {
          if (offer._id === id && offer.userId === userId) {
            return { ...offer, status: 'accepted' };
          }
          return offer;
        });
        setOffers(updatedOffers);
      })
      .catch((error) => {
        console.error('Error accepting offer:', error);
      });
      window.location.reload();
  };

  const handleRejectOffer = (id, userId) => {
    console.log(`Reject offer for offer ID ${id}`);
    axios
      .put(backendUrl + `/offer/${id}`, { status: 'rejected' })
      .then(() => {
        const updatedOffers = offers.map((offer) => {
          if (offer._id === id && offer.userId === userId) {
            return { ...offer, status: 'rejected' };
          }
          return offer;
        });
        setOffers(updatedOffers);
      })
      .catch((error) => {
        console.error('Error rejecting offer:', error);
      });
      window.location.reload();
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="offer-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>House ID</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.length === 0 ? (
              <tr>
                <td colSpan="5">There are no pending offers.</td>
              </tr>
            ) : (
              offers.map((offer) => (
                <tr key={offer._id}>
                  <td>{offer.userId}</td>
                  <td>{offer.houseId}</td>
                  <td>{offer.value}</td>
                  <td>{offer.paymentMethod}</td>
                  <td>
                    <button onClick={() => handleAcceptOffer(offer._id, offer.userId)}>Accept</button>
                    <button onClick={() => handleRejectOffer(offer._id, offer.userId)}>Reject</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableOffer;

