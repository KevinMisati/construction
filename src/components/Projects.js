import React from 'react'
import Img1 from "../images/room-1.jpeg";
import Img2 from "../images/room-7.jpeg";
import Img3 from "../images/room-3.jpeg";
import Img4 from "../images/room-4.jpeg";
import Img5 from "../images/room-5.jpeg";
import Img6 from "../images/room-6.jpeg";


 const Projects = () => {
    return (
      <section className="projects-container">
        <div className="projects">
          <div className="title">
            <h2>Our Projects</h2>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className="projects-list">
            <div className="project">
              <img src={Img1} alt="" />
            </div>
            <div className="project">
              <img src={Img2} alt="" />
            </div>
            <div className="project">
              <img src={Img3} alt="" />
            </div>
            <div className="project">
              <img src={Img4} alt="" />
            </div>
            <div className="project">
              <img src={Img5} alt="" />
            </div>
            <div className="project">
              <img src={Img6} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects;
