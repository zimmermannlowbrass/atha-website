import React from "react";
import PIC from "../../assets/profile.jpg"
import "./about.css"

function About() {
    return (
        <section className="about">
            <img className="about-picture" src={PIC} alt="atha"/>
            <div className="meet-the-artist">
                <h1>
                    Meet the Artist
                </h1>
                <p>Atha Grendahl currently lives in Tucson, Arizona with her husband and their two dogs.</p>
            </div>
        </section>
    )
}

export default About;