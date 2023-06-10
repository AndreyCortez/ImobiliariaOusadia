import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage.js'
import HousePage from './pages/HousePage.js';
import SellPage from './pages/SellPage.js';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/AboutUs';
import Agents from './pages/Agents'
import AgentPage from './pages/Agent';

import agentDetails from './data'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgentPage
    AgentId={0}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
