import React from "react";
import "./help-list.css";


const HelpList = ({items}) => {
    return (
        <div className="fourth-section__content-container">
            {
                items.map((item, idx) => (
                    <div className="fourth-section__content" key={idx}>
                        <div className="fourth-section__img-boundary">
                            <img src={ item.src }
                                 alt={ item.alt }
                                 className="fourth-section__img"/>
                        </div>
                        <div className="fourth-section__title">{ item.title }</div>
                    </div>
                ))
            }
        </div>
    );
};

export default HelpList;
