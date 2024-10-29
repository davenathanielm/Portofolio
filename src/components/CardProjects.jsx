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
        // <div className='mt-10 mx-7 lg:w-96 mb-12'> 
        <div className='mb-12'> 
            <motion.div className='bg-customBackgroundProject rounded-xl h-48 lg:h-64 overflow-hidden'
                variants={slideUp}
                transition={{ duration:0.3, delay : 0.6}}>

                {/*Image*/}
                <motion.div 
                    className="flex justify-center"
                    whileHover={{
                        scale : 1.05,
                        rotate : 4,
                        transition: {duration: 0.3}
                    }}
                    onClick={() => setShowModal(true)}
                >
                    <img className='w-72 h-44 lg:w-96 lg:h-52 object-cover rounded-t-lg mt-9 lg:mt-14' src={img} alt=""/>
                </motion.div>
            </motion.div>

                {/* Title */}
                <motion.div className="text-2xl mt-4 mb-2 mx-3 font-satoshiBlack text-left flex justify-between"
                    variants={slideUp}
                    transition={{ duration:0.3 , delay:0.8 }}
                >
                    <p className='w-64 lg:w-80'>{title}</p>
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
