import * as React from 'react';
import './Gallery.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SideSocialIcons from '../../Components/SideSocialIcons';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import imagesData from './ImagesFile.json';

const Gallery = () => {
  // const imagesAll = imagesData.images;
  const images = [
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/4000/5000",
    "https://picsum.photos/2500/1500",
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/2500/1500",
    "https://picsum.photos/4000/5000",
  ]


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
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOneY">
                <button className="accordion-button" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
                  FOUNDATIONSUPPORT THE FEMALE STUDENTS OF COMMUNITY HIGH SCHOOL AKUTE IN OCTOBER 29 2021
                </button>
              </h2>
              <div id="collapseOneY" className="accordion-collapse collapse show" aria-labelledby="headingOneY"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <div className='container  mt-5'>
                    <ResponsiveMasonry>
                      <Masonry columnsCount={4} gutter="10px">
                        {images.map((image, i) => (
                          <img
                            alt='gallery'
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                          />
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwoY">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwoY" className="accordion-collapse collapse" aria-labelledby="headingTwoY"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThreeY">
                <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
                  <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #3
                </button>
              </h2>
              <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY"
                data-mdb-parent="#accordionExampleY">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting that
                  just about any HTML can go within the <code>.accordion-body</code>, though the
                  transition does limit overflow.
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