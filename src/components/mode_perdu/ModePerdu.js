import React, { useEffect } from "react";
import "./ModePerdu.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
//  👉️

const ModePerdu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="headers">
      <div className="container headers">
        <div className="header-right" data-aos="fade-right">
          <img src={phoneHeader} alt="phone" />
        </div>
        <div className="header-left" data-aos="fade-left">
          <h1>
            <span>Mode Perdu Activé</span>
          </h1>
          <p className="u-text-small">
            Ce objet a été egarré. Veillez appellez le{" "}
            <span className="modeperdu"> 61177215 </span>
            pour la restitution de ce objet Merci bien !
          </p>
          <div className="header-cta">
            <Button
              text={"Appelez le numero"}
              btnClass={"btn-dark"}
              href={"#"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModePerdu;
