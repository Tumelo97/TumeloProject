import React,{useState} from 'react';
import "./Navbar.css";
import {FaInfo} from "react-icons/fa";
import logo2  from "../../assets/logo2.png";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import "../UI/button/Button.css";
import Button from "../UI/button/Button";

const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  }
    
  return (
    <nav className="container navbar">
      <div className="logo">
       <FaInfo color ="#0000FF" size={33}/>
        <p className="logo-text">Khokha<span>X</span></p>
      </div>
      <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile": "nav-links-mobile-hide" }>
            <li><a href="#">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><img src= {logo2} height="20px"/></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
            <li><a href="#contact">Contact</a></li>
            {/*<li className="nav-btn"><a href="#" className="btn btn-dark">Get Started</a></li> 
             <li className="nav-btn">
               <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"}/>
             </li>
             */}
          </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
        <RiCloseLine color="#0000FF" size={30}/>
        ) : (
          <AiOutlineBars color="#0000FF" size={27}/>
          )}

      </div>
    </nav>
  );
}

export default Navbar
