// src/components/DropdownMenu.jsx
import '../App.css';
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownMenu = ({ menuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ y: "100%" }} //ini buat nurunuin ke 100 persen
          animate={{ y: 0 }} //ini untuk melakukan animasi ke 0 nya
          exit={{ y: "100%" }} // ini juga buat nurunin ke 100%
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        //  className="fixed bottom-0 left-0 right-0 bg-customBackgroundNavBar z-50 lg:hidden rounded-t-3xl p-4 pt-10"
        className="fixed left-0 right-0 bg-customBackgroundNavBar z-50 lg:hidden rounded-t-3xl p-4 pt-10 navigasi"
        >
          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-white">
              <a href="#" className="flex items-center transition-colors hover:text-customPurple ">
                Home
              </a>
            </li>
            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-white">
              <a href="#" className="flex items-center transition-colors hover:text-customPurple">
                Contact Me
              </a>
            </li>
            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-white">
              <a href="#" className="flex   transition-colors hover:text-customPurple">
                Blocks
              </a>
            </li>
            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-white">
              <a href="#" className="flex items-center transition-colors hover:text-customPurple">
                Docs
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
