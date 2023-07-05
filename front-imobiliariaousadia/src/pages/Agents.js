import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import AgentContainer from '../components/AgentContainer/AgentContainer.js';
import axios from 'axios';
import { backendUrl } from '../config.js';

import "./HomePage.js"
import HeaderPage from '../components/HeaderPage/HeaderPage.js';

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/users/role/admin`)
      .then(response => {
        setAgents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (
    <div>
      <Navbar/>
      <HeaderPage title="Find Your Agent" />
      <div className="house-list">
        {agents.map((agent, index) => (
          <AgentContainer key={index} agent={agent} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Agents;
