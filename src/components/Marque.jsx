import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
LogoComponent
import { MySkills } from "../local/TechLogo";
import LogoComponent from "./LogoComponent";

const Marque = () => (
  <Marquee
  pauseOnHover
  pauseOnClick
  speed={150}
  gradient
  gradientColor="black"
  gradientWidth={50}
  >
  {console.log(MySkills)}

  {
    MySkills.map((item, index) =>{
      return(
        <div key = {index} className="ms-4 lg:ms-8">
          <LogoComponent icon={item.icon} title={item.title} />
        </div>
      );
    })
  }  
  </Marquee>
);

export default Marque;
