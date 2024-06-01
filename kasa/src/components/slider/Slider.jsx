import React, { useState } from "react";
import arrowPrev from "../../assets/images/arrow-prev.png";
import arrowNext from "../../assets/images/arrow-next.png";
import "./slider.scss";

const Slider = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    if (!pictures) { return null; 
    }

    return (
        <div className="slider">
            <button onClick={prevSlide} className="left-arrow">
                <img src={arrowPrev} alt="Previous slide" />
            </button>
            <img
                src={pictures[currentIndex]}
                alt={`slide ${currentIndex}`}
                className="silder-image"
            />
            <button onClick={nextSlide} className="right-arrow">
                <img src={arrowNext} alt="Next slide" />
            </button>
        </div>
    );
};

export default Slider;