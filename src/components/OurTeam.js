import React from "react";
import AbdullahRiaz from "../assets/AbdullahRiaz-cropped.jpg";
import Hamza from "../assets/Hamza Bin Abid-cropped.jpg";
import Mahnoor from "../assets/Mahnoor.jpeg";
import Fakham from "../assets/Fakham.jpeg";
import vish from "../assets/Vishma.jpeg";


const teamMembers = [
    {
        name: "Hamza Bin Abid",
        designation: "Project Manager",
        motto: "Leading with vision.",
        image: Hamza,
        linkedIn: "https://www.linkedin.com/in/hamza-bin-abid"
    },
    {
        name: "Abdullah Riaz",
        designation: "VP of Technology",
        motto: "Innovating for the future.",
        image: AbdullahRiaz,
        linkedIn: "https://www.linkedin.com/in/abdullah-riaz-5013aa327"
    },
    {
        name: "Wishma Khurram",
        designation: "CTO",
        motto: "Driving innovation through technology and leadership.",
        image: vish,
        linkedIn: "https://www.linkedin.com/in/wishma-khurram-47950b257/"
    },
    {
        name: "Fakham Chaudhary",
        designation: "Software Developer",
        motto: "Building solutions, one line of code at a time.",
        image: Fakham,
        linkedIn: "https://www.linkedin.com/in/fakham-chaudhary-859391240/"
    },
    {
        name: "Mahnoor Ejaz",
        designation: "Technical Lead",
        motto: "Empowering teams to deliver scalable and innovative solutions.",
        image: Mahnoor,
        linkedIn: "https://www.linkedin.com/in/mahnoorejazcs/"
    },
];

function OurTeam() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5 heading">Our <span className="purple-text">Team</span></h2>
            <div className="row justify-content-center" style={{ marginLeft: "20px" }}>
                {teamMembers.map((member, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <div
                                className="card text-white"
                                style={{
                                    width: "90%",
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                                }}
                            >
                                <img src={member.image} className="card-img-top" alt={member.name} style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body text-center" style={{ padding: "10px" }}>
                                    <h5 className="card-title" style={{ fontSize: "1.3rem" }}>{member.name}</h5>
                                    <p className="card-text" style={{ fontSize: "1rem" }}>{member.designation}</p>
                                    <p className="card-text" style={{ fontSize: "0.85rem" }}><em>{member.motto}</em></p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
