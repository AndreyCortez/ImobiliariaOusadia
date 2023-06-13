import React, { useState } from 'react';
import { houseStatus } from '../../data';
import './TableOffer.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TableOffer = () => {
  const [filteredOffers, setFilteredOffers] = useState(houseStatus.filter(offer => offer.status === 'negotiation'));
  const [acceptedOwner, setAcceptedOwner] = useState('');
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [rejectedOffer, setRejectedOffer] = useState(null);
  const [showRejectionPopup, setShowRejectionPopup] = useState(false);

  const handleAcceptOffer = (id, owner) => {
    console.log(`Accept offer for house ID ${id}`);
    const offerIndex = houseStatus.findIndex((offer) => offer.id === id && offer.owner === owner);

    if (offerIndex !== -1) {
      const { owner: acceptedOwner, price } = houseStatus[offerIndex];
      const acceptedOffer = { id, status: 'sold', owner: acceptedOwner, price };
      const updatedHouseStatus = houseStatus.filter((offer) => offer.id !== id);
      updatedHouseStatus.push(acceptedOffer);
      setFilteredOffers(updatedHouseStatus.filter(offer => offer.status === 'negotiation'));
      houseStatus.splice(0, houseStatus.length, ...updatedHouseStatus);
      console.log('Updated house status:', houseStatus);
      setAcceptedOwner(acceptedOwner);
      setShowConfirmationPopup(true);
    }
  };

  const handleRejectOffer = (id, owner) => {
    console.log(`Reject offer for house ID ${id}`);
    
    const updatedHouseStatus = houseStatus.filter((offer) => offer.id !== id || offer.owner !== owner);
    houseStatus.splice(0, houseStatus.length, ...updatedHouseStatus);
    
    const updatedFilteredOffers = filteredOffers.filter((offer) => offer.id !== id || offer.owner !== owner);
    setFilteredOffers(updatedFilteredOffers);
  
    const rejectedOffer = filteredOffers.find((offer) => offer.id === id && offer.owner === owner);
    setRejectedOffer(rejectedOffer);
    
    setShowRejectionPopup(true);
  };

  return (
    <div>
      <table className="offer-table">
        <thead>
          <tr>
            <th>CPF</th>
            <th>House ID</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.owner}</td>
              <td>{offer.id}</td>
              <td>{offer.price}</td>
              <td>
                <button onClick={() => handleAcceptOffer(offer.id, offer.owner)}>Accept</button>
                <button onClick={() => handleRejectOffer(offer.id, offer.owner)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Popup
        position="right center"
        open={showConfirmationPopup}
        onClose={() => setShowConfirmationPopup(false)}
      >
        <div>Buyer with CPF {acceptedOwner} has acquired the house. Status: sold.</div>
      </Popup>

      <Popup
        position="right center"
        open={showRejectionPopup}
        onClose={() => setShowRejectionPopup(false)}
      >
        {rejectedOffer && (
          <div>Offer for house ID {rejectedOffer.id} with owner CPF {rejectedOffer.owner} has been rejected.</div>
        )}
      </Popup>
    </div>
  );
};

export default TableOffer;
