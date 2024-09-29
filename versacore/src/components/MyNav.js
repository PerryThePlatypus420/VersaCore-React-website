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
                                smooth="easeInOutQuad" // Custom easing function
                                duration={800} // Adjusted scrolling duration
                                spy={true}
                                exact="true"
                                offset={-70} // Optional offset for fixed navbar
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="ourMission" // Id of the Our Mission section
                                className="nav-link fs-6 text-light"
                                smooth="easeInOutQuad"
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={-70}
                            >
                                Our Mission
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="ourServices" // Id of the Services section
                                className="nav-link fs-6 text-light"
                                smooth="easeInOutQuad"
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={-70}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="aboutUs" // Id of the About Us section
                                className="nav-link fs-6 text-light"
                                smooth="easeInOutQuad"
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={-70}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                to="contactUs" // Id of the Contact Us section
                                className="nav-link fs-6 text-light"
                                smooth="easeInOutQuad"
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={-70}
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
