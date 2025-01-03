import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import { socialMedia } from "../local/Contact";

function SocialIcons(){
    return(
        <div className="mt-7">
            <NavLink to={`${socialMedia[0].link}`}>
                <FontAwesomeIcon
                icon = {faInstagram}
                className = "text-gray-300 hover:text-customPurple mb-4"
                size = "xl"
                />
            </NavLink>

            <NavLink to={`${socialMedia[1].link}`}>
                <FontAwesomeIcon
                    icon= {faLinkedin}
                    className="text-gray-300 hover:text-customPurple ml-4 mb-4"
                    size="xl"
                />
            </NavLink>

            <NavLink to={`${socialMedia[2].link}`}>
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