import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/locaaa.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Le monde en developpement</span>
            <span>Object tracker : Avoir vos</span>
            <span>accessoir au bout des doigts</span>
          </h1>
          <p className="u-text-small">
            Object Tracker, est un dispositif électronique doté d’un module GPS
            et d’un biper intégrer reliés à une application mobile et permettant
            de retrouver les objets perdus ou des affaires sur lesquelles ils
            ont été préalablement accrochés.
          </p>
          <div className="header-cta">
            {/* <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} /> */}
            <Button
              text={"Comment ça marche"}
              btnClass={"btn-light"}
              href={"#"}
            />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
