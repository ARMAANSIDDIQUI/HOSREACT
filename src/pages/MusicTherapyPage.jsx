import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
import { 
  FaUser, FaHome,FaComments, FaRunning, FaBrain, FaFemale, FaBook, 
  FaMedal, FaMusic, FaSpa, FaSwimmer, FaClipboardList, FaUsers, 
  FaChalkboardTeacher, FaUserFriends, FaChild, FaSchool, FaHandsHelping, 
  FaHeartbeat, FaSun 
} from 'react-icons/fa';

const services = [
  { icon: <FaChild />, label: 'Autism Therapy', path: '/autism-therapy' },
  { icon: <FaComments />, label: 'Speech Therapy', path: '/speech-therapy' },
  { icon: <FaRunning />, label: 'Occupational Therapy', path: '/occupational-therapy' },

  { icon: <FaFemale />, label: 'Psychological Counseling', path: '/psychological-counselling' },
  { icon: <FaBook />, label: 'Special Education', path: '/special-education' },
  { icon: <FaMedal />, label: 'Dance Therapy', path: '/dance-therapy' },
  // { icon: <FaMusic />, label: 'Music Therapy', path: '/music-therapy' },
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

// 🎶 Music therapy content
const musicTherapyContent = {
  imageSrc:[music1],
  imageAlt: "Music Therapy Image",
  title: "Music Therapy at House of Specials",
  subtitle: "Music transcends barriers and connects us on a profound level.",
  paragraphs: [
    "At House of Specials, our music therapy program harnesses the power of sound to improve cognitive, emotional, and social skills.",
    "Through singing, instrument play, and rhythm-based activities, our trained therapists help individuals develop communication and motor skills while fostering a sense of accomplishment and joy.",
    "Why choose House of Specials for music therapy?",
    "• Personalized Approach: Tailored sessions that align with individual preferences and needs.",
    "• Multidisciplinary Team: Integrated care with other therapeutic programs.",
    "• Welcoming Atmosphere: A creative and supportive space for exploration and growth.",
    "• Proven Results: Meaningful progress in communication and emotional well-being.",
  ],
  links: {
    more: "/about",
  },
};

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";


import music1 from "../assets/music1.jpg";


export const carouselData = [
  {
    image: carousel3,
    heading: "Celebrate Strength",
    text: "Strength grows in the moments when you think you can’t go on but you keep going anyway.",
    url: "/autism-therapy",
  },
  {
    image: carousel2,
    heading: "Shine Bright",
    text: "There is a crack in everything, that’s how the light gets in. – Leonard Cohen",
    url: "/special-education",
  },
  {
    image: carousel4,
    heading: "Break Barriers",
    text: "Don't let what you can't do stop you from doing what you can do. – John Wooden",
    url: "/sensory-integration",
  },
];

export default function MusicTherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...musicTherapyContent} />

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
