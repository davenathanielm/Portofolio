import thumbnailEfata from '../assets/thumbnail/thumbnailEfata.jpg';
import {motion} from "framer-motion"
import { slideUp,slideUpCircle ,slideDown,slideDownCircle ,slideLeft,slideLeftCircle, slideRight,slideRightCircle} from '../local/Animation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import Modal from './modal/modalProject';
import { useState } from 'react';
import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';

function CardProject({ img, title, description, link , language, shortDescription, status}) {
    const [showModal, setShowModal] = useState(false);

    return(
        <div className='mb-12'>
            <motion.div className='bg-customBackgroundProject rounded-xl h-48 lg:h-customCard overflow-hidden'
                variants={slideUp}
                transition={{ duration:0.3, delay : 0.6}}>

                {/*Image*/}

                {/* for mobile */}
                <motion.div
                    className="flex justify-center lg:hidden" // Applies animation only on smaller screens
                    animate={{
                        translateY: [0, -10, 0], // Move up slightly and back
                    }}
                    transition={{
                        duration: 2, // Total duration for one cycle
                        repeat: Infinity, // Loops the animation
                        ease: "easeInOut", // Smooth transition
                    }}
                    onClick={() => setShowModal(true)}
                    >
                    <img
                        className="w-72 h-44 lg:w-auto lg:h-customCard object-cover rounded-t-lg mt-9 lg:mt-0"
                        src={img}
                        alt=""
                    />
                </motion.div>

                {/* for pc */}
                <motion.div
                    className="flex justify-center"
                    whileHover={{
                        scale : 1.05,
                        rotate : 4,
                        transition: {duration: 0.3}
                    }}
                    onClick={() => setShowModal(true)}
                >
                    <img className='lg:w-auto lg:h-customCard object-cover rounded-t-lg mt-9 lg:mt-0 ' src={img} alt=""/>
                </motion.div>
            </motion.div>

                {/* Title */}
                <motion.div className="text-2xl mt-4 mb-2 mx-3 font-satoshiBlack text-left flex justify-between"
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.8 }}
                >
                    <div className='w-64 lg:w-80 '>
                        {title} 
                        <span 
                        className={`ml-2 p-1 text-sm rounded-xl font-bold 
                        ${ status.toLowerCase() === 'ongoing' ?' bg-yellow-300 text-black' : 'bg-green-700 text-white'
                        }`}>
                            {status}
                        </span>
                    </div>

                    <NavLink to= {link} target='_blank'>
                                 <FontAwesomeIcon
                                    icon={faGithub} 
                                    className="text-gray-400 hover:text-violet-500 lg:ml-32"
                                    size="lg"
                                />
                    </NavLink>
                    
                    {/* this button for live web */}
                    <NavLink to= {link} target='_blank'>
                                 <FontAwesomeIcon
                                    icon={faDiamondTurnRight}
                                    className="text-gray-400 hover:text-violet-500 hidden lg:block lg:ml-3 "
                                    size="lg"
                                />
                    </NavLink>
                    
                </motion.div>

                <motion.div className="text-lg font-magazinegrotesqueSemibold text-left mx-3 text-customLanguage lg:h-28 overflow-hidden" //h-44 and overflow:hidden
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.8 }}
                    >
                    <div className="flex flex-wrap gap-2">
                        {language.split('-').map((word,index) =>(
                            <span key={index} className='px-2 py-1 bg-customBackgroundNavBar font-bold text-white rounded-full text-sm'>
                                {word}
                            </span>
                        ))}
                    </div>    
                    {/* <p>{language}</p> */}

                    {/* change to short description */}
                    <p className='text-gray-400 mt-3 text-lg '>{shortDescription}</p>
                </motion.div>

                <motion.div className="text-violet-400 text-right mx-3 mt-1 hover:underline"
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.1 }}
                    whileHover={{scale:1.1}}
                    >
                    {/* <p className='font-satoshiMedium text-lg' onClick={() => setShowModal(true)}>view more {'>'}</p> */}

                    {/* <button className='border-purple-500 text-white px-10' > live </button> */}
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
