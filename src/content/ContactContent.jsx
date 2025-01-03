import  {motion}  from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AnimateComponent from '../components/AnimateComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { contactEmail,contactWhatsApp } from '../local/Contact';
import {BackgroundShooting, BackgroundStatic} from '../local/Background';

function ContactContent() {
return(
    <AnimateComponent>
        <div className="mt-60 lg:mt-72 shadow-xl rounded-3xl lg:mb-10">
                <motion.p className="font-bold text-6xl lg:text-8xl mt-32 lg:mt-72 lg:mb-7 font-magazinegrotesqueBlack mb-4 text-white " variants={slideRight} transition={{ duration : 0.6 }}>Contact.</motion.p>

            <div className="font-altehaas text-lg lg:text-xl mx-8 lg:mx-96 text-center">
                <motion.p className="text-gray-300"variants={slideRight} transition={{ duration : 0.6,  delay: 0.3}}>
                    Shoot me an email if you want to connect! You can also find me on WhatsApp if that's more your speed.
                </motion.p> 
                <motion.div className='grid grid-cols-1 lg:grid-cols-2 lg:text-2xl lg:mx-28 lg:mt-5' variants={slideRight} transition={{ duration : 0.6,  delay: 0.6}}> 
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