import React, { useEffect } from 'react';
import './contact.css'
import Navbar from '../../Components/Navbar/Navbar';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';



const Contact = () => {
  const navigateHome = useNavigate();
  const HnadleGoHome = () =>{
    navigateHome('/');
  }
  useEffect(() => {
    AOS.init();
}, []);

  const [state, handleSubmit] = useForm("xdovrzqg");
  if (state.succeeded) {
    return <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <div className='contactResponse'>
              <div className='responseModal' data-aos="zoom-out-left">
                <div className='modalText text-center'>
                  <h2 className='white'>Thank you for reaching out to us,</h2>
                  <p>we will get back to you as soon as possible.</p>
                  <p>Thank you</p>
                  <span onClick={HnadleGoHome} className='white cursor'>Home</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>;
  }


  return (
    <div>
      <Navbar />
      <section className="contact-address-area">
        <div className="container">
          <div className="sec-title-style1 text-center max-width">
            <div className="title">Contact Us</div>
            <div className="text"><div className="decor-left"><span></span></div><p>Quick Contact</p><div className="decor-right"><span></span></div></div>
            <div className="bottom-text">
              <p>Agnes Abiona Foundation is has been able to support over 3k Plus Woman which includes Adults, YOund Women and Widows in different areas.</p>
            </div>
          </div>
          <div className="contact-address-box row">
            <div className="col-sm-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-clock-1">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span>
                </span>
              </div>
              <h3 className=''>Contact us </h3>
              <h2>Our Representatives are online 24/7</h2>
            </div>
            <div className="col-sm-4 single-contact-address-box main-branch">
              <h3 style={{ color: 'white' }}>Contact Details</h3>
              <div className="inner">
                <ul>
                  <li>
                    <div className="title">
                      <h4 className='white' style={{ color: 'white' }}>Address:</h4>
                    </div>
                    <div className="text">
                      <p style={{ color: 'white' }}>5 Adeyemi Alao Street, Community <br /> Oke-Ira, Ogba Lagos</p>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <h4 style={{ color: 'white' }}>Phone:</h4>
                    </div>
                    <div className="text">
                      <p style={{ color: 'white' }}>+234 633 06463</p>
                    </div>
                  </li>
                  <li>
                    <div className="title">
                      <h4 style={{ color: 'white' }}>Office Hrs:</h4>
                    </div>
                    <div className="text">
                      <p style={{ color: 'white' }}>Mon-Fri: 9:30am - 6:30pm<br /> Sat-Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-question-2">
                  <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
                </span>
              </div>
              <h3 style={{ color: 'white' }}>Live Chat </h3>
              <h2 style={{ color: 'white' }}>get instant response using our live chat</h2>
            </div>
          </div>


        </div>
      </section>

      <section className="contact-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="contact-form">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="sec-title-style1 float-left">
                      <div className="title">Send Us a Message</div>
                      <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                    </div>
                    <div className="text-box float-right">
                      <p>send us a message our representatives will reach out to you withing 24hrs. </p>
                    </div>
                  </div>
                </div>
                <div className="inner-box">
                  <form onSubmit={handleSubmit} id="contact-form" className="default-form" method='POST'>
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="input-box">
                              <input type="text" name="Name" placeholder="Name" required="" />
                              <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                              />
                            </div>
                            <div className="input-box">
                              <input type="text" name="Phone" placeholder="Phone" />
                              <ValidationError
                                prefix="Phone"
                                field="phone"
                                errors={state.errors}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-box">
                              <input type="email" name="Email" placeholder="Email" required="" />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                              />
                            </div>
                            <div className="input-box">
                              <input type="text" name="Purpose" placeholder="Enquiries, Complains, Help..etc" />
                              <ValidationError
                                prefix="Purpose"
                                field="purpose"
                                errors={state.errors}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="input-box">
                              <input type="text" name="Subject" placeholder="Subject" />
                              <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div className="input-box">
                          <textarea name="Message" placeholder="Your Message..." required=""></textarea>
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />
                        </div>
                        <div className="button-box">
                          <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                          <button type="submit" disabled={state.submitting} data-loading-text="Please wait...">Send Message<span className="flaticon-next"></span></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;