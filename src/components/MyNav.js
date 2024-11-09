import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import versacore_icon from '../assets/versacore_icon.png';
import './MyNav.css';

function MyNav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <Link to='/' className="navbar-brand d-flex align-items-center" style={{cursor:"pointer"}}>
                    <img src={versacore_icon} alt="VersaCore Icon" className="me-2" style={{ height: '40px' }} />
                    <span className="fs-3">VersaCore</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <ScrollLink
                                to="backImg"
                                className="nav-link fs-6 text-light"
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                            <ScrollLink
                                to="ourMission"
                                className="nav-link fs-6 text-light"
                                offset={-70}
                            >
                                Our Mission
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                            <ScrollLink
                                to="ourServices"
                                className="nav-link fs-6 text-light"
                                offset={-70}

                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                            <ScrollLink
                                to="aboutUs"
                                className="nav-link fs-6 text-light"
                                offset={-70}
                            >
                                About Us
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                            <ScrollLink
                                to="ourTeam"
                                className="nav-link fs-6 text-light"
                                offset={-70}
                            
                            >
                                Our Team
                            </ScrollLink>
                        </li>
                        <li className="nav-item mx-2">
                            <ScrollLink
                                to="contactUs"
                                className="nav-link fs-6 text-light"
                                offset={-90}
                            
                            >
                                Contact Us
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNav;