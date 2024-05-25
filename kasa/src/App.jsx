
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import RentalHouse from "./components/RentalHouse.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="rentalHouse/:id" element={<RentalHouse />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
