const slideUp = {
    hidden: {opacity:0, y:40},
    visible: {opacity:1, y:0}, 
    exit: {opacity:0, y:-10}, 
    transition: {duration: 0.5}, 
    ease: "easeInOut"
};

const slideDown = {
    hidden: {opacity:0, y:-30},
    visible: {opacity:1, y:0}, 
    exit: {opacity:0, y:-10}, 
    transition: {duration: 0.5}, 
    ease: "easeInOut"
};

const fadeIn = {
    hidden: {opacity:0},
    visible: {opacity:1}, 
    exit: {opacity:0}, 
    transition: {duration: 1.5}, 
    ease: "easeInOut"
};

const slideRight = {
    hidden: {opacity:0, x:-30},
    visible: {opacity:1, x:0}, 
    exit: {opacity:0, x:-10}, 
    transition: {duration: 1}, 
    ease: "easeInOut"
};

const slideLeft = {
    hidden: {opacity:0, x:30},
    visible: {opacity:1, x:0}, 
    exit: {opacity:0, x:10}, 
    transition: {duration: 1}, 
    ease: "easeInOut"
};

export{
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    fadeIn,
};
