import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { SiAnaconda } from "react-icons/si";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Cotonou
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +229 61177215.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +229 61177215
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: gazardjudiric@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.test.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <div className="d-flex">
            <SiAnaconda color="#fff" size={33} />
            <p className="logo-text">
              bjet<span>Tracker</span>
            </p>
          </div>
          <p className="u-text-small">&copy; Copyright 2022. Objetracker.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
