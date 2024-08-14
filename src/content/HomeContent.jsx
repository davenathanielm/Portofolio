// import profileImage from '../assets/profileImage.jpg';
import Marque from '../components/Marque';
import { MyProfile } from '../local/TechLogo';


function HomeContent() {  
    
    const profileImage = MyProfile[0].icon

    return(
         <div className="home mt-24">
            <img src={profileImage}
            alt=""
            className='rounded-full w-24 h-24 mx-auto' />
            <div className="text-center mt-5">
                <p>Hi I'm Dave</p>
                <h1 className='px-5 py-7'> Building Website,
                     Android, and experience. </h1>
                <p className='px-12 text-gray-400 mb-14'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ipsa delectus possimus magni ipsum assumenda hic corrupti laboriosam necessitatibus sit facere et! Est odit eveniet voluptas odio eos sequi aspernatur!</p>
                <button className='bg-customBackgroundButton px-7 rounded-3xl mb-14 py-4'> Get In Touch</button>
                <div className="w-full mb-4">
                    <Marque></Marque>
                </div>
            </div>
         </div>
        
        );
    
}


export default HomeContent