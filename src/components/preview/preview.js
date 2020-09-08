import React from "react";
import './preview.css';
import Header from "./header";


const Preview = () => {
    return (
        <section className="preview">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="preview__title">
                            Not only people
                            need a house
                        </div>
                        <div className="preview__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
                            est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula
                            condimentum erat fringilla et.
                        </div>
                        <button className="main-btn preview__btn">Make a friend</button>
                    </div>
                    <div className="col-6 offset-1">
                        <img src="/images/main_dog.png" alt="Dog" className="preview__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Preview;
