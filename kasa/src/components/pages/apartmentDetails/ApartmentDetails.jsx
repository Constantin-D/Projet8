
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Collapse from "../../collapse/Collapse";
import "./apartment-details.scss";

const ApartmentDetails = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/RentalHouses.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data fetched:", data); // Debug
                const apartment = data.find((apartment) => apartment.id === id);
                if (!apartment) {
                    navigate("/*")
                    return;
                }
                console.log("Apartment found:", apartment); // Debug
                setApartment(apartment);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données :",
                    error
                );
            });
    }, [id]);

    if (!apartment) {
        return <div>Loading...</div>;
    }

    const renderStars = (rating) => {
        // Fonction pour afficher les étoiles en fonction de la note
        return [...Array(5)].map((_, index) => (
            <FontAwesomeIcon
                key={index}
                icon={index < rating ? solidStar : emptyStar}
                className="star-icon"
            />
        ));
    };

    return (
        <div className="apartment-details">
            <div className="carrousel">
                {apartment.pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`Apartment ${index + 1}`}
                    />
                ))}
            </div>
            <h2>{apartment.title}</h2>
            <div className="apartment-info">
                <div className="host-info">
                    <img
                        src={apartment.host.picture}
                        alt={apartment.host.name}
                    />
                    <p>{apartment.host.name}</p>
                </div>
                <div className="location-rating">
                    <p>{apartment.location}</p>
                    <div className="rating">
                        {renderStars(parseInt(apartment.rating))}
                    </div>
                </div>
            </div>
            <Collapse
                title="Description"
                content={<p>{apartment.description}</p>}
            />
            <Collapse
                title="Équipements"
                content={
                    <ul>
                        {apartment.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                }
            />
        </div>
    );
};

export default ApartmentDetails;
