import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';

function SocialIcons(){
    return(
        <div className="mt-7">
            <NavLink to="https://www.instagram.com/davenm_?igsh=OWk4MDRjbjV3MHAz">
                <FontAwesomeIcon
                icon = {faInstagram}
                className = "text-gray-300 hover:text-customPurple mb-4"
                size = "xl"
                />
            </NavLink>

            <NavLink to="https://www.linkedin.com/in/dave-nathaniel-69817a205/">
                <FontAwesomeIcon
                    icon= {faLinkedin}
                    className="text-gray-300 hover:text-customPurple ml-4 mb-4"
                    size="xl"
                />
            </NavLink>

            <NavLink to="https://github.com/davenathanielm">
                <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-300 hover:text-customPurple ml-4 mb-4"
                    size="xl"
                />
            </NavLink>
        </div>
    );
}
export default SocialIcons;