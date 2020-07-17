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

    var brainAnimation = headerBrain.current.animate(brainKeyframes, {
      easing: "ease-in-out",
      direction: "alternate",
      duration: 3000,
      iterations: Infinity,
    });
    var frontAnimation = headerFront.current.animate(frontKeyframes, {
      duration: 1200,
      iterations: Infinity,
    });
  });

  return (
    <>
      <Navigation />
      <div class="main">
        <div class="row row2 header">
          <div class="row-inner">
            <div id="anchor-top" class="header-container">
              <div class="header-container-text">
                <div class="header-container-description">
                  <div class="header-container-title">
                    {/* <div class="header-container-title-1">The</div>  */}
                    <div class="header-container-title-2">CORTEX</div>
                    <div class="header-container-title-3">COPYWRITER</div>
                  </div>
                  <div class="header-container-paragraph">
                    <p class="intro-title">
                      Enhance your communications with psychology-based
                      copywriting and UX writing
                    </p>
                  </div>
                  <div class="header-container-cta">Send a message</div>
                </div>
              </div>
              <div class="header-container-image">
                <img
                  src={Intro_Front_Layer}
                  ref={headerFront}
                  class="header-front"
                />
                <img src={Intro_Featured_Image_Empty} />
                <img src={Intro_Brain} ref={headerBrain} class="header-brain" />
              </div>
            </div>
          </div>
          <div class="header-container-bg"></div>
        </div>
      </div>
    </>
  );
};
