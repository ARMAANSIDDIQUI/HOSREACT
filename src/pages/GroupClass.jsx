import { Link } from 'react-router-dom';
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

import ColoredIcon from '../components/ColoredIcon';

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
  
  // { icon: <FaUsers />, label: 'Group Sessions', path: '/group-sessions' },
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
import carousel5 from "../assets/physio.jpg";

const groupClassesContent = {
  imageSrc:[carousel3],
  imageAlt: "Group Classes Image",
  title: "Group Sessions",
  subtitle: "Learning together, growing together",
  paragraphs: [
    "We understand the importance of social interaction and peer learning in a child's development. Our group classes are designed to provide children with disabilities the opportunity to learn, grow, and connect with others in a supportive and structured environment.",
    "In our group classes, children engage in a variety of activities that promote both academic and social skills. From interactive lessons to group games, music sessions, and creative arts, each class is carefully planned to encourage participation and collaboration. These sessions are not just about learning; they’re about building friendships, practicing communication, and developing a sense of belonging within a community.",
    "Why choose House of Specials for group classes?",
    "• Inclusive Environment: Our group classes are welcoming and inclusive, designed to meet the needs of children with diverse abilities.",
    "• Skilled Educators: Our team of experienced teachers and therapists facilitate the classes, ensuring that each child receives the attention and support they need to thrive.",
    "• Engaging Activities: We offer a wide range of activities that are both educational and fun, helping children stay engaged and motivated.",
    "• Focus on Social Skills: Group classes provide a natural setting for children to practice social interactions, communication, and teamwork.",
    "• Nurturing Community: We foster a warm and supportive community where children feel safe, valued, and encouraged to express themselves.",
    "At House of Specials, our group classes are about more than just education—they’re about creating a space where children can learn from each other, form meaningful connections, and grow together in a positive and nurturing environment.",
  ],
  links: {
    more: "/about",
  },
};


export const carouselData = [
  {
    image: carousel1,
    heading: "Joy in the Journey",
    text: "Growth happens not in leaps, but in love, patience, and small steps.",
    url: "/parent-training",
  },
  {
    image: carousel4,
    heading: "Empower with Education",
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    url: "/teacher-training",
  },
  {
    image: carousel5,
    heading: "Stronger Together",
    text: "When families, teachers, and therapists unite, children thrive.",
    url: "/group-sessions",
  },
  {
    image: carousel2,
    heading: "Build with Hope",
    text: "Hope is the first step toward any possibility.",
    url: "/daycare",
  },
];


// 📄 Group Classes Page Component
export default function GroupClassesPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* Group Classes Info */}
        <TherapyInfoSection {...groupClassesContent} />
        {/* Services Grid */}
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
