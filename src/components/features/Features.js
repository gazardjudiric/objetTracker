import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { FeatureList } from "./data";
import ObjetTrackerVideo from "./Video/objetTrackerVideo.mp4";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Caractériques Principales</h2>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            {/* <img src={phoneFeatures} alt="phone" /> */}
            <video width="550" height="400" controls className="video">
              <source src={ObjetTrackerVideo} type="video/mp4"></source>
            </video>
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
