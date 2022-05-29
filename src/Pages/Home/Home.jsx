import React from "react";

// import { Link } from "react-router-dom";
import Logo1 from "../../Assets/Logo1.png";
import AboutImg from "../../Assets/aboutImage.jpg";
import diamond from "../../Assets/helpIcon.gif";
import Donate from "../../Assets/istockphoto-1212568100-170667a.jpg";
import Donate2 from "../../Assets/istockphoto-1250668894-612x612.jpg";

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
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <center>
                                    <div className="main-head-contents w3-animate-bottom">
                                        <h1 className="hText">Agnes Abiona Foundation</h1>
                                        <h2 className="st2">There Is One Relation Above All</h2>
                                        <h2><b className="s-t">Relation of Humanity</b></h2>
                                        <div className="lcare"><p className="lcare-text"></p></div>
                                        <button className="btn btn-warning donate">Donate</button>

                                    </div>
                                </center>
                            </div>
                            <div className="col-md-2">
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
                        <h1 id="whatwedo">WHAT WE DO</h1>
                        <hr className="small-line" />
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

            <section className="vision-mission">
                <div className="container">
                    <center>
                        <h1 className="v-mText">VISION & MISSION <br /> STATEMENTS</h1>
                        <hr className="small-line" />
                    </center>
                    <div className="row drop-row w3-animate-bottom">
                        <div className="col-md-8">
                            <div className="vmContents">
                                <img width="100%" src={Donate} alt="donates" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vision-text">
                                <h2>VISION</h2>
                                <hr className="small-line" />
                                <i id="vis-texts">
                                    <cite>
                                        "To bring hope to the hopeless and indigent women and children
                                        in development nations"
                                    </cite>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="row rowofmission">
                        <div className="col-md-4">
                            <div className="vision-text">
                                <h2>MISSION</h2>
                                <hr className="small-line" />
                                <i id="vis-texts">
                                    <cite>
                                        "Our mission is to provide support and mentoring for under
                                        previleged girls and vulnerable women in
                                        developing nations, who are marginalized or have
                                        limited access to resources needed to unclock their full potentials"
                                    </cite>
                                </i>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="vmContents">
                                <img width="100%" src={Donate2} alt="donates" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-bkg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="contact-sideA">
                                <h2>We’d love to hear from you!
                                    Give us call, send us a message?</h2>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-sideB">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.9995298252666!2d3.3471214!3d6.6469779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0ab57faff%3A0x8728d5c569c83028!2sAGNES%20ABIONA%20FOUNDATION!5e0!3m2!1sen!2sng!4v1653858661963!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

            </section>

            <section className="faq-section">
                <div className="container faq-place">
                    <center>
                        <h1 className="faqhText">FREQUENTLY ASK QUESTIONS</h1>
                        <hr className="small-line" />
                    </center>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 top-row-col-six">
                            <p>
                                Our Frequently ASked Question Page explain to you
                                in details most recent and relevant quetions asked
                                by visitors. feel free to check all questions and
                                posible answers for every questions. your contributions
                                also will go a long way ask you kindly chat with our
                                representatives VIA the live chat ...your questions
                                will be added to our frequently asked questions
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>

                    <div className="row rowFaq">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <center>
                                <h2 className="h2-heading">Frequently Asked Questions FAQ</h2>
                                <p>Check out the answers below to see if it has been previously answered.</p>
                            </center>

                            <div className="faq-contents">
                                <div className="faq1">
                                    <h3 className="faq1htext">THIS IS QUESTION ONE</h3>
                                    <div className="faq1ans">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div className="faq2">
                                    <h3 className="faq1htext">THIS IS QUESTION TWO</h3>
                                    <div className="faq1ans">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                                <div className="faq3">
                                    <h3 className="faq1htext">THIS IS QUESTION THREE</h3>
                                    <div className="faq1ans">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-2"></div>
                    </div>

                </div>
            </section>












        </div>
    );
}

export default Home;