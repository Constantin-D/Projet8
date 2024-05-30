
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import About from "../pages/about/About.jsx";
import Home from "../pages/home/Home.jsx";
import ApartmentDetails from "../pages/apartmentDetails/ApartmentDetails.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import "./app.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/apartment/:id" element={<ApartmentDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
