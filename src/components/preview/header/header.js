import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import './header.css';

import Hamburger from "../hamburger";


const Header = () => {
    return (
        <header>
            <nav className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3">
                            <h1 className="header-title">Cozy House</h1>
                            <h2 className="header-subtitle">Shelter for pets in Boston</h2>
                        </div>
                        <div className="col-xl-5 offset-xl-5 col-lg-6 offset-lg-3">
                            <ul className="navigation-list">
                                <li>
                                    <Link
                                        to="second-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >About the shelter</Link>
                                </li>
                                <li>
                                    <Link
                                        to="third-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >Our pets</Link>
                                </li>
                                <li>
                                    <Link
                                        to="fourth-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >To help the shelter</Link>
                                </li>
                                <li>
                                    <Link
                                        to="my-footer"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="navigation-list__link"
                                    >Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Hamburger />
        </header>
    );
};

export default Header;
