import React from "react";
import starActive from "../../assets/images/star-active.png";
import starInactive from "../../assets/images/star-inactive.png"
import "./rating-star.scss";

const RatingStar = ({ rating }) => {
    return (
        <div className="rating-star">
            {[...Array(5)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? starActive : starInactive}
                    alt={index < rating ? "Étoile active" : "Étoile inactive"}
                />
            ))}
        </div>
    );
};

export default RatingStar;