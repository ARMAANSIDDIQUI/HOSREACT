import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/carousel';
import TherapyInfoSection from '../components/TherapyInfoCard';
import { 
  FaUser, FaHome,FaComments, FaRunning, FaBrain, FaFemale, FaBook, 
  FaMedal, FaMusic, FaSpa, FaSwimmer, FaClipboardList, FaUsers, 
  FaChalkboardTeacher, FaUserFriends, FaChild, FaSchool, FaHandsHelping, 
  FaHeartbeat, FaSun 
} from 'react-icons/fa';

import adl1 from "../assets/adl.jpg";
import adl2 from "../assets/adl2.jpg";
import adl3 from "../assets/adl3.jpg";


import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";


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
  // { icon: <FaChalkboardTeacher />, label: 'ADL Training', path: '/adl-training' },
  { icon: <FaUserFriends />, label: 'Parent Training', path: '/parent-training' },
  { icon: <FaSchool />, label: 'Teacher Training', path: '/teacher-training' },
  { icon: <FaUser />, label: 'School Training', path: '/school-training' },
  { icon: <FaHandsHelping />, label: 'Social Skill Training', path: '/social-skill-training' },
  { icon: <FaHeartbeat />, label: 'Physiotherapy', path: '/physio-therapy' },
  { icon: <FaSun />, label: 'Sensory Integration', path: '/sensory-integration' },
  { icon: <FaHome />, label: 'Daycare Facility', path: '/daycare' }
];
//ADL Training Content
const adlTrainingContent = {
  imageSrc:[adl1, adl3],
  imageAlt: "ADL Training Image",
  title: "ADL Training",
  subtitle: "Fostering independence, one skill at a time",
  paragraphs: [
    "Developing independence in daily life is essential for personal growth. At House of Specials, our ADL (Activities of Daily Living) training program equips individuals with the skills they need for everyday tasks, fostering self-reliance and confidence.",
    "Our expert team uses practical, hands-on methods to teach essential skills such as dressing, grooming, and meal preparation. Each program is tailored to the individual’s abilities and goals.",
    "Why choose House of Specials for ADL training?",
    "• Personalized Approach: Tailored training to meet each person’s unique needs.",
    "• Multidisciplinary Team: Integrated support from therapists and educators.",
    "• Empowering Environment: Encouraging independence in a nurturing setting.",
    "• Proven Results: Tangible improvements in daily living skills and self-confidence.",
    "At House of Specials, we believe in empowering every individual to lead a more independent, dignified, and fulfilling life through consistent and caring ADL training."
  ],
  links: {
    more: "/about",
  },
};

// 🎠 Carousel Data
export const carouselData = [
  {
    image: carousel1,
    heading: "Uniquely Wired, Deeply Inspired",
    text: "Autism is not a disability, it's a different ability.",
    url: "/about",
  },
  {
    image: carousel3,
    heading: "Small Steps, Big Dreams",
    text: "Progress may be slow, but every step counts.",
    url: "/services",
  },
  {
    image: carousel4,
    heading: "The Power of Acceptance",
    text: "Inclusion is not a favor, it's a right.",
    url: "/contact",
  },
  {
    image: carousel5,
    heading: "Let Their Light Shine",
    text: "Children with special needs aren't broken, they are beautifully unique.",
    url: "/",
  },
];

// 📄 ADL Training Page Component
export default function ADLTrainingPage() {
  return (
    <div className='bg-gradient-to-br from-purple-100 to-white'>
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* ADL Info */}
        <TherapyInfoSection {...adlTrainingContent} />

        {/* Services Flex */}
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
