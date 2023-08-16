import React from "react";
import PIC from "../../assets/profile.jpg"
import "./about.css"

function About() {
    return (
        <section className="about">
            <img className="about-picture" src={PIC} alt="atha"/>
            <h1>
                This is the about section
            </h1>
        </section>
    )
}

export default About;