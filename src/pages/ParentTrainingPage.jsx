import { Link } from 'react-router-dom';
// Replace with actual image
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';

// 📘 Teacher Training Content
const parentTrainingContent = {
  imageSrc:[parent],
  imageAlt: "Parent Training Image",
  title: "Parent Training at House of Specials",
  subtitle: "Empowering parents to support their child's unique journey",
  paragraphs: [
    "Parents are the most important partners in a child’s journey toward growth and development. Our parent training program is designed to empower parents with the knowledge, skills, and strategies they need to support their child’s unique needs effectively.",
    "We understand that raising a child with disabilities comes with its own set of challenges and rewards. Our parent training sessions provide practical guidance on behavior management, communication techniques, and how to reinforce therapeutic activities at home. By equipping parents with these tools, we aim to create a strong, supportive environment that fosters the child’s overall well-being.",
    "Why Choose House of Specials for Parent Training?",
    "• Tailored Support: Our training sessions are customized to address the specific challenges and needs of your child and family, ensuring that the guidance you receive is relevant and applicable to your unique situation.",
    "• Experienced Trainers: Our team of specialists, including therapists, educators, and psychologists, brings a wealth of experience in working with children with disabilities and their families, providing expert insights and practical solutions.",
    "• Holistic Approach: We address not just the child’s needs but the entire family’s well-being, offering strategies that help improve family dynamics and create a positive, nurturing environment at home.",
    "• Hands-On Strategies: We provide actionable, real-life strategies that parents can apply in everyday situations, making it easier to manage challenging behaviors and support their child’s development.",
    "• Supportive Community: Our training sessions also offer an opportunity to connect with other parents who are going through similar experiences, fostering a sense of community and mutual support.",
    "• Flexibility and Accessibility: We offer flexible training options, including individual sessions, group workshops, and online resources, making it easier for parents to access the support they need at their convenience.",
    "• Ongoing Guidance: Our support doesn’t end with the training sessions; we offer continued assistance and follow-up to ensure that parents feel confident and supported as they implement what they’ve learned.",
    "• Positive Outcomes: Parents who participate in our training program often see significant improvements in their child’s behavior, communication, and overall development, leading to a more harmonious and fulfilling family life.",
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
  //{ icon: <FaUserFriends />, label: 'Parent Training', path: '/parent-training' },
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


import parent from "../assets/parent.jpg";


const carouselData = [
  {
    image: carousel4,
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
    image: carousel1,
    heading: "Practical & Engaging Workshops",
    text: "Real strategies. Real impact. Real support.",
    url: "/services",
  },
];

//Teacher Training Page Component
export default function ParentTrainingPage() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        <TherapyInfoSection {...parentTrainingContent} />

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
