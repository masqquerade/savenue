import "./Banner.style.css";

import snakes from "../../static/snakes.jpg"
import AdviseBtn from "../AdviseBtn/AdviseBtn";
import { Link } from "react-router-dom";

import React, { FC } from "react";

const Banner = () => {
    return (
          <Link to={"/info"}>
            <div className="banner_container">
                  <img src={snakes} alt="" />
                  <div className="banner_text">
                    <div className="text">
                      Знижка до <span style={{color: "#2DED29"}}>40%</span> на кросівки протягом цього тижня 
                    </div>

                    <div className="abtn_wrapper">
                      <AdviseBtn/>
                    </div>
                  </div>
            </div>
          </Link>
    );
};

export default Banner;