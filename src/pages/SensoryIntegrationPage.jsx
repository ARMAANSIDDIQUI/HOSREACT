import { Link } from 'react-router-dom';
import sharedImage from "../images/121178.jpg"; // Replace if needed
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

const sensoryIntegrationContent = {
  imageSrc:[sensory1, sensory2],
  imageAlt: "Sensory Integration Therapy Image",
  title: "Sensory Integration at House of Specials",
  subtitle: "Helping children manage sensory inputs for better daily functioning.",
  paragraphs: [
    "Sensory integration therapy is designed to help individuals who have difficulty processing and responding to sensory information from their environment. The goal of sensory integration is to improve how the brain interprets and organizes sensory inputs—like sights, sounds, textures, and movements—so that a person can respond more appropriately and comfortably to everyday experiences.",
    "At House of Specials, our sensory integration program focuses on helping children with disabilities better manage and react to sensory information. Through engaging activities and tailored exercises, we aim to enhance each child’s ability to process sensory inputs, which can improve their overall daily functioning and quality of life.",
    "Why choose House of Specials for sensory integration?",
    "• Personalized Therapy: We create individualized therapy plans based on each child’s unique sensory needs.",
    "• Skilled Therapists: Our occupational therapists are experienced in using sensory integration techniques to support children’s development.",
    "• Interactive Activities: We use a range of enjoyable and stimulating activities that help children improve their sensory processing in a fun way.",
    "• Comprehensive Care: Sensory integration therapy is combined with other therapeutic services to provide well-rounded support.",
    "• Safe and Supportive Setting: Our environment is designed to be comfortable and encouraging, making therapy a positive experience for children.",
  ],
  links: {
    more: "/about",
  },
};

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
  // { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];

import carousel0 from "../images/Carousel0.jpg";
import carousel1 from "../images/Carousel1.jpg";
import carousel2 from "../images/Carousel2.jpg";
import carousel3 from "../images/Carousel3.jpg";
import carousel4 from "../images/Carousel4.jpg";
import carousel5 from "../images/carousel5.jpg";


import sensory1 from "../images/sensory.jpg";

import sensory2 from "../images/sensory2.jpg";

const carouselData = [
  {
    image: carousel1,
    heading: "Understanding Sensory Needs",
    text: "Creating a world that feels just right for every child.",
    url: "/about",
  },
  {
    image: carousel4,
    heading: "Interactive & Personalized Therapy",
    text: "Helping children thrive through sensory exploration.",
    url: "/contact",
  },
  {
    image: carousel3,
    heading: "Supporting Sensory Development",
    text: "Comfortable environments and expert care for every child.",
    url: "/services",
  },
];

//Sensory Integration Page Component
export default function SensoryIntegrationPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...sensoryIntegrationContent} />

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
