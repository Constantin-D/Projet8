import { useEffect, useState } from "react";
import banner from "../../../assets/images/Banner.png";
import Banner from "../../banner/Banner";
import Cards from "../../cards/Cards";
import "./home-container.scss";
import "./gallery.scss";

const Home = () => {
    const [RentalHouses, setRentalHouses] = useState([]);

    useEffect(() => {
        fetch("/RentalHouses.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data fetched:", data); // Debug
                setRentalHouses(data);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données :",
                    error
                );
            });
    }, []);
    return (
        <div className="home-container">
            <Banner image={banner} title="Chez vous, partout et ailleurs" className="banner-home"/>
            <div className="gallery">
                {RentalHouses.map((rentalHouse) => (
                    <Cards
                        key={rentalHouse.id}
                        id={rentalHouse.id}
                        image={rentalHouse.cover}
                        name={rentalHouse.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
