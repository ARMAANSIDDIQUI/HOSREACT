import { Link } from 'react-router-dom';
// Replace with actual image if needed
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
import { 
  FaUser, FaHome,FaComments, FaRunning, FaBrain, FaFemale, FaBook, 
  FaMedal, FaMusic, FaSpa, FaSwimmer, FaClipboardList, FaUsers, 
  FaChalkboardTeacher, FaUserFriends, FaChild, FaSchool, FaHandsHelping, 
  FaHeartbeat, FaSun 
} from 'react-icons/fa';

// Content for the Physiotherapy section.
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

import ColoredIcon from '../components/ColoredIcon';

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
  //{ icon: <FaHeartbeat />, label: 'Physiotherapy', path: '/physio-therapy' },
  { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";


import physio1 from "../assets/physio.jpg";

import physio2 from "../assets/physio2.jpg";

// This array defines the content for the carousel at the top of the page.
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


export default function PhysiotherapyPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* Therapy Info Section */}
        {/* The `...physiotherapyContent` passes all properties of the object as individual props to the child component. */}
        <TherapyInfoSection {...physiotherapyContent} />

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
