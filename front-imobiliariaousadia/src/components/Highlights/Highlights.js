import React, { useEffect, useState } from "react";
import "./Highlights.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgContainer from "../ImgContainer/ImgContainer";
import axios from "axios";
import { backendUrl } from "../../config";

const Highlights = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get(backendUrl + "/houses")
      .then((response) => {
        setHouses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <div className="slick-custom-arrow slick-prev" />,
    nextArrow: <div className="slick-custom-arrow slick-next" />,
  };

  return (
    <div className="highlights-slider">
      <h1 className="slider-heading">Highlights</h1>
      <Slider {...settings}>
        {houses.map((house, index) => (
          <div key={index}>
            <ImgContainer houseDetails={house} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Highlights;
