import React from 'react'

import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa"; 

const Footer = () => {
    return (
      <footer>
        <div className="first-footer">
          <div className="footer">
            <div className="footer-items">
              <div className="footer-item-1 footer-item">
                <h3>Lorem Ipsum</h3>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className="footer-item-2 footer-item">
                <h3>Our Offices</h3>
                <div className="underline"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad.
                </p>
              </div>
              <div className="footer-item-3 footer-item">
                <h3>Office Hours</h3>
                <div className="underline"></div>
                <p>Monday: 8am-6pm</p>
                <p>Tuesday: 8am-6pm</p>
                <p>Wednesday: 8am-6pm</p>
                <p>Thursday: 8am-6pm</p>
                <p>Friday: 8am-4pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="second-footer-container">
          <div className="second-footer">
            <span className="nav-icon">
              <AiFillFacebook />
            </span>
            <span className="nav-icon">
              <AiFillLinkedin />
            </span>
            <span className="nav-icon">
              <AiFillTwitterSquare />
            </span>
            <span className="nav-icon">
              <FaWhatsappSquare />
            </span>
          </div>
        </div>
      </footer>
    );
}

export default Footer
