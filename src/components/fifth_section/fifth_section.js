import React from "react";

import "./fifth_section.css";


const FifthSection = () => {
    return (
        <section className="fifth-section" id="fifth-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="fifth-section__img-boundary">
                            <img src="/images/Dog2.png"
                                 alt="Dog"
                                 className="fifth-section__img"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="main-title fifth-section_title-position">
                            In addition, you <br />
                            can make a donation
                        </div>
                        <div className="fifth-section__subtitle">
                            Name of the bank / Type of bank account
                        </div>
                        <div className="credit-card">
                            <img src="/icons/credit-card_(1).png"
                                 alt="credit-card"
                                 className="credit-card__img"/>
                            <div className="credit-card__title">
                                8380 2880 8028 8791 7435
                            </div>
                        </div>
                        <div className="fifth-section__desc">
                            Legal information and lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Maecenas a ipsum
                            at libero sagittis dignissim sed
                            ac diam. Praesent ultrices maximus tortor et vulputate.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
