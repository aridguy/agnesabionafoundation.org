import React, { useState } from "react";
import './Event.css'

const Events = () => {
    const [showEvents, setShowEvents] = useState(false);
    const handleShowEvents = () => {
        setShowEvents(true)
    }
    const handleHideEvents = () => {
        setShowEvents(false)
    }



    return (
        <div>

            {
                // event button
                <div>
                    <button onClick={handleShowEvents} className="floating">See<br />Events</button>
                </div>
            }

            { showEvents &&
                // event box modal
                <div>
                    <section className="mainBackg">
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
                                                <button className="btn btn-warning btn-block" style={{marginTop: '20em'}} onClick={handleHideEvents}>Close</button>
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

export default Events