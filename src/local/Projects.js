import thumbnailEfata from '../assets/thumbnail/thumbnailEfata.jpg';
import thumbnailKelas from '../assets/thumbnail/thumbnailKelas.jpg';
import thumbnailKelas2 from '../assets/thumbnail/thumbnailKelas2.jpg';
import thumbnailKelas3 from '../assets/thumbnail/thumbnailKelas3.jpg';
import thumbnailKelas4 from '../assets/thumbnail/thumbnailKelas4.jpg';
import thumbnailKelas5 from '../assets/thumbnail/thumbnailKelas5.jpg';
import thumbnailSalon from '../assets/thumbnail/thumbnailSalon.jpg';
import apps from '../assets/services/apps.png';
import website from '../assets/services/website.png';
import globalNetwork from '../assets/services/globalNetwork.png';
import smartphoneHand from '../assets/services/smartphoneHand.png';
import smartphoneColor from '../assets/services/smartphoneColor.png';
import websitebackup from '../assets/services/websitebackup.png';
import design from '../assets/services/brush.png';
import basicKotlin from '../assets/certificate/basickotlin.png';
import basicAndroid from '../assets/certificate/basicandroid.png';
import fundamentalandroid from '../assets/certificate/fundamentalandroid.png';
import solid from '../assets/certificate/PemogramanSOLID.png';
import basicAI from '../assets/certificate/DasarAI.png';
import machineLearning from '../assets/certificate/MachineLearning.png';
import androidIntermediate from '../assets/certificate/AndroidIntermediate.png';
import bangkit from '../assets/certificate/BangkitSertifikat.png';
import msibBangkit from '../assets/certificate/msibcertificate.png';

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
        shortDescription : "A real-time coaching app for students learning to paint, built with Flutter, Python",
        link :"https://github.com/davenathanielm/Efatta-Project-Fix.git",
        language : "laravel - mysql - css - bootstrap   - html"
        
    },
    
    {
        title : "Salon Keyla Yong Admin",
        img : thumbnailSalon,
        description : "A real-time coaching app for students learning to paint, built with Flutter, Python",
        shortDescription : "A real-time coaching app for students learning to paint, built with Flutter, Python",
        link : "https://github.com/davenathanielm/salonkeyla.git",
        language : "codeigniter - mysql - bootstrap"
    },
    
    {
        title : "Kelas",
        img :thumbnailKelas,
        description : "A real-time coaching app for students learning to paint, built with Flutter, Python",
        shortDescription : "A real-time coaching app for students learning to paint, built with Flutter, Python",
        link :"https://github.com/davenathanielm/Capstone.git",
        language : "kotlin - express - API - android studio"
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
        img: globalNetwork ,
        title : "Web Development",
        description: "Offering professional web development services, including responsive design, user-friendly interfaces, and seamless backend integration."
    },
    {
        img: smartphoneHand ,
        title : "Android Development",
        description: "Providing expert Android development services, from intuitive UI design to robust backend integration and seamless performance."
    },
    {
        img: design ,
        title : "Video Editting",
        description: "Delivering professional video editing services, specializing in creative storytelling, smooth transitions, and polished final cuts."
    },
]

const certificate = [
    {
        title : "Basic Kotlin",
        img : basicKotlin,
        link :"https://www.dicoding.com/certificates/1OP8NOM3QXQK"
    },
    {
        title : "Basic Android",
        img : basicAndroid,
        link :"https://www.dicoding.com/certificates/QLZ945159P5D"

    },
    {
        title : "Android Fundamental",
        img : fundamentalandroid,
        link : "https://www.dicoding.com/certificates/4EXGQEJQ9ZRL"
    },
    {
        title : "SOLID Programming",
        img : solid,
        link :"https://www.dicoding.com/certificates/JMZV3QY53PN9"
    },
    {
        title : "Basic Artificial Intelligence",
        img : basicAI,
        link :"https://www.dicoding.com/certificates/07Z60LGNWZQR"
    },
    {
        title : "Implementation Machine Learning",
        img : machineLearning,
        link :"https://www.dicoding.com/certificates/NVP7QK30OZR0"
    },
    {
        title : "Android Intermediate",
        img : androidIntermediate,
        link:"https://www.dicoding.com/certificates/L4PQ1E0OQXO1"
    },
    {
        title : "Bangkit Certificate",
        img : bangkit
    },
    {
        title : "Bangkit Studi Independent",
        img : msibBangkit
    },
]

export{MyProjects, AnotherProjects, kelas, services, certificate}
