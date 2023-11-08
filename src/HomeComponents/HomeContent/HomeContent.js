import React from "react";
import './HomeContent.css';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import telegram from '../../assets/images/telegram.ico';
import linkedin from '../../assets/images/linkedin.ico';
import shap from '../../assets/images/shap.png';
import moe from '../../assets/images/moe.png';
import { Link, Routes, Route } from "react-router-dom";
import Graduate from "../../Graduate/Graduate";

function HomeContent() {
  return (
    <>
      <div className="content">
        <div className="container-text">
          <h4>hello,my full name is</h4>
          <h1>
            Mouemen <span className="rafei">Rafei</span>
          </h1>
          <h3>
            I'm a <span className="rafei">full stack</span> developper
          </h3>

          <Link to="Graduate" >
              <button className="btn" id="dwn">
                Go Right
              </button>
          </Link> 
              {/* <button className="btn" id="dwn">
                College Degree 
              </button>
              <button  className="btn" id="dwn" style={{"marginLeft": "10px", "display": "none", "transition": "0.3s"}}>Click Here</button> */}

          <Routes>
            <Route path="Graduate" element={<Graduate />} ></Route>
          </Routes>

          <div className="social">
            <a href="https://www.instagram.com/mouemen_rafei" target="_blank" rel="noopener noreferrer">
              <img className="fa-brands" src={instagram} alt="" />
            </a>
            <a href="https://www.facebook.com/moemen.rafei" target="_blank" rel="noopener noreferrer">
              <img className="fa-brands" src={facebook} alt="" />
            </a>
            <a href="https://wa.me/76942534" target="_blank" rel="noopener noreferrer">
              <img className="fa-brands" src={telegram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mouemen-rafei-b51728287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <img className="fa-brands" src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="container-images">
          <img className="shape1" src={shap} alt="" />
          <img className="shape2" src={moe} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeContent;
