import  {motion}  from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AnimateComponent from '../components/AnimateComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';

function ContactContent() {
return(
    <AnimateComponent>
        <div className="mt-72 shadow-xl rounded-3xl lg:ml-44">
                <motion.p className="text-customPurple font-semibold text-xl text-left ml-6 " variants={slideRight} transition={{ duration : 0.6 }}>Lets collab</motion.p>

            <div className="font-larsseitMedium ml-6 text-4xl lg:text-6xl text-left font-bold">
                <motion.p className="mt-4 mr-10 text-white"variants={slideRight} transition={{ duration : 0.6,  delay: 0.3}}>
                    Got a project? Lets talk !
                </motion.p>
                <motion.div className='flex items-center font-larsseitBold ' variants={slideRight} transition={{ duration : 0.6,  delay: 0.6}}> 
                    <NavLink to= "https://github.com/davenathanielm">
                        <motion.p className="mt-3 text-customPurple">contact me</motion.p>
                    </NavLink>
                    {/* <FontAwesomeIcon
                        icon={faPhone}
                        className="text-white hover:text-violet-500 ml-2 mt-3"
                        size="2x"
                        /> */}
                </motion.div>  
            </div>
        </div>
     </AnimateComponent>
);

};

export default ContactContent