import "./Banner.style.css";

import img from "../../static/img.jpg"
import AdviseBtn from "../AdviseBtn/AdviseBtn";

import React, { FC } from "react";

const Banner = () => {
    return (
          <div className="banner_container">
                <img src={img} alt="" />
                <div className="banner_text">
                  <div className="text">
                    Знижка до <span style={{color: "#2DED29"}}>40%</span> на кросівки протягом цього тижня 
                  </div>

                  <div className="abtn_wrapper">
                    <AdviseBtn/>
                  </div>
                </div>
          </div>
    );
};

export default Banner;