import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';


const yogaTherapyContent = {
  imageSrc:[yoga1, yoga2],
  imageAlt: "Yoga Therapy Image",
  title: "Yoga Therapy at House of Specials",
  subtitle: "Yoga offers a holistic path to physical and emotional balance.",
  paragraphs: [
    "At House of Specials, our yoga therapy program helps individuals enhance flexibility, focus, and self-regulation through gentle and accessible practices.",
    "Our skilled instructors adapt yoga techniques to suit all abilities, promoting relaxation, mindfulness, and overall well-being in a nurturing environment.",
    "Why choose House of Specials for yoga therapy?",
    "• Personalized Approach: Customized yoga practices based on individual needs and abilities.",
    "• Multidisciplinary Team: Coordinated care with therapists and educators for optimal outcomes.",
    "• Calm Environment: A peaceful setting that fosters self-awareness and growth.",
    "• Proven Results: Improvements in focus, emotional regulation, and physical health.",
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
  //{ icon: <FaSpa />, label: 'Yoga Therapy', path: '/yoga-therapy' },
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
import ColoredIcon from '../components/ColoredIcon';

import yoga1 from "../assets/yoga1.jpg";

import yoga2 from "../assets/yoga2.jpg";

export const carouselData = [
  {
    image: carousel1,
    heading: "Be the Light",
    text: "Nothing can dim the light that shines from within. – Maya Angelou",
    url: "/about",
  },
  {
    image: carousel3,
    heading: "Patience & Progress",
    text: "Progress is not achieved by luck or accident, but by working on yourself daily. – Epictetus",
    url: "/adl-training",
  },
  {
    image: carousel2,
    heading: "Unleash Possibilities",
    text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. – Jamie Paolinetti",
    url: "/sensory-integration",
  },
];

// Component export
export default function YogaTherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...yogaTherapyContent} />

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
