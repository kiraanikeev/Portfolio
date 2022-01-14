import React from "react";
import styles from "./Projects.module.css";
import leftArrow from "../../img/left.png";
import rightArrow from "../../img/right.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? styles.btnSlideNext : styles.btnSlidePrev
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
