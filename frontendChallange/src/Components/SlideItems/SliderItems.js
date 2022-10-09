import React from "react";
import Mycard from "./ItemSlider.js";
import "./SliderItems.css";
import leftSlide from "../../Assets/leftSlide.png";
import rightSlide from "../../Assets/rightSlide.png";


const SliderItems = () => {
  const btnpressprev = () => {
    let width = document.querySelector(".container").clientWidth;
    document.querySelector(".container").scrollLeft =
      document.querySelector(".container").scrollLeft - width;
   
  };

  const btnpressnext = () => {
    let width = document.querySelector(".container").clientWidth;
    document.querySelector(".container").scrollLeft =
      document.querySelector(".container").scrollLeft + width;
   
  };
  return (
    <div
      className="product-carousel"
      style={{ width: "1200px", marginLeft: "-35px" }}
    >
      <button className="pre-btn" onClick={btnpressprev}>
        <img
          src={leftSlide}
          alt="Canvas Logo"
          width="48px"
          height="48px"
          style={{ marginTop: "67px", marginLeft: "12px" }}
        />
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <img
          src={rightSlide}
          alt="Canvas Logo"
          width="48px"
          height="48px"
          style={{ marginTop: "67px" }}
        />
      </button>

      <div className="container" style={{ width: "1070px" }}>
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
      </div>
    </div>
  );
};

export default SliderItems;
