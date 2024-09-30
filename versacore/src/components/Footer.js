import React from 'react';
import { Link } from 'react-scroll';
import versacore_icon from '../assets/versacore_icon.png';

function Footer() {
    const quickLinks = [
        { name: 'Home', id: 'backImg' },
        { name: 'Our Mission', id: 'ourMission' },
        { name: 'Services', id: 'ourServices' },
        { name: 'About Us', id: 'aboutUs' },
        { name: 'Our Team', id: 'ourTeam' },
        { name: 'Contact Us', id: 'contactUs' }
    ];

    return (
        <footer className="text-white py-4" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <Link to='backImg' className="navbar-brand d-flex align-items-center" style={{cursor:"pointer"}}>
                            <img src={versacore_icon} alt="VersaCore Icon" className="me-2" style={{ height: '40px' }} />
                            <span className="fs-3">VersaCore</span>
                        </Link>
                        <p className="mt-3 mb-0">Engineering Excellence and IT Innovation</p>
                    </div>
                    <div className="col-md-8">
                        <div className="text-center mb-3">
                            <h5>Quick Links</h5>
                        </div>
                        <ul className="list-inline text-center mb-0">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="list-inline-item me-3 mb-2" style={{ cursor: "pointer" }}>
                                    <Link
                                        to={link.id}
                                        className="text-white text-decoration-none"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} VersaCore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;