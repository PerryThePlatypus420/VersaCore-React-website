import React from "react";
import './OurServices.css'; // Import the CSS file

const services = [
    {
        category: "Software Based Services",
        items: [
            { title: "Graphic Designing", icon: "🎨" },
            { title: "GUI Designing", icon: "🖥️" },
            { title: "AI based Automation & Data Analysis", icon: "🤖" }
        ]
    },
    {
        category: "Mobile & Web Services",
        items: [
            { title: "UI/UX Designing", icon: "📱" },
            { title: "Amazon Web Services", icon: "☁️" },
            { title: "Database (MySQL & NoSQL)", icon: "💾" },
            { title: "Web Applications (Node.js)", icon: "🌐" },
            { title: "React.js & Laravel", icon: "⚛️" },
            { title: "Customized AOSP (Mobile, Wearable & Car Kit)", icon: "📲" }
        ]
    },
    {
        category: "Electrical Hardware Services",
        items: [
            { title: "Custom PCB Design", icon: "🔌" },
            { title: "Electro-Mechanical System", icon: "⚙️" },
            { title: "Battery Management System", icon: "🔋" },
            { title: "Power Grid Design Analysis", icon: "🔧" },
            { title: "AC/DC Power Converters", icon: "🔄" },
            { title: "Wireless Communication", icon: "📡" },
            { title: "Electrical Hardware", icon: "💡" },
            { title: "IoT Hardware", icon: "📶" }
        ]
    }
];

function OurServices() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5" style={{ fontWeight: "bold", fontSize: "2rem" }}>Our Services</h2>
                <div className="row g-4">
                    {services.map((serviceCategory, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card text-white h-100 shadow-sm custom-card">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-center fw-bold mb-4">
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
