import React from "react";
import "./Back-img.css";
import bgimg from "../assets/landing-page-img.jpg";
import { Link } from "react-scroll";

function BackImg() {
    return (
        <div className="hero-container">
            <img src={bgimg} alt="landing-page-img" className="bg-img" />
            <div className="overlay"></div>

            <div className="hero-content">
                <h1 className="display-5 fw-bold mb-4">Engineering Excellence and IT Innovation</h1>
                <p className="lead mb-5">
                    At VersaCore, we offer a comprehensive suite of engineering and
                    IT services designed to meet the diverse needs of our clients.
                    Our expertise spans several critical areas.
                </p>
                <Link
                    to="ourServices"
                    className="btn btn-primary btn-lg"
                    offset={-70}
                >
                    More About Our Services
                </Link>
            </div>
        </div>
    );
}

export default BackImg;