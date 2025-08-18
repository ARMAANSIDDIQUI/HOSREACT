import { Link } from 'react-router-dom';
// Replace with actual image
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

const speechTherapyContent = {
  imageSrc:[speech1],
  imageAlt: "Speech Therapy Image",
  title: "Speech Therapy at House of Specials",
  subtitle: "Effective communication is essential for independence and social interaction.",
  paragraphs: [
    "At House of Specials, our speech therapy program is designed to help children and adults overcome speech and language challenges, enabling them to express themselves confidently and clearly.",
    "Our experienced speech therapists utilize evidence-based techniques tailored to each individual's unique needs. We focus on improving articulation, language comprehension, and social communication skills, ensuring that each person we work with can connect meaningfully with the world around them.",
    "Why choose House of Specials for speech therapy?",
    "• Personalized Approach: We create customized therapy plans that address the specific needs of each individual.",
    "• Multidisciplinary Team: Our speech therapists collaborate closely with occupational therapists, special educators, and other professionals to provide holistic care.",
    "• Supportive Environment: We foster a nurturing and inclusive atmosphere where individuals feel safe to explore and enhance their communication abilities.",
    "• Proven Results: Our success stories speak for themselves. We have helped countless individuals achieve significant improvements in their speech and language skills.",
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
  // { icon: <FaComments />, label: 'Speech Therapy', path: '/speech-therapy' },
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

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";


import speech1 from "../assets/sensory.jpg";
import ColoredIcon from '../components/ColoredIcon';

const carouselData = [
  {
    image: carousel2,
    heading: "Speech Therapy at House of Specials",
    text: "Empowering individuals to communicate with clarity and confidence.",
    url: "/about",
  },
  {
    image: carousel1,
    heading: "Your Voice Matters",
    text: "We help you find it and amplify it with expert guidance.",
    url: "/contact",
  },
  {
    image: carousel5,
    heading: "Integrated Care Approach",
    text: "Collaborative therapy for holistic communication development.",
    url: "/services",
  },
];

// Speech Therapy Page Component
export default function SpeechTherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...speechTherapyContent} />

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
