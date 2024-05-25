import React from "react";
import bannerAbout from "../../assets/images/BannerAbout.png";
import Banner from "../Banner";

const About = () => {
    return (
        <div className="about">
            <Banner image={bannerAbout} className="banner-about" />
        </div>
    );
};

export default About;