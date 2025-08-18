import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
import ColoredIcon from '../components/ColoredIcon';
// 👣 Dance therapy content
const danceTherapyContent = {
  // imageSrc:[dance],
  imageAlt: "Dance Therapy Image",
  title: "Dance Therapy at House of Specials",
  subtitle: "Movement is a powerful way to express emotions and foster connection.",
  paragraphs: [
    "At House of Specials, our dance therapy program combines creativity and therapeutic techniques to promote emotional, social, and physical well-being.",
    "Led by experienced therapists, sessions encourage self-expression and build confidence while improving motor skills and coordination. Dance therapy provides a joyful and inclusive space for growth and healing.",
    "Why choose House of Specials for dance therapy?",
    "• Personalized Approach: Activities designed to meet each individual’s abilities and goals.",
    "• Multidisciplinary Team: Collaboration with therapists and educators for comprehensive care.",
    "• Inclusive Environment: A supportive setting that nurtures creativity and self-esteem.",
    "• Proven Results: Enhanced emotional expression and social engagement.",
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
import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";

import dance from "../assets/dance.jpg";

const services = [
  { icon: <FaChild />, label: 'Autism Therapy', path: '/autism-therapy' },
  { icon: <FaComments />, label: 'Speech Therapy', path: '/speech-therapy' },
  { icon: <FaRunning />, label: 'Occupational Therapy', path: '/occupational-therapy' },

  { icon: <FaFemale />, label: 'Psychological Counseling', path: '/psychological-counselling' },
  { icon: <FaBook />, label: 'Special Education', path: '/special-education' },
  // { icon: <FaMedal />, label: 'Dance Therapy', path: '/dance-therapy' },
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

//Carousel content (reuse or replace with dance-specific slides)
export const carouselData = [
  {
    image: carousel5,
    heading: "Every Step Counts",
    text: "The smallest step forward is still a step toward growth.",
    url: "/adl-training",
  },
  {
    image: carousel3,
    heading: "Kindness is a Language",
    text: "It speaks louder than words and reaches every heart.",
    url: "/group-sessions",
  },
  {
    image: carousel2,
    heading: "Create. Express. Heal.",
    text: "Art and music help express what words cannot.",
    url: "/music-therapy",
  },
  {
    image: carousel4,
    heading: "Learning Without Limits",
    text: "Special education is about unlocking every child's potential.",
    url: "/special-education",
  },
];


//Final component
export default function DanceTherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...danceTherapyContent} />

        {/* Services Icons */}
                <center>
          <h1 className="text-2xl font-bold text-purple-700 mb-6">OUR OTHER SERVICES</h1>
        </center>
        <div className="flex flex-wrap justify-center gap-8 text-purple-700 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="flex flex-col items-center group relative w-32"
            >
              {/* Use extracted component */}
              <ColoredIcon icon={service.icon} index={index} />

              <span className="mt-2 text-sm font-medium text-gray-800 group-hover:underline text-center">
                {service.label}
              </span>
            </Link>
          ))}
        </div>



      </div>
      <FooterCommon />
    </div>
  );
}
