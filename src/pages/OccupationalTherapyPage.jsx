import { Link } from 'react-router-dom';
// Replace if needed
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

//Occupational Therapy Content
const occupationalTherapyContent = {
  imageSrc:[occu2, occu1],
  imageAlt: "Occupational Therapy Image",
  title: "Occupational Therapy at House of Specials",
  subtitle: "Helping individuals gain independence through daily life skills and motor development.",
  paragraphs: [
    "At House of Specials, we understand the importance of everyday activities in building independence and confidence. Our occupational therapy program is dedicated to helping children and adults develop the skills they need to perform daily tasks and participate fully in life.",
    "Our compassionate and experienced occupational therapists work with individuals with a variety of disabilities, including Autism, ADHD, Cerebral Palsy, Down Syndrome, and Intellectual Disabilities. We focus on enhancing fine and gross motor skills, improving sensory processing, and developing daily living skills in a personalized and engaging manner.",
    "Why choose House of Specials for occupational therapy?",
    "• Customized Therapy Plans: We design individualized therapy plans tailored to each person's unique needs and goals.",
    "• Experienced Team: Our occupational therapists are highly trained and passionate about helping individuals achieve their fullest potential.",
    "• Integrated Approach: We collaborate with special educators, speech therapists, and other professionals to provide comprehensive care.",
    "• Nurturing Environment: Our therapy sessions take place in a supportive and encouraging atmosphere where individuals feel safe to explore and grow.",
    "• Skill Development: We emphasize practical skills that enhance independence, from dressing and feeding to writing and playing.",
    "• Personalized Care: We build strong relationships with our clients and their families, ensuring that therapy is a collaborative and personalized experience.",
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
  // { icon: <FaRunning />, label: 'Occupational Therapy', path: '/occupational-therapy' },

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

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";


import occu1 from "../assets/occupational.jpg";

import occu2 from "../assets/occupational2.jpg";

export const carouselData = [
  {
    image: carousel4,
    heading: "Build Confidence",
    text: "Confidence comes not from always being right but from not fearing to be wrong.",
    url: "/group-sessions",
  },
  {
    image: carousel2,
    heading: "Every Effort Counts",
    text: "Small acts, when multiplied by millions of people, can transform the world. – Howard Zinn",
    url: "/parent-training",
  },
  {
    image: carousel1,
    heading: "Strength in Unity",
    text: "Alone we can do so little; together we can do so much. – Helen Keller",
    url: "/teacher-training",
  },
];


// 🧠 Occupational Therapy Page Component
export default function OccupationalTherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...occupationalTherapyContent} />

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
