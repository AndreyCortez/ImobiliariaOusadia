import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';

import award1 from '../assets/Awards/image 6.jpg'
import award2 from '../assets/Awards/image 7.jpg'
import award3 from '../assets/Awards/image 9.jpg'

import { FaStar, FaPhone, FaEnvelope  } from 'react-icons/fa';
import {agentDetails, houseDetails} from '../data.js'

const AgentPage = ({AgentId}) => {

    let Agent = agentDetails[AgentId];

  return (
    <div>
      <Navbar />
      
      <div className= 'agent-container'>
      <img className='agent-image' src={Agent.image}/>
      <div className='agent-data'>

        <h2>{Agent.name}</h2>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <div >
          <FaEnvelope /> {Agent.email}
        </div>
        <div>
          <FaPhone /> {Agent.telefone}
        </div>

        <h4>Speaciality suburbs</h4>
        Vila Pureza, Vila Rancho Velho, Vila Santa Madre Cabrini, Vila São José, Vila Sonia, Vila Vista Alegre

      </div>
      <div className = 'awards'>
        <h2>Awards</h2>
        <img src = {award1}/>
        <img src = {award2}/>
        <img src = {award3}/>
      </div>
      </div>
      <div className='container'>
        <h2>My listing</h2>
        </div>

    
        <div className="container">
        <div className="house-list">
          {houseDetails.map((house, index) => (
            <ImgContainer
              key={index}
              image={house.image}
              city={house.city}
              address={house.address}
              bathrooms={house.bathrooms}
              bedrooms={house.bedrooms}
              garage={house.garage}
            />
          ))}
      </div>

      </div>
      <Footer />

    </div>
  );
};

export default AgentPage;