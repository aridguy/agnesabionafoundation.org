import React, { useState } from "react";
import './Teams.css'
import Anthony from '../../Assets/Teams/Taiwo.jpg'
import Samuel from '../../Assets/Teams/samuel.jpg'
import Janet from '../../Assets/Teams/janet.jpg'
import Tamilore from '../../Assets/Teams/tamilore.jpg'
import Ayomide from '../../Assets/Teams/ayomide.jpg'
import Omoniyi from '../../Assets/Teams/omoniyi.jpg'

const Teams = () => {
    const [setUseTouch] = useState("this.classList.toggle('hover');")
    return (
        <div>
            <section id="team" className="jj pb-5">
                <div className="container">
                    <h5 className="section-title h1">OUR TEAM</h5>
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" >
                                <div className="mainflip flip-0">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={Anthony} alt="card " /></p>
                                                <h4 className="card-title">Taiwo Anthony Abode
                                                </h4>
                                                <p className="card-text">Chartered Accountants of Nigeria (ICAN), B.Sc. Economics, Masters in Business Administration (MBA)</p>
                                                { /*<a href="/"><i className="fa fa-plus"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Anthony</h4>
                                                <p className="card-text">
                                                    Associate member of the Chartered Institute of Bankers on Nigeria (ACIB),
                                                    Associate member of the Chartered Institute of Taxation of Nigeria (ACIB),
                                                    M.Sc. in Economics. Taiwo has worked in different sectors of the economy.

                                                </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart={setUseTouch}>
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={Samuel} alt="card iage" /></p>
                                                <h4 className="card-title">Samuel Olowoselu
                                                </h4>
                                                <p className="card-text">Mechanical Engineering graduate from Yaba College of Technology</p>
                                                { /*<a href="/"><i className="fa fa-plus"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Samuel</h4>
                                                <p className="card-text">With almost four years of experience as an HR Executive,
                                                    his focus has been on recruitment, payroll management, and primarily,
                                                    learning and development.
                                                    Samuel Olowoselu is passionate about public service and dedicated to creating a better future for his community and beyond.
                                                </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={Janet} alt="card imae" /></p>
                                                <h4 className="card-title">Sofolahan Janet Oluranti
                                                </h4>
                                                <p className="card-text"> A final year student of English Literature in the prestigious Lagos State University.</p>
                                                { /*<a href="/"><i className="fa fa-plus"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Janet</h4>
                                                <p className="card-text">A final year student of English Literature in the
                                                    prestigious Lagos State University. With the knowledge of editing and
                                                    proofreading of documents, my aim is to reshape the complexities of
                                                    different writings across all board.
                                                </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={Omoniyi} alt="card " /></p>
                                                <h4 className="card-title">Omoniyi Anita Simisola
                                                </h4>
                                                <p className="card-text">An Educationist and Communication specialist.</p>
                                                { /*<a href="/"><i className="fa fa-plus"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Anita</h4>
                                                <p className="card-text">A double-degree graduate from the University of Lagos
                                                    (Bachelor of Arts and Education) with a 6 months internship experience in the
                                                    field of teaching, a Facilitator at the Adult Literacy School.
                                                    An effective communicator and a resourceful Facilitator,
                                                </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={Ayomide} alt="card" /></p>
                                                <h4 className="card-title">Fagbuaro Ayomide Hope
                                                </h4>
                                                <p className="card-text">Fagbuaro Ayomide Hope is an
                                                    undergraduate of the Federal University
                                                    of Oye-Ekiti currently studying Linguistics and Languages (French)
                                                </p>
                                                { /*<a href="/"><i className="fa fa-plus"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Hope</h4>
                                                <p className="card-text">She is a songwriter,a baker and a volunteer of the Agnes Abiona Foundation.
                                                    She is passionate about God and humanity particularly with teenagers and young adults development
                                                    and growth as individuals and believers.
                                                </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={Tamilore} alt="card imae" /></p>
                                                <h4 className="card-title">Tamilore Bakare
                                                </h4>
                                                <p className="card-text">An undergraduate student of University of Lagos currently studying Physiotherapy. <br />
                                                A Certified first aider</p>
                                                { /*<a href="/"><i className="fa fa-plus"></i></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Tamilore
                                                </h4>
                                                <p className="card-text">A Certified First Aider  and a member of the Nigerian Red Cross Society.
                                                    She is passionate about public service particularly in the aspect of health,
                                                    commmunity development and environmental consciousness. </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="/">
                                                            <i className="fab fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Teams