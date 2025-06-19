import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from "react"

//use default if only want to export 1 component, but use export const if want export many function
export default function AnimateComponent({ children, props }){  
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true})
    const animation = useAnimation();
    //treshold for component is visible before triggering
    useEffect(()=>{
        console.log(isInView)
        if(isInView){
            animation.start("visible");
        }
    }, [isInView]); //runs whenever isInView changes

    // use props so i don't need to pass it manually  
    return(
        <div ref ={ref}>
            <motion.div
                variants = {{ 
                    hidden : {opacity : 0},
                    visible : {
                        opacity: 1,
                        transition: {staggerChildren: 0.2, }},
                 }}
                 initial = "hidden"
                 animate={animation}
                 transition={{  duration: 1, delay:0.25 }}
                 >
                    {children}
            </motion.div>
        </div>
    );
};
