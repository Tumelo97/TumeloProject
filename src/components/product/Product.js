import React from 'react'
import {FaApple , FaWindows} from "react-icons/fa";
import{GrAndroind} from "react-icons/gr";
import {IconContext} from "react-icons";
import dev from "../../assets/dev.png";
import "./Product.css";

const Product = () => {
  return (
    <div className="containers">
      <div className="row">
        <div className="card">
          <img src={dev} alt="develop"/>
          <h4>Blog Title#1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
           <a href="#" className="btn">Read More</a>
        </div>
        <div className="card">
          <img src={dev} alt="develop"/>
          <h4>Blog Title#1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="card">
          <img src={dev} alt="develop"/>
          <h4>Blog Title#1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="card">
          <img src={dev} alt="develop"/>
          <h4>Blog Title#1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <a href="#" className="btn">Read More</a>
        </div>

      </div>
    </div>
  )
}

export default Product
