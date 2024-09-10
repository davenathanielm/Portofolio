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
            <p className="text-gray-500 font-semibold text-sm"> Ⓒ 2024 Dave Nathaniel</p>
            <div className="mt-7">
                <NavLink to="https://www.instagram.com/davenm_?igsh=OWk4MDRjbjV3MHAz">
                    <FontAwesomeIcon
                        icon = {faInstagram}
                        className = "text-white mb-4"
                        size = "lg"
                    />
                </NavLink>

                <NavLink to="https://www.linkedin.com/in/dave-nathaniel-69817a205/">
                    <FontAwesomeIcon
                        icon= {faLinkedin}
                        className="text-white ml-3 mb-4"
                        size="lg"
                    />
                </NavLink>

                <NavLink to="https://github.com/davenathanielm">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="text-white ml-3 mb-4"
                        size="lg"
                    />

                </NavLink>

            </div>

        </div>
    );
}
export default Footer