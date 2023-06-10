import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage.js'
import HousePage from './pages/HousePage.js';
import SellPage from './pages/SellPage.js';
import reportWebVitals from './reportWebVitals';
import Appraisal from './pages/Appraisal';
import SignIn from './pages/SignIn';
import Register from './pages/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
