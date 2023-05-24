import React from "react";
import { ToastContainer, toast } from 'react-toastify';



const Footer = () => {
    const NewsletterVerify = () => {
        let nlForm = document.getElementById("nletterForm").value;
        toast(nlForm);
    }
    return (
        <div>
            <ToastContainer />
            <div class="footer container-fluid p-5 text-white main-foot-wrap">
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
                                <input id="nletterForm" required className="form-control nletter" type="email" name="email" placeholder="Enter your emails" />
                                <button onClick={NewsletterVerify} className="btn btn-warning nLetterBtn">SUBMIT <i class="fa fa-send-o"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <section className="footDark">
                <div className="container-fluid darkBg">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="text-white pt-4">&copy; 2022, All right reserved <i className="linkSite">www.agnesabionafoundation.org</i></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer