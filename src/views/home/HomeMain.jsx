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
function HomeMain () {

  return (
    <div className="flex flex-col"> 
      <NavbarFix/>
      <HomeContent/>
      <ProjectContent/>
      <ContactContent/>
      <Footer/>

      <main className="flex-grow"> 
      </main>
  
    </div>


  );
}

export default HomeMain;
