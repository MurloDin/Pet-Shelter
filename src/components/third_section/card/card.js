import React from "react";
import "./card.css";


const PetCard = ({ pet: {urlPhoto, name},
                     onShow }) => {
    return (
        <div className="pet-card">
            <div className="img-boundary">
                <img src={urlPhoto} alt="pet" className="pet-card__img"/>
            </div>
            <div className="pet-card__title">{ name }</div>
            <button className="main-btn pet-card__btn"
                    onClick={onShow}>Learn More</button>
        </div>
    );
};

export default PetCard;
