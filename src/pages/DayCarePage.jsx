import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

// 📘 Daycare Content
const daycareContent = {
  imageSrc:[day1,day2],
  imageAlt: "Daycare Image",
  title: "Daycare Facility at House of Specials",
  subtitle: "A safe, nurturing, and inclusive space for every child to thrive.",
  paragraphs: [
    "At House of Specials, we understand the importance of providing a safe, nurturing, and supportive environment for children. Our daycare facility is designed to offer a caring space where children can thrive while receiving the individualized attention and care they require.",
    "Our daycare program is more than just a place for children to spend their day; it’s a vibrant and engaging environment where children can learn, play, and develop new skills. With a focus on safety, inclusion, and holistic development, we provide a structured routine that includes a mix of educational activities, therapeutic sessions, and social interaction.",
    "Why Choose House of Specials for Daycare?",
    "• Safe and Secure: Safety is our top priority. Our facility is designed with the highest safety standards in mind, ensuring that children are cared for in a secure and comfortable environment.",
    "• Structured Environment: We offer a well-organized routine that includes a balance of learning, play, rest, and therapy, helping children develop a sense of stability and security.",
    "• Inclusive Atmosphere: We foster an inclusive environment where every child feels valued and included, promoting social interaction and peer relationships.",
    "• Therapeutic Support: Our daycare program integrates therapeutic activities, such as occupational therapy, speech therapy, and sensory integration, into the daily routine, providing ongoing support for each child’s development.",
    "• Engaging Activities: We provide a variety of engaging activities tailored to each child’s abilities and interests, including arts and crafts, music, outdoor play, and more.",
    "• Experienced Staff: Our team includes experienced caregivers, therapists, and educators who are dedicated to creating a positive and enriching experience for every child.",
    "• Parental Peace of Mind: We maintain open communication with parents, keeping them informed about their child’s day and progress, and ensuring they feel confident in the care their child is receiving.",
    "Our daycare facility is a place where children can feel safe, happy, and supported as they grow and develop in a nurturing and inclusive environment.",
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
  { icon: <FaHeartbeat />, label: 'Physiotherapy', path: '/physio-therapy' },
  { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  // { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];

import ColoredIcon from '../components/ColoredIcon';
import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";

import day1 from "../assets/daycare1.jpg";
import day2 from "../assets/daycare2.jpg";

export const carouselData = [
  {
    image: carousel3,
    heading: "Progress Over Perfection",
    text: "Every little step forward is a victory worth celebrating.",
    url: "/occupational-therapy",
  },
  {
    image: carousel1,
    heading: "Believe in Possibilities",
    text: "When you change the way you look at things, the things you look at change.",
    url: "/special-education",
  },
  {
    image: carousel2,
    heading: "Harmony in Sound",
    text: "Music speaks what cannot be expressed and heals the heart.",
    url: "/music-therapy",
  },
  {
    image: carousel5,
    heading: "Inclusion is Innovation",
    text: "A truly inclusive world is a more creative, compassionate one.",
    url: "/about",
  },
];


// 🌞 Daycare Page Component
export default function DaycarePage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...daycareContent} />

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
