import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquare,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                <h1>Chandpur University</h1>
                <p className="mt-4 ">
                  <small>
                    An important idea in the definition of a university is the
                    notion of academic freedom. The first documentary evidence
                    of this comes from early in the life of the University of
                    Bologna.
                  </small>
                </p>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
                <p className="mt-2">
                  <small>Colac © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">
                    <strong>Platform</strong>
                  </li>
                  <li className="footer-menu">Browse Library</li>
                  <li className="footer-menu">Tutorials</li>
                  <li className="footer-menu">Patners</li>
                  <li className="footer-menu">FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Company</li>
                  <li className="footer-menu">About</li>
                  <li className="footer-menu">Instructor</li>
                  <li className="footer-menu">Teacher</li>
                  <li className="footer-menu"> Contract</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-footer-container">
                <h3>Subscribe</h3>
                <div className="d-flex">
                  <div className="input-group  mb-3">
                    <input
                      type="text"
                      className="p-2 form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    <button type="button" className="btn btn-primary p-2">
                      Send
                    </button>
                  </div>
                </div>
                <div className="phone d-flex align-items-center justify-content-center">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faPhoneSquare} />
                  </div>
                  <div>
                    <h5> 01763647880</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <p>
                      <br />
                      Sadar, Chandpur
                      <br /> Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
