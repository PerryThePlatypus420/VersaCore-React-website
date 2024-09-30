import React from "react";
import AbdullahRiaz from "../assets/AbdullahRiaz-cropped.jpg";
import Hamza from "../assets/Hamza Bin Abid-cropped.jpg";

const teamMembers = [
    {
        name: "Hamza Bin Abid",
        designation: "Project Manager",
        motto: "Leading with vision.",
        image: Hamza
    },
    {
        name: "Abdullah Riaz",
        designation: "VP of Technology",
        motto: "Innovating for the future.",
        image: AbdullahRiaz
    },
    {
        name: "John Smith",
        designation: "COO",
        motto: "Operations for excellence.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Emily Johnson",
        designation: "CFO",
        motto: "Financial integrity.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Michael Brown",
        designation: "CMO",
        motto: "Marketing with a purpose.",
        image: "https://via.placeholder.com/150"
    },
];

function OurTeam() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Our Team</h2>
            <div className="row justify-content-center" style={{marginLeft:"20px"}}>
                {teamMembers.map((member, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card text-white" style={{ width: "90%", backgroundColor:"rgba(0,0,0,0.5)"}}>
                            <img src={member.image} className="card-img-top" alt={member.name} style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body text-center" style={{ padding: "10px" }}>
                                <h5 className="card-title" style={{ fontSize: "1.3rem" }}>{member.name}</h5>
                                <p className="card-text" style={{ fontSize: "1rem" }}>{member.designation}</p>
                                <p className="card-text" style={{ fontSize: "0.85rem" }}><em>{member.motto}</em></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
