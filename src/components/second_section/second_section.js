import React from "react";
import "./second_section.css";


const SecondSection = () => {
    return (
        <section className="second-section" id="second-section">
            <div className="my-container">
                <div className="row">
                    <div className="col-md-5 offset-md-1 col-sm-12">
                        <div className="img-block">
                            <img src="/images/Pets.png" alt="Pets" className="second-section__img "/>
                        </div>
                    </div>
                    <div className="col-md-5 offset-1">
                        <div className="main-title second-section_indent">
                            About the shelter
                            “Cozy House”
                        </div>
                        <div className="second-section__desc second-section_indent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce efficitur blandit condimentum. Proin accumsan lorem
                            vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.
                            <br /><br />
                            Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh,
                            ac ornare felis justo nec leo. Praesent mattis nibh quis
                            ultrices pharetra. Morbi tempus at ante sit amet tristique.
                            Maecenas dignissim justo orci, in laoreet urna dapibus nec.
                            Praesent quis tortor faucibus, tristique ante vitae, dignissim
                            lorem. Sed at ligula et sem mattis gravida ac vel erat.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
