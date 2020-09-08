import React from "react";

import "./fourth_section.css";
import HelpList from "./help-list";

const first_column = [
    {
        src: "/icons/cat-food.png",
        alt: "cat-food",
        title: "Pet food"
    },
    {
        src: "/icons/ambulance.png",
        alt: "ambulance",
        title: "Transportation"
    },
    {
        src: "/icons/ball.png",
        alt: "Ball",
        title: "Toys"
    },
    {
        src: "/icons/bowl.png",
        alt: "bowl",
        title: "Bowls and cups"
    },
    {
        src: "/icons/shampoo.png",
        alt: "shampoo",
        title: "Shampoos"
    },
]

const second_column = [
    {
        src: "/icons/pills.png",
        alt: "syringe",
        title: "Medicines"
    },
    {
        src: "/icons/syringe.png",
        alt: "ambulance",
        title: "Transportation"
    },
    {
        src: "/icons/leash.png",
        alt: "leash",
        title: "Collars / leashes"
    },
    {
        src: "/icons/cat.png",
        alt: "cat",
        title: "Sleeping area"
    },
]

const FourthSection = () => {
    return (
        <section className="fourth-section" id="fourth-section">
            <div className="container">
                <div className="main-title fourth-section_title-position">Than you can help<br /> our shelter</div>
                <div className="row">
                    <div className="col-md-10 col-6 offset-md-1">
                        <HelpList items={first_column} />
                    </div>
                    <div className="col-md-8 offset-md-2 col-6 second-help-list">
                        <HelpList items={second_column} />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FourthSection;
