import * as React from 'react';
import Founder from "../../Assets/sect2/founder2.png";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SideSocialIcons from '../../Components/SideSocialIcons';
import "./About.css"


const About = () => {

    return (
        <div>
            <Navbar />
            
            <section className="about-section">
                <div className="container mt-5 animated fadeInRight" data-wow-offset="300" data-wow-duration="3s">
                    <div className="row mt-5">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column mt-5">
                                <div className="sec-title">
                                    <span className="title text-danger">About Us</span>
                                    <h2>WHY EMPOWERMENT OF GIRLS AND YOUNG WOMEN?</h2>
                                </div>
                                <div className="text">
                                    AGNES ABIONA FOUNDATION is a registered non-governmental non-profit
                                    charitable organization based in Nigeria that provide aid for underprivileged
                                    girls and young women through development of empowerment program in
                                    order to fulfil their God given potential.
                                </div>
                                <div className="text">
                                    In Nigeria, the United Nations posits thatwomen and girls make up more than half
                                    of population but still do not have sufficient access nor opportunities to realise
                                    their full potential as agents of change who can provide solutions to most of the country’s
                                    most pressing issues. In a bid to address the empowerment for the poor resource and
                                    underprivileged girls and young women,AGNES ABIONA FOUNDATION has broken down resource
                                    needed for the empowerment into categories.
                                </div>
                                <div className="btn-box">
                                    <a href="/" className="theme-btn btn-style-one">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="author-desc">
                                    <h2>Agnes Abiona</h2>
                                    <span>Founder</span>
                                </div>
                                <figure className="image-1">
                                    <a href="/" className="lightbox-image" data-fancybox="images">
                                        <img width='100%' src={Founder} alt="bfg" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="sec-title">
                        <h2>AAF</h2>
                    </div>
                    <div className="text">
                        These include human capital; education, training,
                        vocational skills, financial capital; grants and financial assistance, social capital;
                        networking and mentoring and physical capital; tools and machine. AAF will use available
                        resources within the foundation to empower women as a strategy that will focus on
                        redirecting and reengineering the economic status of the women with a view of tackling
                        poverty, violence and unemployment.  For effectiveness of the program AAF put certain
                        indicators and methods in place to target the needs of different beneficiaries such
                        as educational supports, vocational skill acquisitions/training, capacity building,
                        provision of grants, supply of empowerment materials and start
                        up support for women and girls.
                    </div>

                </div>
            </section>

            <SideSocialIcons />
            <Footer />
        </div>
    )
}

export default About