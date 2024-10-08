import { motion } from "framer-motion";
import AnimateComponent from "../AnimateComponent";
import { slideUp,slideLeft } from "../../local/Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

function Modal({ showModal, setShowModal, title, description, img, language, link}){
    // prevent background scroll when modal open
    useEffect(() =>{
        if(showModal){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "auto";
        }

    //clean up when modal is closed
        return() => {
            document.body.style.overflow = "auto";
        };
    },[showModal]);

    // function closed when clicked outside modal
    const handleOutsideClick = (e) =>{
        if(e.target.id === "modal-container"){
            setShowModal(false)
        }
    };
    
    
    if (!showModal) return null;

    return(
        <div 
            id="modal-container"
            onClick={handleOutsideClick}
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto pt-72 pb-14">
            <AnimateComponent>
                <motion.div
                        className="bg-customBackgroundProject rounded-xl shadow-lg relative mx-2 md:w-1/2"
                        variants={slideUp}
                        transition={{ }}
                    >
                    {/* <button
                        className=" absolute top-4 right-4 text-gray-600"
                        onClick={() => setShowModal(false)}
                    >
                        X
                    </button> */}
                    <img src={img} alt={title} className="w-full h-56 object-cover rounded-t-xl mb-4"/>
                    <div className="px-5 text-left">
                        <h2 className="text-3xl font-magazinegrotesqueBold mb-2 mt-8">{title}</h2>
                        <h2 className="text-lg font-magazinegrotesqueSemibold text-violet-400 mb-5">{language}</h2>
                    
                        {/* Render description paragraphs */}
                        {Array.isArray(description) && description.map((paragraph, index) => (
                            <p key={index} className=' text-gray-400 font-neuePlakSemiBold mt-2 text-base'>{paragraph}</p>
                        ))}
                        {/* Project Links */}
                        <p className="mt-5 font-magazinegrotesqueBold text-3xl">Project Links.</p>
                        <div className="mt-4">
                            <NavLink className={"flex items-center"} to={link}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="lg"
                                    className="text-purple-400 mb-6"
                                />
                                <p className="ml-2 text-lg text-violet-400 font-magazinegrotesqueBold mb-6">source code</p>
                            </NavLink>
                        </div>
                    </div>
                </motion.div>
            </AnimateComponent>
        </div>
    );
}

export default Modal

//Explanation
// The [showModal] array is the dependency array for the useEffect hook.It tells React to run the effect (and its cleanup function) whenever the value of showModal changes.
//prevent background scrolling use document.body.style.overflow