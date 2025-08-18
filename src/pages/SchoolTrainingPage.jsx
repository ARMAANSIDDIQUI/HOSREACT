import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

//School Training Content
const schoolTrainingContent = {
  imageSrc:[school],
  imageAlt: "School Training Image",
  title: "School Training at House of Specials",
  subtitle: "Preparing children for confident and successful school transitions.",
  paragraphs: [
    "We understand that transitioning into a school environment can be both exciting and challenging for children with special needs. Our school training program is specifically designed to prepare these children for the demands of attending school, ensuring they feel confident, supported, and ready to succeed in a mainstream or special education setting.",
    "Our school training focuses on equipping children with the skills they need to thrive in a classroom environment. This includes developing social interactions, communication, following routines, and managing behavior in a group setting. We work closely with each child to build the foundational skills necessary for a smooth transition into school life.",
    "Why Choose House of Specials for School Training?",
    "• Individualized Preparation: We tailor our training to the specific needs and abilities of each child, ensuring they receive the targeted support required to succeed in a school setting.",
    "• Focus on Social Skills: Our program emphasizes the development of social interactions, helping children learn to communicate effectively with peers and teachers, make friends, and participate in group activities.",
    "• Behavioral Readiness: We provide strategies for managing classroom behavior, teaching children how to follow routines, stay focused, and adapt to the structure of a school day.",
    "• Confidence Building: By simulating school scenarios, we help children gain the confidence they need to face new challenges, reducing anxiety and fostering a positive attitude toward school.",
    "• Collaboration with Schools: We work closely with schools to ensure a seamless transition, providing insights and strategies to teachers that will support the child’s continued success.",
    "• Proven Success: Many children who have completed our school training program have transitioned smoothly into their school environments, thriving academically and socially.",
    "Our school training program is about academic preparation, ensuring that each child feels equipped, confident, and ready to embark on their educational journey with the support they need to succeed.",
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
  //{ icon: <FaUser />, label: 'School Training', path: '/school-training' },
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
import school from "../assets/school.jpg";


const carouselData = [
  {
    image: carousel1,
    heading: "Ready for School",
    text: "We prepare children with special needs for confident school transitions.",
    url: "/about",
  },
  {
    image: carousel5,
    heading: "Classroom Confidence",
    text: "Building the skills to thrive academically and socially.",
    url: "/contact",
  },
  {
    image: carousel2,
    heading: "Partnering with Schools",
    text: "Support for both children and educators during the transition.",
    url: "/services",
  },
];

//School Training Page Component
export default function SchoolTrainingPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...schoolTrainingContent} />

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
