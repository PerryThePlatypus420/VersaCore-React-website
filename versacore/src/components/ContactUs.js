import React from "react";

function ContactUs() {
    const contactInfo = [
        { icon: "fas fa-map-marker-alt", text: "Gaithersburg, Marylands 20877, US", link: "https://maps.app.goo.gl/5MHpBQwb7dvCRGiT7?g_st=com.google.maps.preview.copy" },
        { icon: "fas fa-phone", text: "+92 300 9445989", link: "tel:+923009445989" },
        { icon: "fab fa-whatsapp", text: "+92 300 9445989", link: "https://wa.me/+923009445989" },
        { icon: "fas fa-envelope", text: "versacore0@gmail.com", link: "mailto:versacore0@gmail.com" },
        { icon: "fab fa-linkedin", text: "VersaCore", link: "https://www.linkedin.com/company/versacore" },
        { icon: "fab fa-instagram", text: "versacore_llc", link: "https://www.instagram.com/versacore_llc?igsh=MTZqamN0ZTliYTJ5Yg==" },
    ];

    return (
        <section className="py-5 mb-5 mt-5">
            <div className="container" style={{ marginRight: "20px" }}>
                <div className="row align-items-center custom-class-contact">
                    <div className="col-md-4 order-md-2 order-1 text-center">
                    <h2 className="text-center mb-5 heading"><span className="purple-text">Contact</span> Us</h2>

                    </div>
                    <div className="col-md-8 order-md-1 order-2">
                        <div className="card text-white h-100 shadow-sm custom-card"  style={{backgroundColor:"rgba(46,46,87,0.6)"}}>
                            <div className="card-body p-4">
                                <h5 className="card-title text-center fw-bold mb-4">
                                    Get in Touch with VersaCore
                                </h5>
                                <hr />
                                <div className="row">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="col-md-6 mb-3">
                                            <a href={info.link} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-white text-decoration-none">
                                                <i className={`${info.icon} me-2 fs-4`}></i>
                                                <h6 className="mb-0">{info.text}</h6>
                                            </a>
                                        </div>
                                    ))}
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