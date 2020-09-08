import React from "react";
import './first_section.css';
import Header from "./header";


const FirstSection = () => {
    return (
        <section className="first-section">
            <Header />
            <div className="my-container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="first-section__title">
                            Not only people
                            need a house
                        </div>
                        <div className="first-section__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
                            est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula
                            condimentum erat fringilla et.
                        </div>
                        <button className="main-btn first-section__btn">Make a friend</button>
                    </div>
                    <div className="col-6 offset-1">
                        <img src="/images/main_dog.png" alt="Dog" className="first-section__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
