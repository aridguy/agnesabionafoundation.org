import React from "react";

// import { Link } from "react-router-dom";
import Logo1 from "../../Assets/Logo1.png";
import AboutImg from "../../Assets/aboutImage.jpg";
import diamond from "../../Assets/helpIcon.gif";

import "./Home.css";

const Home = () => {
    const goAbout = () => {

    }
    return (
        <div>

            <header>
                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">
                            <img className="brand" src={Logo1} alt="logo" />
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <li>Home</li>
                        <li onClick={goAbout} id="#aboutUs">About</li>
                        <li>What We Do</li>
                        <li>Vision/Mission</li>
                        <li>Contact Us</li>
                        <li>Faq</li>
                        <li>
                            <button className="btn btn-warning donate">Donate</button>
                        </li>

                    </div>
                </div>
            </header>

            <main>
            
                <section className="landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="main-head-contents w3-animate-bottom">
                                    <h1 className="hText">Agnes Abiona Foundation</h1>
                                    <h2 className="st2">There Is One Relation Above All</h2>
                                    <h2><b className="s-t">Relation of Humanity</b></h2>
                                    <div className="lcare"><p className="lcare-text"></p></div>
                                    <button className="btn btn-warning donate">Donate</button>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <p className="main-head-contents">


                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            


            <section id="aboutUs" className="about-sect">
                <div className="container w3-animate-left">
                    <div className="row row1">
                        <div className="col-md-12">
                            <div>
                                <center>
                                    <h1 className="dabtTitle text-warning">ABOUT US</h1>
                                    <hr className="small-line" />
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contentsAbout1>">
                                <div>
                                    <img className="img-responsive" width="100%" src={AboutImg} alt="abt" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 pad-down">
                            <div className="contentsAbout2">
                                <div>
                                    <h1 className="abtHead">THE AGNES ABIONA FOUNDATION</h1>
                                    <p id="txtAbt">Charite is the world’s #1 fundraising site forcharitable causes. Raise money for over 1.5 million charities.</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <button className="btn btn-warning learn">Learn More About Us</button>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row pad2">

                        <div className="col-md-6">
                            <div className="contentsAbout2">
                                <div>
                                    <h1 className="abtHead">WE ARE ALL ABOUT GIVING, SUPPORTING AND HELPING</h1>
                                    <p id="txtAbt">Charite is the world’s #1 fundraising site forcharitable causes. Raise money for over 1.5 million charities.</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <button className="btn btn-warning learn2">Learn More About Us</button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contentsAbout1>">
                                <div>
                                    <img className="img-responsive" width="100%" src={AboutImg} alt="abt" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="section3">
                <div className="container">
                    <center>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="side1 backgs">
                                    <img src="https://img.icons8.com/glyph-neue/64/000000/donate.png" alt="iconic" />
                                    <p>
                                        <b>Make Donations</b>
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
                                        <p></p>
                                        <i>Raise Fund Now</i>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="side1 backgs">
                                    <img src="https://img.icons8.com/glyph-neue/64/000000/cash-in-hand.png" alt="icon" />
                                    <p>
                                        <b>Fundraising</b>
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
                                        <p></p>
                                        <i>Raise Fund Now</i>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="side1 backgs">
                                    <img src="https://img.icons8.com/glyph-neue/64/000000/welfare.png" alt="icon" />
                                    <p>
                                        <b>Become a Volunteer</b>
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br />
                                        <p></p>
                                        <i>Raise Fund Now</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </section>

            <section className="help">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 w3-animate-bottom">
                            <center>
                                <img className="diamonds" src={diamond} alt="diamond" />
                            </center>
                            <div>
                                <blockquote>We can’t help everyone,
                                    <br /> but everyone can help <br />someone.
                                </blockquote>
                            </div>
                            <center>
                                <span>
                                    <button className="btn btn-warning donate-today">Donate Today!</button>
                                </span>
                            </center>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>









        </div>
    );
}

export default Home;