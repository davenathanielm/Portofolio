    import Marque from '../components/Marque';
    import { MyProjects, AnotherProjects , kelas,services} from '../local/Projects';
    import { MySkills } from '../local/TechLogo';
    import  {motion}  from 'framer-motion';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { NavLink } from 'react-router-dom';
    import CardProject from '../components/CardProjects';
    import CardTools from '../components/CardTools';
    import CardServices from '../components/CardServices';
    import AnimateComponent from '../components/AnimateComponent';
    import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';

    function ProjectContent(){
        const chunkedSkills = chunkArray(MySkills, 3);
        return(
                <div>
                    <AnimateComponent>
                        <motion.h2 className="font-bold text-4xl mt-32 font-magazinegrotesqueBlack mb-8 text-white" variants={slideUp} transition={{ duration:0.8 }} >
                            Projects.
                        </motion.h2>
                     </AnimateComponent>

                        {MyProjects.map((item) => {
                            return (
                                 <AnimateComponent>
                                    <CardProject 
                                        img={item.img}
                                        title={item.title}
                                        link = {item.link}
                                        description={item.description}
                                        language={item.language}
                                    />
                                 </AnimateComponent>
                            );
                        })}
                   
                    
                    <AnimateComponent>
                    <div className="mt-72 mb-10">
                        <p className='font-bold text-4xl mb-8 font-magazinegrotesqueBlack text-white'>Tools.</p>
                        {chunkedSkills.map((chunk, index) => {
                            return (
                                <AnimateComponent>
                                    <CardTools
                                        key={index}
                                        img={chunk[0]?.icon}
                                        title={chunk[0]?.title}
                                        img2={chunk[1]?.icon}
                                        title2={chunk[1]?.title}
                                        img3={chunk[2]?.icon}
                                        title3={chunk[2]?.title}
                                    />
                                </AnimateComponent>
                            );
                        })}
                    </div>
                     </AnimateComponent>


                    <div className=" mt-48 mb-8">
                        <AnimateComponent>
                            <motion.p className='mb-2 text-lg font-magazinegrotesqueSemibold text-customPurple' variants={slideDown} transition={{ duration: 0.3 }}>Services</motion.p>
                        </AnimateComponent>

                        <AnimateComponent>
                            <motion.h1 className='font-bold text-2xl mb-11 font-altehaasBold text-white' variants={ slideUp } transition={{ duration:0.3, delay :0.3 }}>I can help you with</motion.h1>
                        </AnimateComponent>

                            {services.map((item)=> {
                                return(
                                    <AnimateComponent>
                                        <CardServices
                                            img={item.img}
                                            title={item.title}
                                            description={item.description}
                                            />
                                    </AnimateComponent>
                                );
                            }) }
                    </div>

                </div>
        );
    }


    function chunkArray(array, size) {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    }
    export default ProjectContent