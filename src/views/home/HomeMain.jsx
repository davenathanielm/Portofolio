// src/components/Navbar.jsx
import React, { useState } from "react"
import '../../App.css';
import '../../css/Design.css'
import Navbar from "../../components/navbar";
import HomeContent from "../../content/HomeContent";

function HomeMain () {

  return (
    // //navbar
    // // <nav className="block w-full max-w-screen mx-auto text-white backdrop-blur-2xl backdrop-saturate-200 py-8">
    // //   <div className="flex items-start justify-between text-blue-gray-900">
    // //     <a href="#"
    // //       className="block font-sans text-base font-bold leading-relaxed tracking-normal text-inherit antialiased text-white mr-40 ml-5 ">
    // //       PORTOFOLIO
    // //     </a>
    // //     <div className="hidden lg:block">
    // //       <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    // //         <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
    // //           <a href="#" className="flex items-center transition-colors hover:text-blue-500">
    // //             Pages
    // //           </a>
    // //         </li>
    // //         <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
    // //           <a href="#" className="flex items-center transition-colors hover:text-blue-500">
    // //             Account
    // //           </a>
    // //         </li>
    // //         <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
    // //           <a href="#" className="flex items-center transition-colors hover:text-blue-500">
    // //             Blocks
    // //           </a>
    // //         </li>
    // //         <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
    // //           <a href="#" className="flex items-center transition-colors hover:text-blue-500">
    // //             Docs
    // //           </a>
    // //         </li>
    // //       </ul>
    // //     </div>
    // //     <button
    // //       className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none  text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden mr-5"
    // //       type="button"
    // //       onClick={handleToggle}
    // //       >
    // //       <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
    // //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
    // //           aria-hidden="true" className="w-6 h-6">
    // //           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
    // //         </svg>
    // //       </span>
    // //     </button>
    // //   </div>
    // //   {/* this line direct to dropDownMenu.jsx */}
    // //   <DropdownMenu menuOpen={isOpen}/>

    // //   <p>haii</p>
    // // </nav>
    // <>
    //   <Navbar/>
    //   <HomeContent/>
    //   {/* Other components and content can go here */}
    // </>
    // //navbar selesai

    <div className="flex flex-col">  {/* flex-col ensures a vertical layout */}
      <Navbar/>
      <HomeContent/>
      <main className="flex-grow">  {/* flex-grow allows HomeContent to take up available space */}
       
      </main>
      {/* Other components and content can go here */}
    </div>


  );
}

export default HomeMain;
