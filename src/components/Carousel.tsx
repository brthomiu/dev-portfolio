import { ImagesType } from "../types/types";
import { useState } from "react";

const Carousel = (props: ImagesType) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < props.images.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    } else {
      setSlide(props.images.length - 1);
    }
  };

  return (
    <div className="carousel--container">
      <button className="carousel--button-l" onClick={prevSlide}>
        <div className="carousel--arrow">{"<"}</div>
      </button>
      <img className="carousel--image" src={props.images[slide]}></img>
      <button className="carousel--button-r" onClick={nextSlide}>
        <div className="carousel--arrow">{">"}</div>
      </button>
    </div>
  );
};

export default Carousel;
