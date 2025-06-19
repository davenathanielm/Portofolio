const slideUp = {
    hidden: {opacity:0, y:40},
    visible: {opacity:1, y:0}, 
    exit: {opacity:0, y:-10}, 
    transition: {duration: 0.5}, 
    ease: "easeInOut"
};

const slideUpCircle = {
    hidden: {y:40},
    visible: {y:0}, 
    exit: {y:-10}, 
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

const slideDownCircle = {
    hidden: {y:-30},
    visible: {y:0}, 
    exit: {y:-10}, 
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
    hidden: {x:-30},
    visible: {x:0}, 
    exit: {x:-10}, 
    transition: {duration: 1}, 
    ease: "easeInOut"
};

const slideRightCircle = {
    hidden: {x:-30},
    visible: {x:0}, 
    exit: {x:-10}, 
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

const slideLeftCircle = {
    hidden: {x:40},
    visible: {x:0}, 
    exit: {x:10}, 
    transition: {duration: 1}, 
    ease: "easeInOut"
};
    
export{
    slideUp,
    slideUpCircle,
    slideDown,
    slideDownCircle,
    slideLeft,
    slideLeftCircle,
    slideRight,
    slideRightCircle,
    fadeIn,
};
