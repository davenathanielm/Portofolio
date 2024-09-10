import adobePremiere from '../assets/techlogo/adobePremiere.png';
import {motion} from "framer-motion"
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';

function CardServices({ img, title, description}){
    return(
        <motion.div className='mt-5 bg-customBackgroundServices rounded-3xl p-6 h-62 mx-12 flex flex-col items-start'
        variants={slideUp}
        transition={{ duration:0.3, delay : 0.6}}
        >
            {/* Icon  */}
            <img className='w-14 h-14' src={img} alt="" />

            {/* Title */}
            <h3 className="text-lg  text-white mb-2 mt-4 font-neuePlakSemiBold">
                <p>{title}</p>
            </h3>

            {/* description */}
            <p className="text-gray-400 font-neuePlakSemiBold text-base overflow-hidden text-justify hyphens-auto">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique unde magni beatae, temporibus odit aut! Excep jdnjsn */}
                {description}
            </p>
        </motion.div>

    );
}

export default CardServices