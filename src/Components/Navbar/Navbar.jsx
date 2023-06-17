import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../Assets/Logo1.png";
import Volunteer from "../../Pages/Volunteer/Volunteer";
// import Volunteer from "../../Pages/Volunteer/Volunteer";


const Navbar = () => {
    // FOR SECTION NAVIGATIONS

    // performing some logic to navigate to the voluntyeer section
    // const navigate = useNavigate();
    // const GotoVolunteer = () => navigate('/Volunteer')

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
                        <li><Volunteer /></li>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar