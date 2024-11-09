import React from "react";
import { VscChip } from "react-icons/vsc";
import { DiWordpress } from "react-icons/di";
import { GrPinterest } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { LuCircuitBoard } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuFigma } from "react-icons/lu";
import { LuPalette } from "react-icons/lu";
import { TfiDesktop } from "react-icons/tfi";
import { TfiTablet } from "react-icons/tfi";
import { PiBatteryFull } from "react-icons/pi";
import { HiMiniBolt } from "react-icons/hi2";
import { HiMiniCog } from "react-icons/hi2";
import { HiMiniDocumentCheck } from "react-icons/hi2";


const services = [
    {
        category: "Software Based Services",
        items: [
            { title: "Graphic Designing", icon: <LuPalette /> },
            { title: "UI/UX Designing", icon: <TfiDesktop /> },
            { title: "Web Development (MERN, LARAVEL)", icon: <TfiTablet /> },
            { title: "Mobile App Development (Flutter , React-native)", icon: <TfiTablet /> },
            { title: "Wordpress / Wix Development", icon: <DiWordpress /> },
            { title: "Front-End Development (React, Blade, HTML, CSS)", icon: <LuFigma /> },
            { title: "AI based Automation & Data Analysis", icon: <LuBrainCircuit /> },
            { title: "Software Testing", icon: <HiMiniDocumentCheck /> },
            { title: "Pinterest Marketing", icon: <GrPinterest /> },
        ]
    },
    {
        category: "Electrical Hardware Services",
        items: [
            { title: "Custom PCB Design", icon: <LuCircuitBoard /> },
            { title: "Firmware Designing", icon: <LuCircuitBoard /> },
            {title: "RISC-V", icon: <LuCpu />},
            { title: "FPGAs", icon: <VscChip /> },
            { title: "Chip Design and Verification", icon: <VscChip /> },
            { title: "Battery Management System", icon: <PiBatteryFull /> },
            { title: "Power Grid Design Analysis", icon: "🔧" },
            { title: "AC/DC Power Converters", icon: <HiMiniBolt /> },
            { title: "Wireless Communication", icon: "📡" },
            { title: "Electrical Hardware", icon: "💡" },
            { title: "R&D", icon: "📶" },
            { title: "Product Development", icon: <HiMiniCog /> },
        ]
    }
];

function OurServices() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5 heading">Our <span className="purple-text">Services</span></h2>
                <div className="row g-4">
                    {services.map((serviceCategory, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card text-white h-100 shadow-sm custom-card" style={{backgroundColor:"rgba(46,46,87,0.3)", borderRadius:"20px"}}>
                                <div className="card-body p-4">
                                    <h5 className="card-title fs-4 text-center fw-bold mb-4">
                                        {serviceCategory.category}
                                    </h5>
                                    <hr/>
                                    {serviceCategory.items.map((item, idx) => (
                                        <div key={idx} className="d-flex align-items-center mb-3">
                                            <span className="me-2 fs-4">{item.icon}</span>
                                            <h6 className="mb-0">{item.title}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurServices;