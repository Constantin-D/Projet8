import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./cards.scss";

const Cards = ({ id, image, name }) => {
    return (
        <div className="Cards">
            <Link to={`/apartment/${id}`} className="card-link">
                <img src={image} alt="Image de la location" />
                <div className="card-info">
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>
    );
};

Cards.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Cards;
