import { useEffect, useState } from "react";
import banner from "../../assets/images/Banner.png";
import Thumbs from "../Thumbs";
import Banner from "../Banner";
// import RentalHouses from '../../data/RentalHouses.json';

const Home = () => {
    const [RentalHouses, setRentalHouses] = useState([]);

    useEffect(() => {
        fetch("./RentalHouses.json")
        .then((response) =>
            response.json()
        ).then((data) => {
            setRentalHouses(data);
        }).catch((error) => {
            console.error("Erreur lors de la récupération des données :", error);
        });     
    }, []);
    return (
        <div className="home">
            <Banner image={banner} title="Chez vous, partout et ailleurs" />
            <div className="gallery">
                {RentalHouses.map((rentalHouse) => (
                    <Thumbs key={rentalHouse.id} image={rentalHouse.cover} name={rentalHouse.title} />
                ))}     
            </div>
        </div>
    );
};

export default Home;
