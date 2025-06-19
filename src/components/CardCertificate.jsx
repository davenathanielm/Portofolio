import React from 'react';
import {motion} from 'framer-motion';
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';
function CardCertificate({image , title , link}){
    return(
        <div className='lg:mb-12'>
            <motion.div
                className=' rounded-xl h-48 lg:h-customCard overflow-hidden '>

                <motion.div className='flex justify-center'
                variants={slideLeft} 
                transition={{duration: 0.8}} 
                whileHover={{scale:1.1}}>
                    <a href={link} target='_blank'>
                        <img className='rounded-2xl lg:h-customCard lg:w-customCardWidth' src={image} alt="" />
                    </a>
                </motion.div>

            </motion.div>
        </div>
    )

}
export default CardCertificate;