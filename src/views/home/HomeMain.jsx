// src/components/Navbar.jsx
import React, { useState } from "react"
import '../../App.css';
import '../../css/Design.css'
import Navbar from "../../components/navbar";
import NavbarFix from "../../components/navbar/navbarFix";
import HomeContent from "../../content/HomeContent";
import ProjectContent from "../../content/ProjectContent";
import ContactContent from "../../content/ContactContent";
import Footer from "../../components/footer/Footer";
import { BackgroundShooting,BackgroundStatic } from '../../local/Background';
function HomeMain(){
  return (
    <div className="flex flex-col"> 
      <div>
        <NavbarFix/>
        <HomeContent/>
        <ProjectContent/>
        <ContactContent/>
        <Footer/>
      </div>
    </div>
  );
}

export default HomeMain;
