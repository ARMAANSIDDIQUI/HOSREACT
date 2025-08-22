import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

// This object holds the content for the hydrotherapy section.
const hydroTherapyContent = {
  imageSrc:[music1],
  imageAlt: "Musictherapy Image",
  title: "Musictherapy at House of Specials",
  subtitle: "Music transcends barriers and connects us on a profound level. At House of Specials, our music therapy program harnesses the power of sound to improve cognitive, emotional, and social skills.",
  paragraphs: [
    "Through singing, instrument play, and rhythm-based activities, our trained therapists help individuals develop communication and motor skills while fostering a sense of accomplishment and joy.",
    "Through singing, instrument play, and rhythm-based activities, our trained therapists help individuals develop communication and motor skills while fostering a sense of accomplishment and joy.",
    "Why choose House of Specials for music therapy?",
    "• Personalized Approach: Tailored sessions that align with individual preferences and needs.",
    "• Multidisciplinary Team: Integrated care with other therapeutic programs.",
    "• Welcoming Atmosphere: A creative and supportive space for exploration and growth.",
    "• Proven Results: Meaningful progress in communication and emotional well-being.",
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
import ColoredIcon from '../components/ColoredIcon';

// This array defines the list of services for the component.
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

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";


import music1 from "../assets/music1.jpg";


// This array defines the content for the carousel at the top of the page.
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



// This is the main page component for the Hydrotherapy section.
export default function MusicTherapyPage() {
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