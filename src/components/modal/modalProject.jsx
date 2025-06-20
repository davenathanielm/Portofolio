import { motion } from "framer-motion";
import AnimateComponent from "../AnimateComponent";
import { slideUp } from "../../local/Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Modal({ showModal, setShowModal, title, description, img, language, link }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showModal]);

  // Close when clicking outside the modal content
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div
      id="modal-container"
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center px-4 pb-10 pt-20 overflow-y-auto scrollbar-hidden"
    >
        {/* <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white hover:text-purple-400 text-base z-50"
          >
            &times;
          </button> */}
      <AnimateComponent>
        <motion.div
          variants={slideUp}
          transition={{ duration: 0.3 }}
          className="relative bg-customBackgroundProject rounded-xl shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto scrollbar-hidden"
        >
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white border border-purple-500 hover:text-purple-400 text-base z-50 "
          >
            &times;
          </button>

          {/* Image Header */}
          <img src={img} alt={title} className="w-full h-56 lg:h-96 object-cover rounded-t-xl" />

          {/* Content */}
          <div className="p-6 text-left">
            <h2 className="text-3xl font-magazinegrotesqueBold mb-4">{title}</h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {language.split("-").map((word, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-customBackgroundNavBar font-bold text-white rounded-full text-sm"
                >
                  {word}
                </span>
              ))}
            </div>

            {Array.isArray(description) &&
              description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-400 font-neuePlakSemiBold mt-3 text-base"
                >
                  {paragraph}
                </p>
              ))}

            <p className="mt-6 font-magazinegrotesqueBold text-2xl">Project Links.</p>
            <div className="flex flex-wrap items-center mt-4 gap-6">
              <NavLink className="flex items-center" to={link} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" className="text-purple-500" />
                <p className="ml-2 text-lg text-violet-400 font-magazinegrotesqueBold">source code</p>
              </NavLink>

              <NavLink className="flex items-center" to={link} target="_blank">
                <FontAwesomeIcon icon={faDiamondTurnRight} size="lg" className="text-violet-500 ml-1" />
                <p className="ml-2 text-lg text-violet-400 font-magazinegrotesqueBold">live project</p>
              </NavLink>
            </div>
          </div>
        </motion.div>
      </AnimateComponent>
    </div>
  );
}

export default Modal;
