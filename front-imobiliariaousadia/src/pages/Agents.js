
import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import AgentContainer from '../components/AgentContainer/AgentContainer.js';

import "./HomePage.js"
import HeaderPage from '../components/HeaderPage/HeaderPage.js';


import {agentDetails} from '../data.js';


const Agents = () => {

  return (
    <div>
      <Navbar/>
      <HeaderPage
        title="Find Your Agent"
      />
      <div className="container">
        <div className="house-list">
          {Array.from(agentDetails).map((agent, index) => (
            <AgentContainer
              key={index}
              name = {agent.name}
              image={agent.image}
              email={agent.email}
              telefone={agent.telefone}
            />
          ))}
        </div>
      </div>
      <Footer/>
      </div>
     
  );
};

export default Agents;
