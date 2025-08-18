import { Link } from 'react-router-dom';
// Replace with actual image
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
const teacherTrainingContent = {
  imageSrc:[teacher1,teacher2],
  imageAlt: "Teacher Training",
  title: "Teacher Training at House of Specials",
  subtitle: "Empowering educators to build inclusive classrooms",
  paragraphs: [
    "Empowering educators is key to creating an inclusive and supportive learning environment for children with disabilities. Our teacher training program is designed to equip educators with the knowledge, skills, and strategies they need to effectively support and teach children with diverse learning needs.",
    "Our training sessions cover a wide range of topics, including understanding different disabilities, implementing inclusive teaching practices, behavior management, and adapting curriculum to meet individual needs. We focus on providing practical, hands-on strategies that teachers can immediately apply in their classrooms to create a more inclusive and effective learning experience for every child.",
    "Why choose House of Specials for teacher training?",
    "• Expert-Led Sessions: Our training is conducted by experienced professionals who specialize in special education and child development, ensuring high-quality instruction.",
    "• Customized Content: We tailor our training programs to the specific needs of your institution, addressing the unique challenges and goals of your teaching staff.",
    "• Interactive and Practical: Our sessions are designed to be engaging and practical, with a focus on real-world applications that teachers can use in their classrooms.",
    "• Focus on Inclusion: We emphasize strategies that promote inclusion, helping teachers create an environment where all students feel valued and supported.",
    "• Ongoing Support: Beyond the training sessions, we provide continued support and resources to help teachers implement what they’ve learned.",
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
  //{ icon: <FaSchool />, label: 'Teacher Training', path: '/teacher-training' },
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


import teacher1 from "../assets/teacher1.jpg";

import teacher2 from "../assets/teacher2.jpg";

import ColoredIcon from '../components/ColoredIcon';
const carouselData = [
  {
    image: carousel1,
    heading: "Train to Inspire",
    text: "Empowering teachers to support every learner.",
    url: "/about",
  },
  {
    image: carousel2,
    heading: "Inclusive Classrooms Start Here",
    text: "Professional development tailored to your needs.",
    url: "/contact",
  },
  {
    image: carousel3,
    heading: "Practical & Engaging Workshops",
    text: "Real strategies. Real impact. Real support.",
    url: "/services",
  },
];

//Teacher Training Page Component
export default function TeacherTrainingPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* Info Section */}
        <TherapyInfoSection {...teacherTrainingContent} />

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
