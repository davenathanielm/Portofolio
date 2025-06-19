import  {motion, reverseEasing}  from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AnimateComponent from '../components/AnimateComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { slideUp, slideUpCircle, slideDown, slideDownCircle, slideLeft,slideLeftCircle ,slideRight,slideRightCircle } from '../local/Animation';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { contactEmail,contactWhatsApp } from '../local/Contact';
import {BackgroundShooting, BackgroundStatic} from '../local/Background';

function ContactContent() {
return(
    <AnimateComponent>
        <div className="shadow-xl rounded-3xl lg:pb-44 py-20 relative overflow-hidden">
            <motion.p className="font-bold text-6xl lg:text-8xl mt-32 lg:mt-72 lg:mb-7 font-magazinegrotesqueBlack mb-4 text-white z-10" variants={slideRight} transition={{ duration : 0.6 }}>
                Contact.
            </motion.p>
            <div className='lg:hidden'>
                {/* Shinning Ball */}
                <motion.div className='w-28 h-28 bg-gradient-to-r from-pink-200 to-purple-400 rounded-full shadow-2xl shadow-purple-300 absolute top-24 left-[-10%]' variants={slideDownCircle} transition={{ duration : 3, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-12 h-12 bg-gradient-to-r from-customBallPurple to-customBallBlue rounded-full shadow-2xl shadow-purple-300 absolute top-32 right-5 z-10' variants={slideDownCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-16 h-16 bg-gradient-to-r from-customBallPurple to-customBallBlue rounded-full shadow-2xl shadow-purple-300 absolute bottom-5 left-2 mr-3 z-10'variants={slideDownCircle} transition={{ duration : 3, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-400 rounded-full shadow-2xl shadow-purple-300 absolute bottom-0 right-[-15%] z-10'variants={slideUpCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-8 h-8 bg-gradient-to-r from-pink-200 to-customBallCream rounded-full shadow-2xl shadow-purple-300 absolute bottom-0 left-44'variants={slideLeftCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div>
            </div>
            <div className='hidden lg:block'>
                {/* Shinning Ball */}
                <motion.div className='w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-400 rounded-full shadow-2xl shadow-purple-300 absolute top-24 left-[-8%]' variants={slideDownCircle} transition={{ duration : 3, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-40 h-40 bg-gradient-to-r from-customBallPurple to-customBallBlue rounded-full shadow-2xl shadow-purple-300 absolute top-32 right-32 z-10' variants={slideDownCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-44 h-44 bg-gradient-to-r from-customBallPurple to-customBallBlue rounded-full shadow-2xl shadow-purple-300 absolute bottom-24 left-24 z-10'variants={slideDownCircle} transition={{ duration : 3, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-72 h-72 bg-gradient-to-r from-pink-200 to-purple-400 rounded-full shadow-2xl shadow-purple-300 absolute bottom-[-8%] right-[-8%] z-10'variants={slideUpCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                <motion.div className='w-10 h-10 bg-gradient-to-r from-pink-200 to-customBallCream rounded-full shadow-2xl shadow-purple-300 absolute bottom-10 left-1/2 transform -translate-x-1/2 'variants={slideLeftCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div>
                {/* <motion.div className='w-10 h-10 bg-gradient-to-r from-pink-200 to-customBallCream rounded-full shadow-2xl shadow-purple-300 absolute top-14 left-1/2 transform -translate-x-1/2 'variants={slideLeftCircle} transition={{ duration : 2, repeat: Infinity, repeatType: "reverse" }}></motion.div> */}
            </div>
                
            <div className="font-altehaas text-lg lg:text-xl mx-8 lg:mx-96 text-center">
                <motion.p className="text-gray-300"variants={slideRight} transition={{ duration : 0.6,  delay: 0.3}}>
                    Shoot me an email if you want to connect! You can also find me on WhatsApp if that's more your speed.
                </motion.p> 
                <motion.div className='grid grid-cols-1 lg:grid-cols-2 lg:text-2xl lg:mx-28 lg:mt-5 lg:gap-16' variants={slideRight} transition={{ duration : 0.6,  delay: 0.6}}> 
                     <NavLink className = {"justify-center flex gap-3"} to={`mailto:${contactEmail.email}?subject=${contactEmail.subject}`}>
                                 <FontAwesomeIcon
                                    icon={faEnvelope} 
                                    className="text-gray-400 mt-5 hover:text-violet-500"
                                    size="xl"
                                />
                                <p className='mt-5 text-white hover:text-violet-500 lg:text-xl'>{contactEmail.email}</p>
                    </NavLink>
                     <NavLink className={"justify-center flex gap-2"} to= {`https://wa.me/${contactWhatsApp.number}?text=${contactWhatsApp.message}`}target='_blank'>
                                 <FontAwesomeIcon
                                    icon={faWhatsapp} 
                                    className="text-gray-400 mt-4 hover:text-violet-500"
                                    size="xl"
                                />
                                <p className='mt-4 text-white hover:text-violet-500 lg:text-xl'>chat me🪄</p>
                    </NavLink>
                </motion.div>  
            </div>
        </div>
        {/* Video Background */}
        {/* <video 
          className=""
          src={BackgroundStatic.bgVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
        /> */}
     </AnimateComponent>
);
};
export default ContactContent