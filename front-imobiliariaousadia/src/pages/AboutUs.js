import React from 'react';
import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/Navbar.js';
import './AboutUs.css'
import house1 from'../assets/test/house1.jpg'
import people from '../assets/test/People.jpg'


const AboutUs = () => {
  return (
    <div>
      <Navbar />

        <div class="bg-title">
        <h1 class="title">About Us</h1>
        </div>

    <div class = "about-container">
        <div class = "about-text-area">
        
      <h2>Our Mission</h2>
      At Ousadia Imobiliária, our mission is to facilitate the buying, selling or renting of real estate by connecting buyers and sellers. We also have real estate agents on our team who provide expert guidance, property information, assistance in price negotiation, and support throughout the transaction process. We aim to help our clients carry out their real estate transactions efficiently and effectively.
      </div>
        
        <img class = "image-box" src = {house1}/>

    </div>

    <div class = "about-container">

    <img class = "image-box" src = {people}/>

    <div class = "about-text-area">
        <h2>Our Goal</h2>
      Our goal is to provide high-quality service to our clients, offering personalized and specialized assistance in all stages of real estate transactions. We perform accurate property evaluations, ensuring that our clients obtain the best market value. In addition, we work with transparency and ethics in all negotiations, providing safety and peace of mind to our clients. We are always up-to-date with real estate market trends, and our team is composed of experienced and qualified professionals who are ready to offer excellent service.
        
    </div>

    </div>

    <Footer />
    
    </div>
  );
};

export default AboutUs;