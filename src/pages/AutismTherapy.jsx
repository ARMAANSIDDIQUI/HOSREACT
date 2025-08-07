import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

import carousel0 from "../assets/Carousel0.jpg";
import carousel1 from "../assets/Carousel1.jpg";
import carousel2 from "../assets/Carousel2.jpg";
import carousel3 from "../assets/Carousel3.jpg";
import autism2 from "../assets/Carousel4.jpg";
import autism1 from "../assets/autism1.jpg";
import carousel5 from "../assets/Carousel5.jpg";


const autismTherapyContent = {
  imageSrc:[autism1,autism2],
  imageAlt: "Autism Therapy Image",
  title: "Autism Therapy at House of Specials",
  subtitle: "Navigating the world with autism can present unique challenges, but with the right support, every child can thrive.",
  paragraphs: [
    "At House of Specials, our autism therapy program is designed to empower individuals with autism spectrum disorder (ASD) by enhancing their communication, social, and cognitive skills.",
    "Our dedicated team uses evidence-based interventions tailored to each child’s specific needs. Through structured activities and individualized strategies, we aim to improve sensory processing, emotional regulation, and adaptive functioning, helping children unlock their full potential.",
    "Why choose House of Specials for autism therapy?",
    "• Personalized Approach: Customized therapy plans to address the unique needs of every child with ASD.",
    "• Multidisciplinary Team: Collaboration between therapists, special educators, and psychologists for comprehensive care.",
    "• Supportive Environment: An inclusive and safe space that encourages growth and learning.",
    "• Proven Results: Transformative progress in the lives of children and their families.",
  ],
  links: {
    more: "/about",    // adjust these routes if needed
  },
};

import { 
  FaUser, FaHome,FaComments, FaRunning, FaBrain, FaFemale, FaBook, 
  FaMedal, FaMusic, FaSpa, FaSwimmer, FaClipboardList, FaUsers, 
  FaChalkboardTeacher, FaUserFriends, FaChild, FaSchool, FaHandsHelping, 
  FaHeartbeat, FaSun 
} from 'react-icons/fa';

const services = [
  // { icon: <FaChild />, label: 'Autism Therapy', path: '/autism-therapy' },
  { icon: <FaComments />, label: 'Speech Therapy', path: '/speech-therapy' },
  { icon: <FaRunning />, label: 'Occupational Therapy', path: '/occupational-therapy' },

  { icon: <FaFemale />, label: 'Psychological Counseling', path: '/psychological-counselling' },
  { icon: <FaBook />, label: 'Special Education', path: '/special-education' },
  { icon: <FaMedal />, label: 'Dance Therapy', path: '/dance-therapy' },
  { icon: <FaMusic />, label: 'Music Therapy', path: '/music-therapy' },
  { icon: <FaSpa />, label: 'Yoga Therapy', path: '/yoga-therapy' },
  { icon: <FaSwimmer />, label: 'Hydro Therapy', path: '/hydro-therapy' },
  
  { icon: <FaUsers />, label: 'Group Sessions', path: '/group-sessions' },
  { icon: <FaChalkboardTeacher />, label: 'ADL Training', path: '/adl-training' },
  { icon: <FaUserFriends />, label: 'Parent Training', path: '/parent-training' },
  { icon: <FaSchool />, label: 'Teacher Training', path: '/teacher-training' },
  { icon: <FaUser />, label: 'School Training', path: '/school-training' },
  { icon: <FaHandsHelping />, label: 'Social Skill Training', path: '/social-skill-training' },
  { icon: <FaHeartbeat />, label: 'Physiotherapy', path: '/physio-therapy' },
  { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];


export const carouselData = [
  {
    image: carousel1,
    heading: "Progress, Not Perfection",
    text: "Every step forward, no matter how small, is worth celebrating.",
    url: "/parent-training",
  },
  {
    image: carousel2,
    heading: "Be Their Voice",
    text: "Until they can speak for themselves, advocate fiercely.",
    url: "/speech-therapy",
  },
  {
    image: carousel3,
    heading: "Healing Through Movement",
    text: "Therapies like dance and yoga unlock emotional expression.",
    url: "/dance-therapy",
  },
  {
    image: carousel5,
    heading: "Patience Builds Potential",
    text: "Growth may be slow, but it is always happening.",
    url: "/occupational-therapy",
  },
];



export default function AutismPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...autismTherapyContent} />

        {/* Services Icons */}
                <center>
          <h1 className="text-2xl font-bold text-purple-700 mb-6">OUR OTHER SERVICES</h1>
        </center>
<div className="flex flex-wrap justify-center gap-8 mb-16">
  {services.map((service, index) => {
    // Rainbow color palette
    const colors = [
      "text-red-500",
      "text-orange-500",
      "text-yellow-500",
      "text-green-500",
      "text-teal-500",
      "text-blue-500",
      "text-indigo-500",
      "text-purple-500",
      "text-pink-500",
    ];
    const color = colors[index % colors.length];

    return (
      <Link
        key={index}
        to={service.path}
        className="flex flex-col items-center w-32 group"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md transition-all"
        >
          {/* Rotating dotted border */}
                            <div className="absolute inset-0 rounded-full p-[2px] animate-spin-slow"
              style={{ background: "conic-gradient(red, yellow, green, cyan, blue, purple, red)" }}>


          <div className="rounded-full h-full w-full bg-white"></div>
        </div>
          <div className={`relative z-10 text-3xl ${color}`}>
            {service.icon}
          </div>
        </motion.div>
        <span className="mt-3 text-sm font-medium text-gray-800 text-center group-hover:underline">
          {service.label}
        </span>
      </Link>
    );
  })}
</div>

      </div>
      <FooterCommon />
    </div>
  );
}
