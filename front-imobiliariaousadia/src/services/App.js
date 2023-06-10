import React from 'react';
import HomePage from '../pages/HomePage';
import HousePage from '../pages/HousePage';
import AboutUs from '../pages/AboutUs';
import SellPage from '../pages/SellPage';
import Profile from '../pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgentPage from '../pages/Agent';
import ManageLocation from '../pages/ManageLocation';
import AdminPage from '../pages/AdminPage';

const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/housepage" element={<HousePage />} />
        <Route path="/sellpage" element={<SellPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/managelocation" element={<ManageLocation/>} />
        <Route path="/profile" element={<Profile UserId = {1}/>} />
        <Route path="/agent" element={<AgentPage AgentId = {0} />}/>
        <Route path="/adminpage" element={<AdminPage AdminId={0}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;