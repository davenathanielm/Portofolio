    import Marque from '../components/Marque';
    import { useState } from 'react';
    import { HorizontalLine } from '../local/Background';
    import { MyProjects, AnotherProjects , kelas,services,certificate} from '../local/Projects';
    import { MySkills } from '../local/TechLogo';
    import  {motion}  from 'framer-motion';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { MyProfile } from '../local/TechLogo';
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { NavLink } from 'react-router-dom';
    import CardProject from '../components/CardProjects';
    import CardTools from '../components/CardTools';
    import CardServices from '../components/CardServices';
    import AnimateComponent from '../components/AnimateComponent';
    import { slideUp, slideDown, slideLeft, slideRight } from '../local/Animation';
    import CertificateContent from '../components/CardCertificate';

    function ProjectContent(){
        const chunkedSkills = chunkArray(MySkills, 3);
        const [showCertificate, setCertificate] = useState(4);
        const [showProject, setProject] = useState(4);
        const handleLoadMore = () =>{
            setCertificate((prevcount)=>prevcount + 4);
        }
        const handleLoadProject = () =>{
            setProject((prevcount)=>prevcount + 4);
        }
        console.log('berikut merupakan jumlah sertifikat yang ditampilkan : ',showCertificate)
        return(
            <div>
                {/* Marque slider */}
                <div className="w-full z-10 lg:py-24">
                    <Marque></Marque>
                </div>

                {/* My Projects */}
                <div>
                    <AnimateComponent>
                        <motion.div className="font-bold text-4xl lg:text-6xl mt-32 text-left lg:px-40 px-10 font-magazinegrotesqueBlack mb-8 lg:mb-12 text-white flex" 
                            variants={slideRight} 
                            transition={{ duration:1 }} >
                                <span>Projects.</span> 
                                <img src={HorizontalLine.horizontalLine} alt="" className='lg:w-full lg:pl-5 lg:pr-64 pl-2 pr-36' />
                        </motion.div>
                            {/* Add Grid Layout so it can dynamic */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 px-7 lg:px-40 ">
                            {MyProjects.slice(0,showProject).map((item,index) => {
                                return (
                                    <AnimateComponent key={index}>
                                        <CardProject 
                                            img={item.img}
                                            title={item.title}
                                            link = {item.link}
                                            description={item.description}
                                            language={item.language}
                                            shortDescription={item.shortDescription}
                                            status={item.status}
                                        />  
                                    </AnimateComponent>
                                    );
                            })}
                        </div>
                        {showProject < MyProjects.length &&(
                            <motion.button onClick={handleLoadProject} className='border border-purple-500 bg-black lg:mb-20 mb-10'>load more</motion.button>
                        )}
                    </AnimateComponent>
                </div>

                        {/* Tools */}
                        {/* <AnimateComponent>
                            <div className="lg:my-52">
                                <p className='font-bold text-4xl mb-8 font-magazinegrotesqueBlack text-white lg:text-6xl'>Tools.</p>
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
                        </AnimateComponent>   */}

                {/* Services */}  
                <div className=" lg:mb-72 lg:mt-40 my-20">
                    <AnimateComponent>
                        <motion.p className='mb-2 text-xl lg:text-2xl font-magazinegrotesqueSemibold  text-customPurple' variants={slideDown} transition={{ duration: 0.3 }}>Services</motion.p>
                    </AnimateComponent>
                    <AnimateComponent>
                        <motion.h1 className='font-bold text-4xl mb-11 lg:text-5xl font-altehaasBold text-white' variants={ slideUp } transition={{ duration:0.3, delay :0.3 }}>I can help you with</motion.h1>
                    </AnimateComponent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mx-12 mt-2 lg:mx-72 lg:gap-5">
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
                        
                {/* Certificates */}
                <AnimateComponent>
                    <div className=''>
                        <motion.div className="font-bold text-4xl lg:text-6xl mt-32 text-center lg:text-right lg:px-32 px-10 font-magazinegrotesqueBlack mb-8 lg:mb-12 justify-end flex" 
                            variants={slideLeft} 
                            transition={{ duration:1 }} >
                                <img src={HorizontalLine.horizontalLine} alt="" className='w-full lg:pr-5 pr-3 pl-52 lg:pl-customLinePadding' />
                                <span className='lg:pr-16 text-right'>Certificates.</span>
                        </motion.div>  
                        <div className='grid grid-cols-1 lg:grid-cols-2 mx-10 lg:mx-40 gap-5'>
                            {certificate.slice(0,showCertificate).map((item,index)=> (
                                <AnimateComponent key={index}>
                                    <CertificateContent
                                        image={item.img}
                                        title={item.title}
                                        link = {item.link}
                                    />
                                </AnimateComponent>
                                    ))}
                        </div> 
                            {showCertificate < certificate.length &&(
                                <motion.button onClick={handleLoadMore} className='lg: mt-5 border border-purple-500 bg-black'>load more</motion.button>
                            )}
                    </div>
                </AnimateComponent>
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