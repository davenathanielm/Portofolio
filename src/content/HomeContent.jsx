import Marque from '../components/Marque';
import { MyProfile } from '../local/TechLogo';
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';
import  {motion, useScroll, useTransform, useInView}  from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import AnimateComponent from '../components/AnimateComponent';
import { BackgroundShooting,BackgroundStatic,BackgroundImage } from '../local/Background';
import image from '../local/Sticker';

function HomeContent() {  
    
    const profileImage = MyProfile.icon
    
    return(
        <AnimateComponent>
            <div className="relative w-full">
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-55"
                    src={BackgroundStatic.bgVideo}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                <div className="home pt-52 relative">
                    <div className='w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-400 rounded-full shadow-2xl shadow-purple-800 mx-auto relative z-10'>
                        <img src={profileImage}
                        alt=""
                        className='w-24 h-24 mx-auto my-auto p-3'/>
                    </div>
                    <div className="text-center mt-5">
                        <motion.p className="text-customPurple font text-base font-altehaasBold" variants={slideUp} transition={{duration : 0.7}}>
                            Hi I'm Dave  
                        </motion.p>
                        
                        <motion.h1 className='px-6 py-7 text-5xl lg:px-72 lg:text-7xl font-magazinegrotesqueSemibold font-bold text-white' variants={slideUp} transition={{duration : 1.3, delay: 0.5}}> Building website,
                            and android to another level </motion.h1>
                        
                        <motion.p className='px-12 text-gray-400 mb-24 lg:pb-48 pb-16 font-satoshiMedium lg:font-altehaas lg:mx-custom-mx lg:text-lg'variants={slideUp} transition={{duration : 1.3, delay: 1}}> I'm a Full Stack Developer based in Indonesia, specializing in Android development and responsive websites 🚀</motion.p>
                        
                        {/* <motion.button className='bg-customBackgroundButton px-7 rounded-3xl py-3 shadow-xl shadow-purple-500/40 hover:shadow-indigo-500/50 hover:bg-indigo-500 mb-36 font-altehaasBold'
                        variants={slideUp} 
                        transition={{duration : 0.7}}
                        > Get In Touch
                        </motion.button> */}
                    </div>
                </div>
            </div>        
            {/* <div className="w-full z-10 lg:py-36">
                    <Marque></Marque>
            </div> */}
        </AnimateComponent>
        );   
}

export default HomeContent