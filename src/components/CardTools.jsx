import adobePremiere from '../assets/techlogo/adobePremiere.png';
import {motion} from "framer-motion"
import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';


function CardTools({ img, img2, img3}){
    return(
        <motion.div className='flex justify-between mt-6 mx-20 py-3 lg:space-x-20 lg:justify-center' variants={slideRight} transition={{ duration : 0.6, delay: 0.3 }}>
            <div className="flex items-center space-x-2">
                <img 
                    src = {img} 
                    className=' h-16 w-16 rounded-lg object-cover p-1 opacity-70' 
                />
                {/* <p className="font-bold text-xl opacity-70"> {title}</p> */}
            </div>
        
            <div className="flex items-center space-x-2 justify-end">
                {/* <p className="text-xl font-bold opacity-70">{title2}</p> */}
                <img
                    src={img2}
                    className=' h-16 w-16 rounded-lg object-cover p-1 opacity-70'
                />
            </div>
            
            <div className="flex items-center space-x-2 justify-end">
                {/* <p className="text-xl font-bold opacity-70">{title2}</p> */}
                <img
                    src={img3}
                    className=' h-16 w-16 rounded-lg object-cover p-1 opacity-70'
                />
            </div>

        </motion.div>
    );
}

export default CardTools