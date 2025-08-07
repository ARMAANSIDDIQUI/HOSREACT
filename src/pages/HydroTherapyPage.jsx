import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

// Hydrotherapy content
const hydroTherapyContent = {
  imageSrc:[hydro1, hydro2],
  imageAlt: "Hydrotherapy Image",
  title: "Hydrotherapy at House of Specials",
  subtitle: "Water-based therapy offers a unique and effective way to improve physical and sensory functioning.",
  paragraphs: [
    "At House of Specials, our hydrotherapy program provides a supportive environment for individuals to build strength, coordination, and confidence.",
    "Guided by trained therapists, sessions use the properties of water to reduce stress on joints, improve mobility, and enhance sensory integration.",
    "Why choose House of Specials for hydrotherapy?",
    "• Personalized Approach: Individualized plans that cater to specific physical and sensory needs.",
    "• Multidisciplinary Team: Collaboration with physiotherapists and occupational therapists for holistic care.",
    "• Safe Environment: A controlled and supportive space for therapy.",
    "• Proven Results: Significant improvements in physical abilities and sensory processing.",
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
  // { icon: <FaSwimmer />, label: 'Hydro Therapy', path: '/hydro-therapy' },
  
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

import carousel0 from "../images/Carousel0.jpg";
import carousel1 from "../images/Carousel1.jpg";
import carousel2 from "../images/Carousel2.jpg";
import carousel3 from "../images/Carousel3.jpg";
import carousel4 from "../images/Carousel4.jpg";
import carousel5 from "../images/Carousel5.jpg";


import hydro1 from "../images/hydro1.jpg";

import hydro2 from "../images/hydro2.jpg";

export const carouselData = [
  {
    image: carousel1,
    heading: "Every Step Counts",
    text: "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    url: "/services",
  },
  {
    image: carousel2,
    heading: "Unleash Potential",
    text: "Children are not things to be molded, but people to be unfolded. – Jess Lair",
    url: "/about",
  },
  {
    image: carousel4,
    heading: "Possibilities Ahead",
    text: "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    url: "/contact",
  },
];



export default function HydroTherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...hydroTherapyContent} />

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
