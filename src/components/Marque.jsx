import React from "react";
import Marquee from "react-fast-marquee";
LogoComponent
import { MySkills } from "../local/TechLogo";
import LogoComponent from "./LogoComponent";

const Marque = () => (
  <Marquee
  pauseOnHover
  pauseOnClick
  speed={100}
  gradient
  gradientColor="black"
  gradientWidth={60}
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