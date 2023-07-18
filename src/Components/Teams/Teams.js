import React from "react";
import './teams.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Teams = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return(
        <div>

        <div className="bkgss pt-5 mt-5">
        <div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <h2 className="black text-center aos-init aos-animate" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">Our Team</h2>
                    <p className="txtculture text-center black w-800 aos-init aos-animate" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">Our Team is what made us 'us' <br /> its all about the greatest good.</p>
                    <div className="col-md-12 text-center">
                    </div>
                </div>
                <Carousel className="mt-4"
                    renderButtonGroupOutside={true}
                    infinite={true}
                    focusOnSelect={true}
                
                    removeArrowOnDeviceType={['mobile', 'tablet', 'desktop']}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    draggable={true}
                    containerClass="carousel-container"
                    responsive={responsive}>
                    <div>
                        <div className="" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-right">
                            <img loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='boss pictures' />
                            
                        </div>
                    </div>
                    <div>
                        <div className="" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-right">
                            <img loading='lazy' width='100%' src='https://www.totalcomm.ca/wp-content/uploads/2016/04/shutterstock_264466157-1024x683.jpg' alt='boss pictures' />
                            
                        </div>
                    </div>
                    <div>
                    <div className="" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-right">
                        <img loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='boss pictures' />
                        
                    </div>
                </div>
                    <div>
                        <div data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-left">
                            <img loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='coo pictures' />
                            
                        </div>
                    </div>
                    <div>
                        <div className="" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-left">
                            <img className="partner" loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='boss pictures' />
                            
                        </div>
                    </div>
                    <div>
                        <div data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-down">
                            <img loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='fintech consultant' />
                           
                        </div>
                    </div>
                    <div>
                        <div data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-left">
                            <img loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='Product designer/manager' />
                            
                        </div>
                    </div>
                    <div>
                        <div data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-up">
                            <img className="partner" loading='lazy' width='100%'src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='frontend engineer' />
                           
                        </div>
                    </div>
                    <div>
                        <div data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos="zoom-out-down">
                            <img loading='lazy' width='100%' src='https://www.soscanhelp.com/hubfs/VoIP%20Phone%20Graphic%20Header.png' alt='product support engineer' />
                           
                        </div>
                    </div>
                </Carousel>;
            </div>
        </div>
    </div>
        
        </div>
    )
}

export default Teams