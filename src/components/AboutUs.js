import React from "react";

function AboutUs() {
    return (
        <section className="py-5 mt-5">
            <div className="container" style={{ paddingLeft: "6px" }}> {/* Adjust the left margin */}
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-3 text-lg-end text-center">
                    <h2 className="text-center mb-5 heading"><span className="purple-text">About</span> Us</h2>
                    </div>
                    <div className="col-lg-8">
                        <p className="fs-5 mt-3">
                            VersaCore is a dynamic technology company dedicated to providing
                            innovative solutions across diverse industries. Specializing in user-defined software automation,
                            hardware application design, and comprehensive mobile and web services,
                            we empower businesses with cutting-edge technology.
                            <br />
                            <br />
                            At VersaCore, we adhere to the highest industry standards, ensuring that our solutions meet
                            stringent benchmarks for quality, safety, and reliability. In addition to web development,
                            we focus on delivering advanced automation solutions that streamline operations, increase efficiency,
                            and minimize manual effort.
                            <br />
                            <br />
                            VersaCore is committed to timely project delivery while maintaining an unwavering dedication
                            to customer satisfaction. We serve clients on both national and international fronts,
                            gaining recognition for our high standards and reliability in competitive markets.
                            We also pride ourselves on fostering an inclusive and supportive work environment where
                            every employee is valued and respected, ensuring a culture of diversity, equality,
                            and collaboration that fuels innovation and success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
