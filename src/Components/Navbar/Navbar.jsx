import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "../../Assets/Logo1.png";
// import Volunteer from "../../Pages/Volunteer/Volunteer";


const Navbar = () => {
    const [showContact, setShowContact] = useState(false);
    const handleShowContact = () => {
        setShowContact(true)
    }
    const handleHideContact = () => {
        setShowContact(false)
    }
    // FOR SECTION NAVIGATIONS

    // performing some logic to navigate to the voluntyeer section
    const navigate = useNavigate();
    const GotoVolunteer = () => navigate('/Volunteer')

    return (
        <div>
       

        { showContact &&
            // event box modal
            <div>
                <section className="mainBackg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="modalInner animated fadeIn">
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-10">
                                            <div className="mt-5">
                                                <h4>All Coming events will go here</h4>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </section>
            </div>
        }
            <div>
                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">
                            <img className="brand" src={Logo1} alt="logo" />
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="nav-links navigationbar">
                        <li><Link className="getWhiteColor" to='/'>Home</Link></li>
                        <li><Link className="getWhiteColor" to='/about'>About Us</Link></li>
                        <li><Link className="getWhiteColor" to='/gallery'>Our Gallery</Link></li>
                        <li><Link className="getWhiteColor" to='/whatwedo'>What We Do</Link></li>
                        <li><Link className="getWhiteColor" to='/visionmision'>Vision/Mission</Link></li>
                        <li><Link className="getWhiteColor" to='/contact'>Contact us</Link></li>
                        <li><button onClick={GotoVolunteer} className="btn btn-warning donate">Volunteer</button></li>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar