import { 
  FaUser, FaHeart,FaHome,FaComments, FaRunning, FaFemale, FaBook, 
  FaMedal, FaMusic, FaSpa, FaSwimmer, FaUsers, 
  FaChalkboardTeacher, FaUserFriends, FaChild, FaSchool, FaHandsHelping, 
  FaHeartbeat, FaSun ,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,FaPhoneAlt,
  FaPhone,
  FaCircle,
} from 'react-icons/fa';

import { Link } from "react-router-dom";
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
const FooterMain = () => {
  return (
      <footer className="bg-gradient-to-br from-purple-700 to-purple-900 text-white px-6 py-10 text-sm">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Core Mission */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <FaHeart className="text-pink-600 mt-1" size={44}/>
              <p className="font-medium">
                We are committed to empowering individuals with sensory, neurological, and emotional challenges by offering compassionate support, personalized care, and meaningful opportunities. Our aim is to help each person build the confidence and skills they need to thrive independently, feel included in society, and live a fulfilling life — filled with dignity, joy, and purpose.


              </p>
            </div>
            {/* <p className="text-gray-200 text-xs pl-6">
              Committed to supporting your child’s unique journey with care, compassion, and expertise — offering Speech Therapy, Occupational Therapy, ABA, and 12+ tailored interventions designed for Autism Spectrum and developmental challenges, to help them grow, connect, and thrive.
            </p> */}
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span><a href="tel:+918979733393">(+91) 89797 33393</a></span>
              <span><a href="tel:+917453916852">(+91) 74539 16852</a></span>
              <span className="text-sm text-gray-300">24x7 National Care Centre</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span><a href="mailto:houseofspecials19@gmail.com">houseofspecials19@gmail.com</a></span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <a href="https://share.google/ib5KJKfwaIuxh46Io">
                <span>
                  DR. RAM SWARUP COLONY NEAR TAJ BANQUET HALL MORADABAD 244001
                </span>
              </a>
            </div>
          </div>
          <hr className="border-gray-400 my-4" />

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Us */}
            <div>
              <h3 className="font-bold flex items-center gap-2 mb-2">
                <FaCircle className="text-xs" /> About Us
              </h3>
              <ul className="ml-6 space-y-1 text-gray-200">
                <li>
                  <Link to="/about#visionRef">Vision</Link>
                </li>
                <li>
                  <Link to="/about#missionRef">Mission</Link>
                </li>
                <li>
                  <Link to="/about#valuesRef">Values</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Therapy Services */}
          <div className="md:col-span-2">
            <h3 className="font-bold flex items-center gap-2 mb-2">
              <FaCircle className="text-xs" /> Therapy Services
            </h3>
            <ul className="ml-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-200">
                {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 hover:text-pink-300 transition-colors">
                  {service.icon}
                  <Link to={service.path} className="font-medium text-gray-200 hover:underline">
                    {service.label}
                  </Link>
                </li>

              ))}
            </ul>
          </div>

          <div className="pt-10">
            <h3 className="text-lg font-semibold mb-4">Our Community</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/19L1QvtLtH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <FaFacebookF /> FACEBOOK
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/houseofspecialswelfare?igsh=MWRzNmJlcjZpNGRwMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <FaInstagram /> INSTAGRAM
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Link to="/contact" className="flex items-center gap-3 hover:underline">
                  📧 CONTACT US
                </Link>
              </li>
            </ul>
            {/* <p className="mt-4 text-pink-300 hover:underline cursor-pointer text-sm">Comments & feedback</p> */}
          </div>
        </div>
      </footer>
  );
};

export default FooterMain;
