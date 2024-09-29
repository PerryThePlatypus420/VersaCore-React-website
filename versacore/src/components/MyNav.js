import React from 'react';
import { Link } from 'react-router-dom';
import versacore_icon from '../assets/versacore_icon.png';
import './MyNav.css';

function MyNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100 mt-3">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={versacore_icon} alt="VersaCore Icon" className="me-2" style={{height: '40px'}} />
                    <span className="fs-3">VersaCore</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link to="/" className="nav-link fs-6 text-light" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/about-us" className="nav-link fs-6 text-light">About Us</Link>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle fs-6 text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Services
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Service 1</a></li>
                                <li><a className="dropdown-item" href="#">Service 2</a></li>
                                <li><a className="dropdown-item" href="#">Service 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/contact-us" className="nav-link fs-6 text-light">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNav;