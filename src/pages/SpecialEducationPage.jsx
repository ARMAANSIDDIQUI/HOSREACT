import { Link } from 'react-router-dom';
// Replace if needed
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

const specialEducationContent = {
  imageSrc:[special1,special2],
  imageAlt: "Special Education Image",
  title: "Special Education at House of Specials",
  subtitle: "Tailored learning experiences to support children with unique abilities and challenges.",
  paragraphs: [
    "Special education is a tailored approach designed to meet the unique needs of children with disabilities. At House of Specials, we are dedicated to providing personalized learning experiences that cater to each child's individual abilities and challenges.",
    "Our team of skilled special educators employs innovative teaching methods to support children with various disabilities, including Autism, ADHD, Cerebral Palsy, Down Syndrome, and Intellectual Disabilities.",
    "We focus on developing academic skills, enhancing cognitive abilities, fostering social and emotional growth, and implementing behavior management strategies to help children develop positive behaviors and coping skills.",
    "Why choose House of Specials for special education?",
    "• Individualized Learning Plans: Customized education plans tailored to each child's strengths and challenges.",
    "• Expert Team: Highly trained and experienced educators who specialize in diverse needs.",
    "• Collaborative Approach: Close coordination with therapists, parents, and other professionals.",
    "• Inclusive Environment: Supportive and welcoming classrooms that foster belonging and value.",
    "• Behavior Management: Techniques to promote positive behavior and effective coping strategies.",
    "• Holistic Development: Emphasis on academic, social, emotional, and life skill development.",
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
  // { icon: <FaBook />, label: 'Special Education', path: '/special-education' },
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


import special1 from "../assets/special.jpg";

import special2 from "../assets/special2.jpg";

const carouselData = [
  {
    image: carousel2,
    heading: "Special Education for Every Learner",
    text: "Empowering children with personalized support and compassion.",
    url: "/about",
  },
  {
    image: carousel1,
    heading: "Inclusive & Nurturing Classrooms",
    text: "Where every child is seen, supported, and celebrated.",
    url: "/contact",
  },
  {
    image: carousel3,
    heading: "Collaborative Development",
    text: "Working together with families and professionals.",
    url: "/services",
  },
];

// 🎓 Special Education Page Component
export default function SpecialEducationPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...specialEducationContent} />

        {/* Services Icons */}
                <center>
          <h1 className="text-2xl font-bold text-purple-700 mb-6">OUR OTHER SERVICES</h1>
        </center>
<div className="flex flex-wrap justify-center gap-8 mb-16">
  {services.map((service, index) => {
    // Rainbow color palette
    const colors = [
      "text-red-500",
      "text-orange-500",
      "text-yellow-500",
      "text-green-500",
      "text-teal-500",
      "text-blue-500",
      "text-indigo-500",
      "text-purple-500",
      "text-pink-500",
    ];
    const color = colors[index % colors.length];

    return (
      <Link
        key={index}
        to={service.path}
        className="flex flex-col items-center w-32 group"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md transition-all"
        >
          {/* Rotating dotted border */}
                            <div className="absolute inset-0 rounded-full p-[2px] animate-spin-slow"
              style={{ background: "conic-gradient(red, yellow, green, cyan, blue, purple, red)" }}>


          <div className="rounded-full h-full w-full bg-white"></div>
        </div>
          <div className={`relative z-10 text-3xl ${color}`}>
            {service.icon}
          </div>
        </motion.div>
        <span className="mt-3 text-sm font-medium text-gray-800 text-center group-hover:underline">
          {service.label}
        </span>
      </Link>
    );
  })}
</div>

      </div>

      <FooterCommon />
    </div>
  );
}
