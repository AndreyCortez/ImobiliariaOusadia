import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import ImgContainer from '../components/ImgContainer/ImgContainer.js';
import axios from 'axios';
import { backendUrl } from '../config.js';
import { useParams } from 'react-router-dom';

import award1 from '../assets/Awards/image 6.jpg'
import award2 from '../assets/Awards/image 7.jpg'
import award3 from '../assets/Awards/image 9.jpg'

import './Agent.css'

import { FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';

const AgentPage = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [houseDetails, setHouseDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/users/${id}`)
      .then(response => {
        
        setAgent(response.data);

        // Comparar o CPF do corretor com renterCPF nas casas
        axios
          .get(`${backendUrl}/soldhouse/agents/${id}`)
          .then(response => {
            
            const soldHouseIds = response.data.map(house => house.houseId);
            console.log(soldHouseIds)

            // Buscar as informações completas das casas com base nos IDs obtidos
            axios
              .get(`${backendUrl}/houses`)
              .then(response => {
                
                const filteredHouses = response.data.filter(house => soldHouseIds.includes(house._id));
                setHouseDetails(filteredHouses);
                console.log(filteredHouses);
              })
              .catch(error => {
                console.error(error);
              });
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!agent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className='agent-123-container'>
        <img className='agent-image' src={agent.image} alt="Agent" />
        <div className='agent-data'>
          <h1>{agent.name}</h1>
          <h4>Principal, Belle Property, Queanbay</h4>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p><b>Average Rating: 4.9</b></p>
          <div>
            <FaEnvelope /> {agent.email}
          </div>
          <div>
            <FaPhone /> {agent.phone}
          </div>

          <h4>Specialty suburbs</h4>
          Vila Pureza, Vila Rancho Velho, Vila Santa Madre Cabrini, Vila São José, Vila Sonia, Vila Vista Alegre

        </div>
        <hr className='agent-vline' />
        <div className='awards'>
          <h2>Awards</h2>
          <div className='awards-img'>
            <img src={award1} alt="Award 1" />
            <img src={award2} alt="Award 2" />
            <img src={award3} alt="Award 3" />
          </div>
        </div>
        <hr className='agent-vline' />
      </div>

      <div className='bottom-container'>
        <h2>My listings</h2>
        <div className="house-list">
          {houseDetails.map((house, index) => (
            <ImgContainer key={index} houseDetails={house} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentPage;
