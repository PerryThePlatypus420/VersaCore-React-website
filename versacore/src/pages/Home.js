import React from "react";
import BackImg from "../components/Back-img";
import OurMission from "../components/OurMission";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

function Home() {
    return (
        <div className="overflow-hidden">
            <div id="backImg">
                <BackImg />
            </div>
            <div id="ourMission">
                <OurMission />
            </div>
            <div id="ourServices">
                <OurServices />
            </div>
            <div id="aboutUs">
                <AboutUs />
            </div>
            <div id="contactUs">
                <ContactUs />
            </div>
        </div>
    );
}

export default Home;
