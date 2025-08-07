import { Link } from 'react-router-dom';
import sharedImage from "../images/121178.jpg";
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterMain from '../components/FooterMain';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

const psychologicalCounsellingContent = {
  imageSrc:[psych],
  imageAlt: "Psychological Counselling Image",
  title: "Psychological Counselling at House of Specials",
  subtitle:
    "Mental well-being is the foundation of a fulfilling life. At House of Specials, our psychological counselling services provide individuals with the tools and support they need to navigate life’s challenges and enhance emotional resilience.",
  paragraphs: [
    "Our skilled psychologists offer a compassionate, non-judgmental space to explore thoughts and feelings. Using evidence-based approaches, we help individuals build coping strategies, improve relationships, and achieve personal growth.",
    "Why choose House of Specials for psychological counselling?",
    "• Personalized Approach: Therapy sessions tailored to each individual’s needs and goals.",
    "• Multidisciplinary Team: Integration with other therapeutic services for holistic support.",
    "• Safe and Confidential: A secure environment for open and honest communication.",
    "• Proven Results: Positive transformations in mental health and well-being.",
  ],
  links: {
    more: "/about",
    faq: "/faq",
    top: "#top",
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

  //{ icon: <FaFemale />, label: 'Psychological Counseling', path: '/psychological-counselling' },
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

import carousel0 from "../images/Carousel0.jpg";
import carousel1 from "../images/Carousel1.jpg";
import carousel2 from "../images/Carousel2.jpg";
import carousel3 from "../images/Carousel3.jpg";
import carousel4 from "../images/Carousel4.jpg";
import carousel5 from "../images/carousel5.jpg";


import psych from "../images/psychological.jpg";

import hydro2 from "../images/hydro2.jpg";
import { Carousel } from 'react-responsive-carousel';

const carouselData = [
  {
    image: carousel1,
    heading: "Empower Through Expression",
    text: "When words fail, music and dance speak.",
    url: "/music-therapy",
  },
  {
    image: carousel3,
    heading: "Strength in Stillness",
    text: "Yoga teaches us to cure what need not be endured.",
    url: "/yoga-therapy",
  },
  {
    image: carousel5,
    heading: "Support Builds Confidence",
    text: "With the right support, every child can shine.",
    url: "/parent-training",
  },
];


export default function PsychologicalCouncellingPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...psychologicalCounsellingContent} />

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
      <FooterMain />
    </div>
  );
}
