import React from 'react'

import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa"; 


const Navbar = () => {
   const toggleNav = ()=> {
   
    const body = document.getElementById("root");
    body.classList.toggle("nav-toggle")
  } 
  
return (
  <div>
    <header>
      <div className="nav-contacts-container">
        <div className="nav-contacts">
          <div className="first-contacts">
            <span>
              <AiFillPhone /> 07012345678
            </span>
            <span>
              <MdEmail /> <i className="email">info@gmail.com</i>
            </span>
          </div>
          <div className="second-contacts">
            <ul>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className="nav-icons">
                    <AiFillFacebook />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className="nav-icons">
                    <AiFillLinkedin />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className="nav-icons">
                    <AiFillTwitterSquare />
                  </span>
                </a>
              </li>
              <li>
                <a href="https://construction-compan.netlify.app/">
                  <span className="nav-icons">
                    <FaWhatsappSquare />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-nav-container">
        <div className="mobile-nav">
          <div className="mobile-logo">KM</div>

          <div onClick={toggleNav} className="hurmbuger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <nav>
        <div className="logo">KM</div>
        <ul>
          <li>
            Home
            <div className="nav-underline"></div>
          </li>
          <li>
            About
            <div className="nav-underline"></div>
          </li>
          <li>
            Projects
            <div className="nav-underline"></div>
          </li>
          <li>
            Portifolio
            <div className="nav-underline"></div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);
} 
export default Navbar; 
