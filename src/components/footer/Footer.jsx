import  {motion}  from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AnimateComponent from '../AnimateComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(
        <div className="mt-44">
            <p className="text-gray-500 font-semibold text-sm mb-10"> Ⓒ 2024 Dave Nathaniel</p>
        </div>
    );
}
export default Footer