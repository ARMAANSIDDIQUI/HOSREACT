import { Link } from 'react-router-dom';
// Replace if needed
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

const socialSkillContent = {
  imageSrc:[social1, social2],
  imageAlt: "Social Skills Training Image",
  title: "Social Skills Training at House of Specials",
  subtitle: "Helping individuals develop confidence and meaningful relationships.",
  paragraphs: [
    "At House of Specials, we understand the importance of social skills in building confidence and fostering meaningful relationships. Our social skills training program is designed to help children and adults with disabilities develop the interpersonal skills they need to navigate social situations successfully.",
    "Our group-based approach offers a supportive environment where participants can practice and enhance their social skills through a variety of engaging activities. We organize outings to restaurants, movies, parks, and salons, providing real-world experiences that help individuals learn and grow. Additionally, our program includes group games, music classes, and academic activities, ensuring a well-rounded development of social competencies.",
    "Why choose House of Specials for social skills training?",
    "• Real-World Experiences: Our outings to various locations give participants practical opportunities to apply their social skills in different settings.",
    "• Engaging Activities: From group games to music classes, we offer a diverse range of activities that make learning social skills fun and effective.",
    "• Supportive Group Environment: Our group-based sessions provide a safe and encouraging space for individuals to interact and learn from each other.",
    "• Holistic Development: We focus not only on social skills but also on enhancing communication, teamwork, and self-confidence.",
    "• Expert Guidance: Our experienced staff members are dedicated to helping each participant reach their full potential in a nurturing and inclusive atmosphere.",
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
  //{ icon: <FaHandsHelping />, label: 'Social Skill Training', path: '/social-skill-training' },
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


import social1 from "../assets/social.jpg";

import social2 from "../assets/adl.jpg";
import ColoredIcon from '../components/ColoredIcon';
const carouselData = [
  {
    image: carousel1,
    heading: "Building Relationships Through Interaction",
    text: "Empowering individuals with the skills to connect confidently.",
    url: "/about",
  },
  {
    image: carousel2,
    heading: "Engaging Activities for Real-World Practice",
    text: "From games to outings, every moment is a chance to grow.",
    url: "/contact",
  },
  {
    image: carousel4,
    heading: "Supportive Social Skills Environment",
    text: "Fostering communication, empathy, and cooperation.",
    url: "/services",
  },
];

// 🧠 Social Skills Training Page Component
export default function SocialSkillTrainingPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...socialSkillContent} />

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
