import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import versacore_icon from '../assets/versacore_icon.png';
import './MyNav.css';

function MyNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100">
            <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <img src={versacore_icon} alt="VersaCore Icon" className="me-2" style={{ height: '40px' }} />
                    <span className="fs-3">VersaCore</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link
                                to="backImg" // This should match the id of the respective section
                                className="nav-link fs-6 text-light"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="ourMission" // Id of the Our Mission section
                                className="nav-link fs-6 text-light"
                            >
                                Our Mission
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="ourServices" // Id of the Services section
                                className="nav-link fs-6 text-light"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="aboutUs" // Id of the About Us section
                                className="nav-link fs-6 text-light"
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="ourTeam" // Id of the Contact Us section
                                className="nav-link fs-6 text-light"
                            >
                                Our Team
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="contactUs" // Id of the Contact Us section
                                className="nav-link fs-6 text-light"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNav;
