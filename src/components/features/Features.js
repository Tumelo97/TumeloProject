import React from 'react'
import {BsFillBookmarkStarFill } from "react-icons/bs";
import "./Features.css";
import dev from "../../assets/dev.png";
import Feature from "../../components/features/Feature"
import {featureList} from "./data.js";

const Features = () => {
  return (
    <section id="features">
      <div className="container features">
       <div className="u-title">
        <BsFillBookmarkStarFill color="#FF4500" size={30}/>
         <h2>Core Features</h2>
         <p className="u-text-small u-text-dark">SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing elit.SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
       <div className="features-content">
         <div className="features-left">
           <img src={dev} alt="developers"/>
          </div>
         <div className="features-right">
           {
             featureList.map((feature)=>(
               <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>

             ))
           }
           
           
         </div>
       </div>
      </div>
    </section>
  )
}

export default Features
