import thumbnailEfata from '../assets/thumbnail/thumbnailEfata.jpg';
import {motion} from "framer-motion"
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import Modal from './modal/modalProject';
import { useState } from 'react';

function CardProject({ img, title, description, link , language}){
    const [showModal, setShowModal] = useState(false);

    return(
        <div className='mt-10 mx-7 mb-12'> 
            <motion.div className='bg-customBackgroundProject rounded-xl h-48 overflow-hidden'
                variants={slideUp}
                transition={{ duration:0.3, delay : 0.6}}>

                {/* Image  */}
                <motion.div 
                    className="flex justify-center"
                    whileHover={{
                        scale : 1.05,
                        rotate : 4,
                        transition: {duration: 0.3}
                    }}
                    onClick={() => setShowModal(true)}
                >
                    <img className='w-72 h-44 object-cover rounded-lg mt-9' src={img} alt=""/>
                </motion.div>
            </motion.div>

                {/* Title */}
                <motion.div className="text-2xl mt-4 mb-2 mx-3 font-satoshiBlack text-left flex justify-between"
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.8 }}
                >
                    <p className='w-64'>{title}</p>
                    <NavLink to= {link}>
                                 <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-gray-400 hover:text-violet-500 mr-2 "
                                    size="base"
                                />
                    </NavLink>
                </motion.div>

                <motion.div className="text-lg font-magazinegrotesqueSemibold text-left mx-3 text-violet-400 h-44 overflow-hidden"
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.8 }}
                >
                    <p>{language}</p>

                    {/* description */}
                    <p className='text-gray-400 mt-2 text-lg '>{description}</p>
                </motion.div>
                
                <motion.div className="text-violet-400 text-right block mx-3 mt-1 hover:underline"
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.8 }}>
                    <p className='font-satoshiMedium text-lg' onClick={() => setShowModal(true)}>view more {'>'}</p>
                </motion.div>

                {/* Modal */}
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    title={title}
                    description={description}
                    language={language}
                    img={img}
                    link={link}
                />
        </div>
    );
}
export default CardProject


// Fun Fact !!!
// relative make positioned relative to parent rather than entire document
// absolute make overlay positioned with relative nearest positioned ancestor inset-0 is shorthand to make top, right,bottom,left 0 this make positioned overlay stretch to cover entire area of its parent container


// backupp contoh pertama
  // <div className='mt-3 relative'>
        //     <motion.div 
        //         whileHover={{ 
        //             scale: 1.05,
        //             transition: { duration: 0.1 }
        //         }}
        //         variants={slideUp}
        //         transition={{ duration :0.6, delay: 0.2 }}
        //     className="cardProject h-64 rounded-2xl bg-violet-700 shadow-xl hover:shadow-violet-600/60 mx-5 transition duration-300 delay-100 relative mb-9"
        //     >       
        //         <img 
        //             src = {thumbnailEfata} 
        //             className='h-full rounded-2xl object-cover' 
        //         />
        //         <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold font-altehaasBold bg-black bg-opacity-60 rounded-2xl">
        //             {"Lorem"}
        //         </div>
        //     </motion.div>
        // </div>

        // link github

        // <NavLink to= "https://github.com/davenathanielm">
        //                         <FontAwesomeIcon
        //                             icon={faGithub}
        //                             className="text-white hover:text-violet-500"
        //                             size="3x"
        //                         />
        //                     </NavLink>

        // ini untuk large
        //  <div className='mt-5 mx-7 h-80'> 
        //     <motion.div className='bg-customBackgroundProject rounded-xl h-48 overflow-hidden'
        //     variants={slideUp}
        //     transition={{ duration:0.3, delay : 0.6}}
        //     >
        //         {/* Image  */}
        //         <div className="flex justify-center">
        //             <img className='w-72 h-44 object-cover rounded-lg mt-9' src={thumbnailEfata} alt="" />
        //         </div>


        //         {/* description */}
        //         <p className="text-gray-400 text-sm overflow-hidden text-justify hyphens-auto ">
        //             {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique unde magni beatae, temporibus odit aut! Excep jdnjsn */}
        //             {description}
        //         </p>
        //     </motion.div>
              
        //         {/* Title */}
        //         <div className="text-lg mb-2 mt-4 font-satoshiBlack text-left">
        //             <p>{"Effata Project"}</p>

        //         </div>
        // </div>

