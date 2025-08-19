import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
// This object holds the content for the Sensory Integration section.
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

// This array defines the services to be displayed.
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

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";

import ColoredIcon from '../components/ColoredIcon';

import sensory1 from "../assets/sensory.jpg";

import sensory2 from "../assets/sensory2.jpg";

// This array defines the content for the carousel at the top of the page.
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

export default function SensoryIntegrationPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* The `...sensoryIntegrationContent` passes all properties of the object as individual props to the child component. */}
        <TherapyInfoSection {...sensoryIntegrationContent} />

        {/* Services Icons */}
                <center>
          <h1 className="text-2xl font-bold text-purple-700 mb-6">OUR OTHER SERVICES</h1>
        </center>
        <div className="flex flex-wrap justify-center gap-8 text-purple-700 mb-16">
          {/* The `map` function iterates over the `services` array to dynamically create a grid of links. */}
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="flex flex-col items-center group relative w-32"
            >
              {/* This component displays a colored and animated icon for each service. */}
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
