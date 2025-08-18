import { Link } from 'react-router-dom';


import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterMain from '../components/FooterMain';
import CustomCarousel from '../components/Carousel';

import ColoredIcon from "../components/ColoredIcon";

// const tags = [
//   "Speech & language therapy", "Speech therapy for kids", "Speech therapist for kids near me", "speech therapy centers",
//   "Speech therapy in moradabad", "", "Best speech therapist near me", "Speech therapy center near me",
//   "Best speech therapist in hyderabad", "Best speech therapist", "Speech therapy in vijayawada", "Online speech therapy cost",
//   "Best children's speech therapist", "Best speech pathologist near me", "Online speech pathologist", "Speech therapy in delhi",
//   "Best speech therapist in delhi", "Best speech therapist in vijayawada", "Speech pathology in online",
//   "Occupational therapy centre near me", "Occupational therapy for kids", "ABA therapy", "ABA therapy near me",
//   "ABA therapy for autism", "Child psychologist near me", "Best child psychologist near me", "Online child psychologist",
//   "Special education centers", "Special education therapist", "Autism therapy", "Autism therapy centre in hyderabad",
//   "Autism Therapy center", "Hydro therapy", "Hydro therapy near me", "Hydro therapy centers near me"
// ];
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
  { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];


import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";

const carouselData = [
  {
    image: carousel0,
    heading: "Celebrate Neurodiversity",
    text: "The world would be a dull place if every mind worked the same.",
    url: "/autism-therapy",
  },
  {
    image: carousel2,
    heading: "Beyond Definitions",
    text: "No disability or dictionary definition can define who you are.",
    url: "/psychological-counselling",
  },
  {
    image: carousel4,
    heading: "A Different Ability",
    text: "Autism is not a disability, it’s a different ability.",
    url: "/special-education",
  },
  {
    image: carousel3,
    heading: "Teach the Way They Learn",
    text: "If they can't learn the way we teach, we teach the way they learn.",
    url: "/teacher-training",
  },
  {
    image: carousel5,
    heading: "Every Step Counts",
    text: "Progress is progress, no matter how small.",
    url: "/physio-therapy",
  },
];



export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">

        {/* Services Icons */}
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



        {/* Tags Section
        <div className="bg-white p-6 rounded-2xl shadow border max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">#Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Link key={idx} to="/" className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-800 px-3 py-1 rounded-full border border-purple-200">
                {tag}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
      <FooterMain />
    </div>
  );
}
