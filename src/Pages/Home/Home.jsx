import React, { useEffect, useState } from "react";
// import diamond from "../../Assets/helpIcon.gif";
import SideSocialIcons from "../../Components/SideSocialIcons";
import Modal from 'react-modal';
import "./Home.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

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
    const openModal = () => setIsOpen(true);
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        if (subtitle) {
            subtitle.style.color = '#f00';
        }
    };
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <SideSocialIcons />
            <ToastContainer />

            <Navbar />

            <main>
                <section className="landing">
                    <div className="container wow slideInLeft" data-wow-delay="0.1s">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <center>
                                    <div className="main-head-contents w3-animate-bottom">
                                        <h1 className="hText">Agnes Abiona Foundation</h1>
                                        <h2 className="st2">There Is One Relation Above All</h2>
                                        <h2>
                                            <b className="s-t">Relation of Humanity</b>
                                        </h2>
                                        <div className="lcare">
                                            <p className="lcare-text"></p>
                                        </div>
                                        <button className="btn btn-warning donate">Donate</button>
                                    </div>
                                </center>
                            </div>
                            <div className="col-md-2">
                                <p className="main-head-contents"></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {
                // just a section one 1

                <section className="bg-muted mb-5 pt-5">
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <center><h2 className="w-700">Advancing Peace & Global Well-Being of Women Accross Nigeria</h2></center>
                                <small id="theSectAboutTxt">AGNES ABIONA FOUNDATION is a registered non-governmental non-profit charitable organization
                                    based in Nigeria that provide aid for underprivileged girls and young women through development
                                    of empowerment program in order to fulfil their God given potential.
                                </small>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                    </div>
                </section>
            }
            {
                // just a section one 1
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h3 className="text-center">We Provide</h3>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3 mt-2">
                            <div className="guardianBox g1">
                                <h2>Educational <br /> Support</h2>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2">
                            <div className="guardianBox g2">
                                <h2>Vocational Skill <br />& Training</h2>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2">
                            <div className="guardianBox g3">
                            <h2>Mentoring</h2>
                            </div>
                        </div>
                        <div className="col-md-3 mt-2">
                            <div className="guardianBox g4">
                            <h2>Leadership <br /> Training</h2>
                            </div>
                        </div>
                    </div>
                </div>

            }


            <section className="whySect pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="whyDiv">
                                <h1
                                    id="whyHead"
                                    data-aos="fade-up">
                                    WHY EMPOWERMENT OF GIRLS AND YOUNG WOMEN?
                                </h1>
                                <p id="whyText">
                                    <i data-aos="fade-up">
                                        "In Nigeria, the United Nations posits that women and girls
                                        make up more than half of the population but still do not
                                        have sufficient access or opportunities to realize their
                                        full potentials as agents of change who can provide
                                        solutions to most of the country’s most pressing issues."
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-bkg" id="contact">
                <div className="container">
                    <div className="row wow fadeInRight animated">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="contact-sideA">
                                <h2 className="sideAtext">
                                    We’d love to hear from you!
                                    Give us a call, send us a message?
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
                                <b>Phone Number</b>
                                <br />
                                <i>+2348063306463, +2348103221622</i>
                                <br />
                            </div>
                            <div className="socialMedia conts">
                                <p>
                                    <b>FIND US ON SOCIAL MEDIA</b>
                                </p>
                                <span className="fa fa-facebook"></span>
                                <span className="fa fa-twitter mx-3"></span>
                                <span className="fa fa-youtube mx-3"></span>
                                <span className="fa fa-whatsapp mx-3"></span>
                            </div>
                            <button
                                onClick={openModal}
                                className="btn btn-warning mt-5 text-white"
                            >
                                Contact Us
                            </button>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-sideA"></div>
                            <div>
                                <iframe
                                    className="maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.000480581726!2d3.3471213647713713!3d6.6468599451937695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0ab57faff%3A0x8728d5c569c83028!2sAGNES%20ABIONA%20FOUNDATION!5e0!3m2!1sen!2sng!4v1654099218173!5m2!1sen!2sng"
                                    width="100%"
                                    height="450"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="theMap"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                        Leave Us A Message.
                    </h2>
                    <button className="closeModalss" onClick={closeModal}>
                        X
                    </button>
                    <div>
                        <div>
                            <div className="row rowModal">
                                <div className="col-md-12">
                                    <div className="formModal">
                                        <form>
                                            <p>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Name here"
                                                    className="form-control"
                                                />
                                            </p>
                                            <p>
                                                <input
                                                    required
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email Address Here"
                                                    className="form-control"
                                                />
                                            </p>
                                            <p>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="leave your message here"
                                                ></textarea>
                                            </p>

                                            <button className="btn btn-block btn-warning">
                                                Send Now
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
