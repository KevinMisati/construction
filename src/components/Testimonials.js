import React from 'react'
import Person1 from '../images/room-12.jpeg'


const Testimonials = () => {
    return (
      <section className="testimonials-container">
        <div className="testimonials">
          <div className="title">
            <h2>Testimonials</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="testimonials-list">
            <div className="testimonial ">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className="img-position">
                <div className="img-container">
                  <img alt="" src={Person1}></img>
                </div>
                <div>
                  <h4>Kevin Misati</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>

            <div className="testimonial ">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className="img-position">
                <div className="img-container">
                  <img alt="" src={Person1}></img>
                </div>
                <div>
                  <h4>Kevin Misati</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>

            <div className="testimonial ">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className="img-position">
                <div className="img-container">
                  <img alt="" src={Person1}></img>
                </div>
                <div>
                  <h4>Kevin Misati</h4>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonials
