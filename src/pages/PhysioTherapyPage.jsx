import { Link } from 'react-router-dom';
// Replace with actual image if needed
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
// 🧠 Physiotherapy Content
const physiotherapyContent = {
  imageSrc:[physio1,physio2],
  imageAlt: "Physiotherapy Image",
  title: "Physiotherapy at House of Specials",
  subtitle: "Empowering movement through personalized therapy",
  paragraphs: [
    "At House of Specials, we understand that physical development is crucial for children with disabilities to lead active and independent lives. Our physiotherapy program is designed to help children improve their motor skills, strength, balance, and coordination through personalized and engaging exercises.",
    "Our experienced physiotherapists work closely with each child to create a customized therapy plan that addresses their specific physical challenges. Through a variety of fun and stimulating activities, we aim to enhance each child’s physical abilities and overall well-being.",
    "Why choose House of Specials for physiotherapy?",
    "• Tailored Therapy Plans: We develop individualized therapy plans that cater to each child’s unique physical needs and goals.",
    "• Experienced Therapists: Our physiotherapists are skilled in working with children with diverse physical disabilities and are dedicated to helping them achieve their best.",
    "• Engaging Activities: We incorporate playful and motivating exercises that keep children interested and active during therapy sessions.",
    "• Integrated Approach: Our physiotherapy program is part of a comprehensive care plan that includes other therapeutic services to support holistic development.",
    "• Nurturing Environment: We provide a safe and encouraging space where children feel comfortable and motivated to improve their physical skills.",
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
  //{ icon: <FaHeartbeat />, label: 'Physiotherapy', path: '/physio-therapy' },
  { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];

import carousel0 from "../images/Carousel0.jpg";
import carousel1 from "../images/Carousel1.jpg";
import carousel2 from "../images/Carousel2.jpg";
import carousel3 from "../images/Carousel3.jpg";
import carousel4 from "../images/Carousel4.jpg";
import carousel5 from "../images/Carousel5.jpg";


import physio1 from "../images/physio.jpg";

import physio2 from "../images/physio2.jpg";


const carouselData = [
  {
    image: carousel3,
    heading: "Beyond Definitions",
    text: "No disability or dictionary definition can define who you are.",
    url: "/psychological-counselling",
  },
  {
    image: carousel1,
    heading: "Teach the Way They Learn",
    text: "If they can't learn the way we teach, we teach the way they learn.",
    url: "/teacher-training",
  },
  {
    image: carousel4,
    heading: "Every Step Counts",
    text: "Progress is progress, no matter how small.",
    url: "/physio-therapy",
  },
  {
    image: carousel2,
    heading: "Strength in Stillness",
    text: "Yoga teaches us to cure what need not be endured.",
    url: "/yoga-therapy",
  },
];


//Physiotherapy Page Component
export default function PhysiotherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* Therapy Info Section */}
        <TherapyInfoSection {...physiotherapyContent} />

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
