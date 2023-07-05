import React from 'react';
import './AgentContainer.css';
import { Link } from 'react-router-dom';  

import { FaPhone, FaEnvelope } from 'react-icons/fa';
const AgentContainer = ({ agent}) => {

  
  return (
    <Link to={`/agent/${agent._id}`}>
    <div className="agent-container">
 
      <img className="agent-image" src={agent.image} alt="Agent" />
      <div className='agent-address'>
        <h2>{agent.name}</h2>
      </div>
     
      <div className="agent-details">
        <div className="icon">
          <FaEnvelope />
          <div className="info">
            <p>{agent.email}</p>
          </div>
        </div>
        <div className="icon">
          <FaPhone />
          <div className="info">
            <p>{agent.phone}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AgentContainer;
