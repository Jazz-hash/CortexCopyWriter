import React, { useRef, useEffect } from "react";
import Intro_Front_Layer from "../img/Intro_Front_Layer.svg";
import Intro_Featured_Image_Empty from "../img/Intro_Featured_Image_Empty.svg";
import Intro_Brain from "../img/Intro_Brain.svg";
import { Navigation } from "./Navigation";

export const Header = () => {
  const headerBrain = useRef(null);
  const headerFront = useRef(null);
  useEffect(() => {
    const brainKeyframes = [
      { transform: "translateY(10px) rotate(-2deg)" },
      {
        transform: "translateY(-30px) rotate(0deg)",
      },
    ];

    const frontKeyframes = [
      { opacity: "0" },
      { opacity: "0" },
      { opacity: "1" },
      { opacity: "0" },
      { opacity: "0" },
      { opacity: "0" },
      { opacity: "1" },
      { opacity: "0" },
      { opacity: "0" },
      { opacity: "1" },
      { opacity: "0" },
      { opacity: "0" },
      { opacity: "1" },
      { opacity: "0" },
      { opacity: "0" },
      { opacity: "1" },
      { opacity: "0" },
    ];

    headerBrain.current.animate(brainKeyframes, {
      easing: "ease-in-out",
      direction: "alternate",
      duration: 3000,
      iterations: Infinity,
    });
    headerFront.current.animate(frontKeyframes, {
      duration: 1200,
      iterations: Infinity,
    });
  });

  return (
    <>
      <Navigation />
      <div className="main">
        <div className="row row2 header">
          <div className="row-inner">
            <div id="anchor-top" className="header-container">
              <div className="header-container-text">
                <div className="header-container-description">
                  <div className="header-container-title">
                    {/* <div className="header-container-title-1">The</div>  */}
                    <div className="header-container-title-2">CORTEX</div>
                    <div className="header-container-title-3">COPYWRITER</div>
                  </div>
                  <div className="header-container-paragraph">
                    <p className="intro-title">
                      Enhance your communications with psychology-based
                      copywriting and UX writing
                    </p>
                  </div>
                  <div className="header-container-cta">Send a message</div>
                </div>
              </div>
              <div className="header-container-image">
                <img
                  src={Intro_Front_Layer}
                  ref={headerFront}
                  className="header-front"
                  alt="header-front"
                />
                <img src={Intro_Featured_Image_Empty} alt="header" />
                <img src={Intro_Brain} ref={headerBrain} 
                className="header-brain"
                alt="header-brain" />
              </div>
            </div>
          </div>
          <div className="header-container-bg"></div>
        </div>
      </div>
    </>
  );
};
