import React, { useEffect, useState } from "react";
import './Volunteer.css'
import AOS from 'aos';


const Volunteer = () => {
    const [showVolunteer, setShowVolunteer] = useState(false);
    const handleShowVolunteer = () => {
        setShowVolunteer(true)
    }
    const handleHideVolunteer = () => {
        setShowVolunteer(false)
    }

  
        useEffect(() => {
            AOS.init();
        }, []);

    return (
        <div>

            {
                // event button
                <div>
                    <button onClick={handleShowVolunteer} className="btn btn-warning donate">Volunteer</button>
                </div>
            }

            { showVolunteer &&
                // event box modal
                <div>
                    <section className="mainBackg" data-aos="zoom-out-left">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="modalInner">
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
                                                <button className="btn btn-warning btn-block" style={{marginTop: '20em'}} onClick={handleHideVolunteer}>Close</button>
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

        </div>
    )
}

export default Volunteer