import React, { useEffect, useState } from "react";
import SocialIcons from "../socialIcons";
import { NavLink } from "react-router-dom";

function NavbarFix(){
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = () => {
        if(window.scrollY > lastScrollY){
            setShowNavbar(false);
        }
        else{
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY)
    };
    
    useEffect(() =>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        };
    }, [lastScrollY])

     return(
        <div className={`backdrop-blur-extra-sm w-full p-2 fixed items-center transition-transform duration-700 ease-in-out ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
                style={{ zIndex:1000}}
                >
            <div className="flex justify-between px-4 lg:px-32">
               <SocialIcons/> 
               <a href="/pdf/daveResume.pdf" target="_blank">
                    <button className="border border-purple-500 h-12 mt-4 ease-in-out transition duration-300">
                        My Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default NavbarFix

//information !
// So i use [showNavbar, setShowNavbar] = useState(true); for set show navbar when scroll it will vanish use false
// lastscrollY and setLastScrollY is for set scroll and count current scroll
// i got lastScrollY from useEffect and function windows.addevenlistener there for count currently scroll and added in lastScrollY variable
// window.addEventListener("scroll", handleScroll); this one is js function 
// return function for cleanup 
// after that in classname use if , when showbar is true than it will appear but if not it will gone by -translate-y-full 