import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.png";
import rightArrow from "./icons/right-arrow.png";
import { Image } from 'react-bootstrap'
export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <Image className = 'arrow' src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
