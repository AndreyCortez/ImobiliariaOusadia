import React from "react";
import './Highlights.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgContainer from "../ImgContainer/ImgContainer";
import { houseDetails } from "../../data";

const Highlights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <div className="slick-custom-arrow slick-prev" />,
    nextArrow: <div className="slick-custom-arrow slick-next" />
  };

  return (
    <div className="highlights-slider">
      <h1 className="slider-heading">Highlights</h1>
      <Slider {...settings}>
        {houseDetails.map((house, index) => (
          <div key={index}>
            <ImgContainer houseDetails={house} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Highlights;
