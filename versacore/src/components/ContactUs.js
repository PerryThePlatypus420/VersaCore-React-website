import React from "react";
import './OurServices.css'; // Import the CSS file for card styles

function ContactUs() {
    return (
        <section className="py-5 mt-5">
            <div className="container" style={{ marginRight: "-5px" }}>
                <div className="row align-items-center custom-class-contact">
                    <div className="col-md-6 order-md-2 order-1 text-center">
                        <h2 className="text-center mb-5" style={{ fontWeight: "bold", fontSize: "2rem" }}>
                            Contact Us
                        </h2>
                    </div>
                    <div className="col-md-6 order-md-1 order-2">
                        <div className="card text-white h-100 shadow-sm custom-card">
                            <div className="card-body p-4">
                                <h5 className="card-title text-center fw-bold mb-4">
                                    Get in Touch with VersaCore
                                </h5>
                                <hr />
                                <div className="d-flex align-items-center mb-3">
                                    <span className="me-2 fs-4">📍</span>
                                    <h6 className="mb-0">Location: 123 VersaCore Ave, Tech City</h6>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span className="me-2 fs-4">📞</span>
                                    <h6 className="mb-0">Phone: +1 (555) 123-4567</h6>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span className="me-2 fs-4">✉️</span>
                                    <h6 className="mb-0">Email: contact@versacore.com</h6>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span className="me-2 fs-4">⏰</span>
                                    <h6 className="mb-0">Hours: Mon-Fri 9am-6pm</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="me-2 fs-4">🌐</span>
                                    <h6 className="mb-0">Website: www.versacore.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
