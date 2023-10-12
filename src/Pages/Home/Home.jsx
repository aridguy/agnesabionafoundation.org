import React, { useEffect } from "react";
// import diamond from "../../Assets/helpIcon.gif";
import SideSocialIcons from "../../Components/SideSocialIcons";
import "./Home.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// all home first gallery
import Photo1 from "../../Assets/home/pics1.jpg";
import Photo2 from "../../Assets/home/pics2.jpg";
import Photo3 from "../../Assets/home/pics3.jpg";
import Photo4 from "../../Assets/home/pics4.jpg";
import Photo5 from "../../Assets/home/pics5.jpg";
import Photo6 from "../../Assets/home/pics6.jpg";
import Events from "../../Components/Events/Events";
import Teams from "../../Pages/Teams/Teams";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateToVolunteer = useNavigate();
  const GotoContactUs = () => navigateToVolunteer("/volunteer");
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
      <SideSocialIcons />
      <ToastContainer />

      <Navbar />

      <main>
        <section className="landing">
          <div className="container wow slideInLeft" data-wow-delay="0.1s">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 mt-5">
                <center>
                  <div className="main-head-contents w3-animate-bottom">
                    <h1 className="hText">Agnes Abiona Foundation</h1>
                    <h2 className="st2">There Is One Relation Above All</h2>
                    <h2>
                      <b className="s-t">Relation of Humanity</b>
                    </h2>
                    <div className="lcare">
                      <p className="lcare-text"></p>
                    </div>
                    <button className="btn btn-warning donate">Donate</button>
                  </div>
                </center>
              </div>
              <div className="col-md-2">
                <p className="main-head-contents"></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {
        // just a section one 1
        <section className="bg-muted mb-5 pt-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <center>
                  <h2 className="w-700">
                    Advancing Peace & Global Well-Being of Women Accross Nigeria
                  </h2>
                </center>
                <small id="theSectAboutTxt">
                  AGNES ABIONA FOUNDATION is a registered non-governmental
                  non-profit charitable organization based in Nigeria that
                  provide aid for underprivileged girls and young women through
                  development of empowerment programs in order to fulfil their
                  God given potentials.
                </small>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
      }
      {
        // just a section one 1
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h3 className="text-center">We Provide</h3>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <div className="we-head text-center">
                <i className="fas fa-user-graduate mt-3"></i>
                <h4>Educational Support</h4>
              </div>
              <div className="we-txt text-center mt-4">
                <span className="black">
                  AAF is guided by the principle that education is basic human
                  right and all children must have access and also believe that
                  it is one of the veritable empowerment tools against poverty
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="we-head text-center">
                <i className="fas fa-network-wired mt-3"></i>
                <h4>Vocational Skill & Training</h4>
              </div>
              <div className="we-txt text-center mt-4">
                <span className="">
                  One of the focal points of AAF is to provide support through
                  vocational skills acquisition to indigent girls and young
                  women who are not interested in pursuing formal education to
                  fulfill their potential
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="we-head text-center mt-3">
                <i className="fas fa-chalkboard-user"></i>
                <h4>Mentoring</h4>
              </div>
              <div className="we-txt text-center mt-4">
                <span className="">
                  As girls navigate adolescent stage, they face challenge of
                  moving through physical, psychological, sexual, and emotional
                  development with a healthy sense of self intact.
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="we-head text-center mt-3">
                <i className="fas fa-users-gear"></i>
                <h4>Leadership Training</h4>
              </div>
              <div className="we-txt text-center mt-4">
                <span className="">
                  The leadership training for girls and young women of this
                  foundation will empower necessary skills in leadership quality
                  needed for them to actively participate in the leadership
                  role.
                </span>
              </div>
            </div>
          </div>
        </div>
      }

      {
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h2>SOME PAST EVENTS --- --- --- </h2>
            </div>
          </div>
        </div>
      }

      {
        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner py-4">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <img
                        src={Photo1}
                        className="card-img-top"
                        alt="Waterfall"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>FOUNDATON PALLIATIVE PROGRAM</b>
                        </h5>
                        <p className="card-text">
                          foundation support the female students of community
                          high school akute in october 29 2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src={Photo2}
                        className="card-img-top"
                        alt="Sunset Over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {" "}
                          <b>FOUNDATON PALLIATIVE</b>
                        </h5>
                        <p className="card-text">
                          foundaton palliative program for the wdows in janaury
                          18th 2022
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src={Photo4}
                        className="card-img-top"
                        alt="Sunset over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>OFFICAL LAUNCHING</b>
                        </h5>
                        <p className="card-text">
                          offical launching of agnes abiona foundation on the
                          31st october 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {
        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner py-4">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <img
                        src={Photo3}
                        className="card-img-top"
                        alt="Waterfall"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>OFFICAL LAUNCHING</b>
                        </h5>
                        <p className="card-text">
                        offical launching of agnes abiona foundation on the
                        31st october 2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src={Photo5}
                        className="card-img-top"
                        alt="Sunset Over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>FOUNDATION SUPPORT</b>
                        </h5>
                        <p className="card-text">
                          foundation support the female students of community
                          high school akute in october 29 2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src={Photo6}
                        className="card-img-top"
                        alt="Sunset over the Sea"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {" "}
                          <b>THE PALLIATIVE FOR WIDOWS</b>
                        </h5>
                        <p className="card-text">
                          the palliative for widows on the 9th of janaury 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <i className="cursor brandColors">
            View more in our gallery --- --- ---
          </i>
        </div>
      }

      {<Events />}
      {<Teams />}

      <section section className="contact-bkg" id="contact">
        <div className="container">
          <div className="row wow fadeInRight animated">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="contact-sideA">
                <h2 className="sideAtext">
                  We’d love to hear from you! Give us a call, send us a message?
                </h2>
              </div>
              <div className="conts">
                <b>Address</b> <br />
                <i>5 Adeyemi Alao Street, Community Oke-Ira, Ogba Lagos</i>
              </div>
              <div className="conts">
                <b>Email Us</b> <br />
                <i>agnesabionafoundation@gmail.com</i>
              </div>
              <div className="conts">
                <b>Phone Number</b>
                <br />
                <i>+2348063306463, +2348103221622</i>
                <br />
              </div>
              <div className="socialMedia conts">
                <p>
                  <b>FIND US ON SOCIAL MEDIA</b>
                </p>
                <span className="fab fa-facebook"></span>
                <span className="fab fa-twitter mx-3"></span>
                <span className="fab fa-youtube mx-3"></span>
                <span className="fab fa-whatsapp mx-3"></span>
              </div>
              <button
                onClick={GotoContactUs}
                className="btn btn-warning mt-5 text-white"
              >
                Contact Us
              </button>
            </div>
            <div className="col-md-5">
              <div className="contact-sideA"></div>
              <div>
                <iframe
                  className="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.000480581726!2d3.3471213647713713!3d6.6468599451937695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0ab57faff%3A0x8728d5c569c83028!2sAGNES%20ABIONA%20FOUNDATION!5e0!3m2!1sen!2sng!4v1654099218173!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  loading="lazy"
                  title="theMap"
                ></iframe>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
