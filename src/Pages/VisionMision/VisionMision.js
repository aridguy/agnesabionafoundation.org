import * as React from 'react';
import Donate from "../../Assets/istockphoto-1212568100-170667a.jpg";
import Donate2 from "../../Assets/istockphoto-1250668894-612x612.jpg";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SideSocialIcons from '../../Components/SideSocialIcons';



const VisionMision = () => {

    return (
        <div>
            <Navbar />

            <section className="vision-mission">
                <div className="container">
                    <center>
                        <h1 className="v-mText">VISION & MISSION STATEMENTS</h1>
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
                                        "To give hope to the hopeless indigent women and vulnerable girls in developing nations."
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
                                        "Our mission is to provide support and mentoring to vulnerable girls
                                        and indigent women in developing nations who are marginalized or have
                                        limited access to resources needed to unlock their full potentials."
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
            <SideSocialIcons />
            <Footer />

        </div>
    )
}

export default VisionMision