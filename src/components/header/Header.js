import React from 'react';
import "./Header.css";
import teamwork from "../../assets/teamwork.png";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
import {BsMouse} from "react-icons/bs";

const Header = () => {
  return (
    <section id="header">
      <div className="container header">
      <div className="header-left">
           <h1>
             <span>Start new ...Today!</span>
           </h1>
           <p className="u-text-small u-text-light">Vivamus vestibulum elit efficitur,elementum sapien a , aliquent ipsum</p>
           <div className="header-cta">
           {/* <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
            <Button text={"How It Works"} btnClass={"btn-orange"} href={"#faq"}/>
  */ }
          </div>
         </div>
         <div className="header-right">
           <img src={teamwork} alt="teams"/> 
         </div>
          
      </div>
      <div className="floating-icon">
        <a href="#features">
           <BsMouse color="#2da5ff" size={25} className="mouse"/>
        </a>
      </div>
    </section>
  );
};

export default Header
