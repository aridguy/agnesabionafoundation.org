import * as React from 'react';
import './Gallery.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SideSocialIcons from '../../Components/SideSocialIcons';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import AOS from 'aos';
import { useEffect } from 'react';
// all mages importted below

import Pic1 from '../../Assets/gallery/set1/poto-a.jpg'
// import Pic2 from '../../Assets/gallery/set1/poto-b.jpg'
import Pic3 from '../../Assets/gallery/set1/poto-c.jpg'
import Pic4 from '../../Assets/gallery/set1/poto-d.jpg'
import Pic5 from '../../Assets/gallery/set1/poto-e.jpg'
import Pic6 from '../../Assets/gallery/set1/poto-f.jpg'

import Grant1 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-08.jpg'
import Grant2 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-09.jpg'
import Grant3 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-10.jpg'
import Grant4 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-11.jpg'
import Grant5 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-12.jpg'
import Grant6 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-13.jpg'
import Grant7 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-14.jpg'
import Grant8 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-15.jpg'
import Grant9 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-16.jpg'
import Grant10 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-17.jpg'
import Grant11 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-18.jpg'
import Grant12 from '../../Assets/gallery/set2/photo_2023-05-19_17-19-15-19.jpg'

import Confrence1 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-25.jpg'
import Confrence2 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-26.jpg'
import Confrence3 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-27.jpg'
import Confrence4 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-28.jpg'
import Confrence5 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-29.jpg'
import Confrence6 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-30.jpg'
import Confrence7 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-31.jpg'
import Confrence8 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-32.jpg'
import Confrence9 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-33.jpg'
import Confrence10 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-34.jpg'
import Confrence11 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-288.jpg'
import Confrence12 from '../../Assets/gallery/set3/photo_2023-05-19_16-59-250.jpg'

import Widows1 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-17.jpg'
import Widows2 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-18.jpg'
import Widows3 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-21.jpg'
import Widows4 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-211.jpg'
import Widows5 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-22.jpg'
import Widows6 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-30.jpg'
import Widows7 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-31.jpg'
import Widows8 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-37.jpg'
import Widows9 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-34.jpg'
import Widows10 from '../../Assets/gallery/set4/photo_2023-05-19_16-39-40.jpg'

import Paliative1 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-42.jpg'
import Paliative2 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-45.jpg'
import Paliative3 from '../../Assets/gallery/set5/photo_2023-05-19_16-50-41.jpg'
import Paliative4 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-51.jpg'
import Paliative5 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-53.jpg'
import Paliative6 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-55.jpg'
import Paliative7 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-58.jpg'
import Paliative8 from '../../Assets/gallery/set5/photo_2023-05-19_16-39-477.jpg'
import Paliative9 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-08.jpg'
import Paliative10 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-00.jpg'
import Paliative11 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-02.jpg'
import Paliative12 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-04.jpg'
import Paliative13 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-08.jpg'
import Paliative14 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-09.jpg'
import Paliative15 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-11.jpg'
import Paliative16 from '../../Assets/gallery/set5/photo_2023-05-19_16-40-12.jpg'

import Launching1 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-16.jpg'
import Launching2 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-17.jpg'
import Launching3 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-18.jpg'
import Launching4 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-19.jpg'
import Launching5 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-20.jpg'
import Launching6 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-22.jpg'
import Launching7 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-23.jpg'
import Launching8 from '../../Assets/gallery/set6/photo_2023-05-19_16-25-24.jpg'


const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // const imagesAll = imagesData.images;
  // const images = [
  //   "../../Assets/gallery/set1/poto-a.JPG",
  //   "https://picsum.photos/4000/5000",
  //   "https://picsum.photos/2500/1500",
  //   "https://picsum.photos/3000/3000",
  //   "https://picsum.photos/2500/1500",
  //   "https://picsum.photos/4000/5000",
  // ]


  return (
    <div>
      <Navbar />

      {
        // the gallery landing image background
        <main className='galleryBkg'>
        </main>
      }

      {
        <div className='mt-5'>
          <center>
            <h3>EXPLORE OUR GALLERY</h3>
            <span>See all images in our gallery base on events and event day/year</span>
          </center>
        </div>
      }

      {
        // <div className='container'>
        //   <div>
        //     {/* Display the images */}
        //     {imagesAll.map((imager) => (
        //       <div key={imager.name}>
        //         <h2>{imager.name}</h2>
        //         <img width='100%' src={imager.url} alt={imager.name} />
        //       </div>
        //     ))}
        //   </div>
        // </div>
      }





      <div className='container mt-5'>
        <div className='row'>
          <div className="accordion accordion-borderless" id="accordionExampleY">
            <div className="accordion-item" data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <h2 className="accordion-header" id="headingOneY">
                <button className="accordion-button" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
                  FOUNDATION SUPPORT THE FEMALE STUDENTS OF COMMUNITY HIGH SCHOOL AKUTE IN OCTOBER 29 2021
                </button>
              </h2>
              <div id="collapseOneY" className="accordion-collapse collapse show" aria-labelledby="headingOneY"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <div className='container  mt-5'>
                    <ResponsiveMasonry>
                      <Masonry columnsCount={4} gutter="10px">
                        <img
                          data-aos="fade-up"
                          data-aos-anchor-placement="center-bottom"
                          alt='gallery'
                          src={Pic1}
                          style={{ width: "100%", display: "block" }}
                        />
                        <img
                          data-aos="fade-up"
                          data-aos-anchor-placement="center-bottom"
                          alt='gallery'
                          src={Pic3}
                          style={{ width: "100%", display: "block" }}
                        />
                        <img
                          data-aos="fade-up"
                          data-aos-anchor-placement="center-bottom"
                          alt='gallery'
                          src={Pic4}
                          style={{ width: "100%", display: "block" }}
                        />
                        <img
                          data-aos="fade-up"
                          data-aos-anchor-placement="center-bottom"
                          alt='gallery'
                          src={Pic5}
                          style={{ width: "100%", display: "block" }}
                        />
                        <img
                          data-aos="fade-up"
                          data-aos-anchor-placement="center-bottom"
                          alt='gallery'
                          src={Pic6}
                          style={{ width: "100%", display: "block" }}
                        />
                      </Masonry>
                    </ResponsiveMasonry>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item"  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
              <h2 className="accordion-header" id="headingTwoY">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>FOUNDATION EMPOWERMENT GRANT ON 31st  OCTOBER 2022
                </button>
              </h2>
              <div id="collapseTwoY" className="accordion-collapse collapse" aria-labelledby="headingTwoY"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <ResponsiveMasonry>
                    <Masonry columnsCount={4} gutter="10px">
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant1}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant2}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant3}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant4}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant5}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant6}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant7}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant8}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant9}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant10}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant11}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Grant12}
                        style={{ width: "100%", display: "block" }}
                      />


                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
            <div className="accordion-item"  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
              <h2 className="accordion-header" id="headingThreeY">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>EMPOWERMENT CONFERENCE IN JULY 30 2022
                </button>
              </h2>
              <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <ResponsiveMasonry>
                    <Masonry columnsCount={4} gutter="10px">
                      <img
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence1}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence2}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence3}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence4}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence5}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence6}
                        style={{ width: "100%" }}
                      />

                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence8}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence9}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence10}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence11}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence12}
                        style={{ width: "100%" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Confrence7}
                        style={{ width: "100%" }}
                      />
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
            <div className="accordion-item"  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>FOUNDATON PALLIATIVE PROGRAM FOR THE WIDOWS IN JANAURY 18TH 2022
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <ResponsiveMasonry>
                    <Masonry columnsCount={4} gutter="10px">
                      <img
                        alt='gallery'
                        src={Widows1}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows2}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows9}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows4}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows5}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows6}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows7}
                        style={{ width: "100%", display: "block" }}
                      /> data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      <img
                        alt='gallery'
                        src={Widows8}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows3}
                        style={{ width: "100%", display: "block" }}
                      />

                      <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Widows10}
                        style={{ width: "100%", display: "block" }}
                      />

                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
            <div className="accordion-item"  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i> THE PALLIATIVE FOR THE WIDOWS WAS ON THE 9TH JANUARY 2022
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <ResponsiveMasonry>
                    <Masonry columnsCount={4} gutter="10px">
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative1}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative2}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative3}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative4}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative5}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative6}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative7}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative8}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative9}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative10}
                        style={{ width: "100%", display: "block" }}
                      />

                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative11}
                        style={{ width: "100%", display: "block" }}
                      />

                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative12}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative13}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative14}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative15}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Paliative16}
                        style={{ width: "100%", display: "block" }}
                      />
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
            <div className="accordion-item"  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>OFFICAL LAUNCHING OF AGNES ABIONA FOUNDATION ON THE 31ST OCTOBER 2021
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <ResponsiveMasonry>
                    <Masonry columnsCount={4} gutter="10px">
                      <img
                        data-aos-delay="100"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching1}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="200"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching2}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="300"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching3}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="400"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching4}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="500"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching5}
                        style={{ width: "100%", display: "block" }}
                      />

                      <img
                        data-aos-delay="600"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching6}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="700"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching7}
                        style={{ width: "100%", display: "block" }}
                      />
                      <img
                        data-aos-delay="800"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        alt='gallery'
                        src={Launching8}
                        style={{ width: "100%", display: "block" }}
                      />
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <SideSocialIcons />

      <Footer />
    </div>
  )
}

export default Gallery