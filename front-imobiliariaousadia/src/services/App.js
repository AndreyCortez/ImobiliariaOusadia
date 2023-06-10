import React from 'react';
import HomePage from '../pages/HomePage';
import HousePage from '../pages/HousePage';
import AboutUs from '../pages/AboutUs';
import SellPage from '../pages/SellPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/housepage" element={<HousePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/buy" element={<SellPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;