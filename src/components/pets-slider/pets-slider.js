import React from "react";
import { connect } from 'react-redux';

import './third_section.css';

import PetsSliderContainer from "./slider";


const ThirdSection = ({ third_section_title }) => {
    return (
        <section className="third-section" id="third-section">
            <div className="main-title third-section_title">
                {third_section_title}
            </div>
            <PetsSliderContainer />
            <button className="main-btn third-section_btn">Get to know the rest</button>
        </section>
    );
};

const mapStateToProps = ({ third_section_title }) => {
    return { third_section_title };
};

export default connect(mapStateToProps)(ThirdSection);
