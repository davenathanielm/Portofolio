import adobePremiere from '../assets/techlogo/adobePremiere.png';
import {motion} from "framer-motion"
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';

function CardServices({ img, title, description}){
    return(
        <motion.div className='bg-customBackgroundServices rounded-3xl p-6 h-62 lg:h-64 flex flex-col items-start mt-5'
        variants={slideUp}
        transition={{ duration:0.3, delay : 0.6}}
        >
            {/* Icon  */}
            <img className='w-14 h-14' src={img} alt="" />

            {/* Title */}
            <h3 className="text-lg text-white mb-2 mt-4 font-magazinegrotesqueBold">
                <p>{title}</p>
            </h3>

            {/* description */}
            <p className="text-gray-400 font-satoshiMedium text-sm overflow-hidden text-justify hyphens-auto">
                {description}
            </p>
        </motion.div>

    );
}

export default CardServices