import thumbnailEfata from '../assets/thumbnail/thumbnailEfata.jpg';
import thumbnailKelas from '../assets/thumbnail/thumbnailKelas.jpg';
import thumbnailKelas2 from '../assets/thumbnail/thumbnailKelas2.jpg';
import thumbnailKelas3 from '../assets/thumbnail/thumbnailKelas3.jpg';
import thumbnailKelas4 from '../assets/thumbnail/thumbnailKelas4.jpg';
import thumbnailKelas5 from '../assets/thumbnail/thumbnailKelas5.jpg';
import thumbnailSalon from '../assets/thumbnail/thumbnailSalon.jpg';
import apps from '../assets/services/apps.png';
import website from '../assets/services/website.png';
import websitebackup from '../assets/services/websitebackup.png';
import design from '../assets/services/brush.png';

const MyProjects =[
    {
        title : "Efatta Interior Design",
        img : thumbnailEfata,
        description :[
            "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            "The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.",
            "Because this isn't real, here's some gibberish to fill space :)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.",
            "Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi."
        ],
        link :"https://github.com/davenathanielm/Efatta-Project-Fix.git",
        language : "laravel - mysql - css - bootstrap   - html"
    },
    
    {
        title : "Salon Keyla Yong Admin",
        img : thumbnailSalon,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique unde magni beatae, temporibus odit aut! Excep jdnjsn",
        link : "https://github.com/davenathanielm/salonkeyla.git",
        language : "codeigniter - mysql - html - css - bootstrap - phpmyadmin"
    },
    
    {
        title : "Kelas",
        img :thumbnailKelas,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique unde magni beatae, temporibus odit aut! Excep jdnjsn",
        link :"https://github.com/davenathanielm/Capstone.git",
        language : "kotlin - express - JSON - github - android studio - API"
    },
    
]

const AnotherProjects = [
      {
        title : " Video editing",
        link:""
    },
]

const kelas = [
    {
        Img: thumbnailKelas2,
    },
    
    {
        Img: thumbnailKelas3,
    },
    
    {
        Img: thumbnailKelas4,
    },
    
    {
        Img: thumbnailKelas5,
    },
]

const services = [
    // only contain 17 words!
    {
        img: website ,
        title : "Web Development",
        description: "Offering professional web development services, including responsive design, user-friendly interfaces, and seamless backend integration."
    },
    {
        img: apps ,
        title : "Android Development",
        description: "Providing expert Android development services, from intuitive UI design to robust backend integration and seamless performance."
    },
    {
        img: design ,
        title : "Video Editting",
        description: "Delivering professional video editing services, specializing in creative storytelling, smooth transitions, and polished final cuts."
    },
]

export{MyProjects, AnotherProjects, kelas, services}
