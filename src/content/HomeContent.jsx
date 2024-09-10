import Marque from '../components/Marque';
import { MyProfile } from '../local/TechLogo';
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';
import  {motion, useScroll, useTransform, useInView}  from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import AnimateComponent from '../components/AnimateComponent';


function HomeContent() {  
    
    const profileImage = MyProfile[0].icon
    
    return(
        <AnimateComponent>
            <div className="home mt-52 ">
                <img src={profileImage}
                alt=""
                className='rounded-full w-24 h-24 mx-auto' />
                <div className="text-center mt-5">
                    <motion.p className="text-customPurple font text-base font-altehaasBold" variants={slideUp} transition={{duration : 0.7}}>
                        Hi I'm Dave
                    </motion.p>
                    
                    <motion.h1 className='px-6 py-7 text-5xl font-magazinegrotesqueSemibold font-bold text-white' variants={slideUp} transition={{duration : 1.3, delay: 0.5}}> Building responsive website,
                        android, and experience. </motion.h1>
                    
                    <motion.p className='px-12 text-gray-500 mb-14 font-satoshiBlack mt-5'variants={slideUp} transition={{duration : 1.3, delay: 1}}> I'm a seasoned developer based in Indonesia, specializing in Android development, responsive websites, and  video editing.</motion.p>
                    
                    <motion.button className='bg-customBackgroundButton px-7 rounded-3xl py-3 shadow-xl shadow-purple-500/40 hover:shadow-indigo-500/50 hover:bg-indigo-500 mb-36 font-altehaasBold'
                    variants={slideUp} 
                    transition={{duration : 0.7}}
                    > Get In Touch</motion.button>
                    <div className="w-full mb-4">
                        <Marque></Marque>
                    </div>
                </div>
         </div>        
            </AnimateComponent>
        );   
}

export default HomeContent