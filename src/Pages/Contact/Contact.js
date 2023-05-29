import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Contact = () => {


  return (
    <div>
    <Navbar />
      <section className="container">
        <div className="row mt-5">
          <div className="col-sm-12 text-center mb-4">
            <a className="btn btn-primary" href="/"> Donate Now <i className="fa fa-dollar"></i></a>
          </div>
          <div className="col-sm-12 mb-4 col-md-5">
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-primary text-white text-center py-2">
                  <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                  <p className="m-0">We’ll write rarely, but only the best content.</p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                    <input value="" type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="email" value="" name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="text" className="form-control" name="mesg" />
                  </div>
                </div>
                <div className="text-center">
                  <input type="submit" name="submit" value="submit" className="btn btn-primary btn-block rounded-0 py-2" />
                </div>

              </div>

            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="mb-4">
              <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.000480581726!2d3.3471213647713713!3d6.6468599451937695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0ab57faff%3A0x8728d5c569c83028!2sAGNES%20ABIONA%20FOUNDATION!5e0!3m2!1sen!2sng!4v1654099218173!5m2!1sen!2sng"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="theMap"
              ></iframe>
            </div>

            <div className="row text-center">
              <div className="col-md-4">
                <a href='/' className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-map-marker"></i></a>
                <p> Community Bus-Stop, 5 Adeyemi Alao St, Ogba, Lagos</p>
              </div>
              <div className="col-md-4">
                <a href='/' className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-phone"></i></a>
                <p>+234 810 322 1622</p>
              </div>
              <div className="col-md-4">
                <a href='/' className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-envelope"></i></a>
                <p>contactus@agnesabionafoundation.com</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;