import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo">
        <SiAnaconda color="#fff" size={33} />
        <p className="logo-text">
          bjet<span>Tracker</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            {/* Home */}
            <a href="#">Accueil</a>
          </li>
          <li>
            {/* Features */}
            <a href="#features">Caratéristiques</a>
          </li>
          <li>
            {/* Download */}
            <a href="#download">Télécharger</a>
          </li>
          <li>
            {/* Subscribe */}
            <a href="#subscribe">S'abonner</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
            {/* Learn More */}
            <Button
              text={"En savoir plus"}
              btnClass={"btn-dark"}
              href={"#faq"}
            />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
