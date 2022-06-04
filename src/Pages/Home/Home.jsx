import React, { useState } from "react";

// import { Link } from "react-router-dom";
import Logo1 from "../../Assets/Logo1.png";
import AboutImg from "../../Assets/aboutImage.jpg";
import diamond from "../../Assets/helpIcon.gif";
import Donate from "../../Assets/istockphoto-1212568100-170667a.jpg";
import Donate2 from "../../Assets/istockphoto-1250668894-612x612.jpg";

import Modal from 'react-modal';
// import Carousel from 'react-bootstrap/Carousel';





import "./Home.css";


const Home = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            width: '50%',
            height: '60%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
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
                        <li id="#aboutUs">About</li>
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
                                    <button className="btn btn-warning donate-today"><r className="fa fa-plus"></r> Donate Today!</button>
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

            <section className="contact-bkg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="contact-sideA">
                                <h2 className="sideAtext">We’d love to hear from you!
                                    Give us call, send us a message?
                                </h2>
                            </div>
                            <div className="conts">
                                <b>Address</b> <br />
                                <i>5 Adeyemi Alao Street, Community Oke-Ira, Ogba Lagos</i>
                            </div>
                            <div className="conts">
                                <b>Email Us</b> <br />
                                <i>agnesabionafoundation@gmail.com</i>
                            </div>
                            <div className="conts">
                                <b>Phone Number</b><br />
                                <i>+234 80 23105167, +234 80 23105167</i><br />
                            </div>
                            <div className="socialMedia conts">
                                <p><b>FIND US ON SOCIAL MEDIA</b></p>
                                <span className="fa fa-facebook"></span>
                                <o className="fa fa-twitter"></o>
                                <o className="fa fa-youtube"></o>
                                <o className="fa fa-whatsapp"></o>
                            </div>
                            <button onClick={openModal} className="btn btn-warning mt-5 text-white">Contact Us</button>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-sideA">

                            </div>
                            <div>
                                <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.000480581726!2d3.3471213647713713!3d6.6468599451937695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0ab57faff%3A0x8728d5c569c83028!2sAGNES%20ABIONA%20FOUNDATION!5e0!3m2!1sen!2sng!4v1654099218173!5m2!1sen!2sng" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="theMap"></iframe>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Leave Us A Message.</h2>
                <button className="closeModalss" onClick={closeModal}>X</button>
                <div>
                    <div className="container">
                        <div className="row rowModal">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <p align="justify">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>

            </Modal>



            <div class="footer container-fluid p-5 bg-dark text-white">
                <div className="row">
                    <div className="col-md-3">
                        <b>OUR COMPANY</b>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            olor sit amet, consectetur adipisicing elit, sed do eiusmodolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod
                        </p>
                    </div>
                    <div className="col-md-2">
                        <b>GENERAL</b>
                        <p>License Terms</p>
                        <p>privacy Policy</p>
                        <p>Terms & conditions</p>
                        <p>Refund Policy</p>
                    </div>
                    <div className="col-md-2">
                        <b>EXPLORE</b>
                        <p>Galery</p>
                        <p>Events</p>
                        <p>Nonprofit</p>

                    </div>
                    <div className="col-md-4">
                    <b>NEWSLETTER</b>
                        <form>
                            <div className="newsletters">
                                <input className="form-control nletter" type="email" name="email" placeholder="Enter your emails" />
                                <button className="btn btn-warning nLetterBtn">SUBMIT <i class="fa fa-send-o"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>



        </div>


    );
}

export default Home;