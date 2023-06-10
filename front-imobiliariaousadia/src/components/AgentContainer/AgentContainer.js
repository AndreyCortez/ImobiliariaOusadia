import React from 'react';
import './AgentContainer.css';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
const AgentContainer = ({ image, email, name, telefone}) => {

  
  return (
    <div className="agent-container">
    
    <a href='oi'>
      <img className="agent-image" src={image} alt="House" />
    </a>
      <div className='agent-address'>
        <h2>{name}</h2>
      </div>
     
      <div className="agent-details">
        <div className="icon">
          <FaEnvelope />
          <div className="info">
            <p>{email}</p>
          </div>
        </div>
        <div className="icon">
          <FaPhone />
          <div className="info">
            <p>{telefone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentContainer;
