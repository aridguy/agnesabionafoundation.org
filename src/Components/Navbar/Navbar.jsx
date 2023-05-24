import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../Assets/Logo1.png";

const Navbar = ({ openModal }) => {
    // FOR SECTION NAVIGATIONS

    return (
        <div>

            <div>
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
                    <div className="nav-links navigationbar">
                        <li><Link className="getWhiteColor" to='/'>Home</Link></li>
                        <li><Link className="getWhiteColor" to='/about'>About Us</Link></li>
                        <li><Link className="getWhiteColor" to='/gallery'>Our Gallery</Link></li>
                        <li><Link className="getWhiteColor" to='/whatwedo'>What We Do</Link></li>
                        <li><Link className="getWhiteColor" to='/visionmision'>Vision/Mission</Link></li>
                        <li><Link className="getWhiteColor" to='/visionmision'>Contact us</Link></li>
                        <li>
                            <button className="btn btn-warning donate">Volunteer</button>
                        </li>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar