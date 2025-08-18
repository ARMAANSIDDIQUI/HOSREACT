import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterCommon from '../components/FooterCommon';
import CustomCarousel from '../components/Carousel';
import {
  FaUser, FaHome, FaComments, FaRunning, FaBrain, FaFemale, FaBook,
  FaMedal, FaMusic, FaSpa, FaSwimmer, FaClipboardList, FaUsers,
  FaChalkboardTeacher, FaUserFriends, FaChild, FaSchool, FaHandsHelping,
  FaHeartbeat, FaSun
} from 'react-icons/fa';
import { useState, useRef } from "react";
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
import emailjs from "emailjs-com";

export const carouselData = [
  {
    image: carousel0,
    heading: "Be the Light",
    text: "Nothing can dim the light that shines from within. – Maya Angelou",
    url: "/about",
  },
  {
    image: carousel1,
    heading: "Patience & Progress",
    text: "Progress is not achieved by luck or accident, but by working on yourself daily. – Epictetus",
    url: "/adl-training",
  },
  {
    image: carousel3,
    heading: "Unleash Possibilities",
    text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. – Jamie Paolinetti",
    url: "/sensory-integration",
  },
];


export default function Services() {
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
    const formRef = useRef();
    const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEnquiryForm = () => {
    const newErrors = {};
    const { name, email, phone, service } = enquiryData;

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Valid email is required.";
    if (!phone.trim() || !/^\d{10}$/.test(phone))
      newErrors.phone = "Phone must be 10 digits.";
    if (!service) newErrors.service = "Please select a service.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    if (!validateEnquiryForm()) return; // Validate before sending

    const templateParams = {
      title:"Enquiring for a Service",
      name: enquiryData.name,
      email: enquiryData.email,
      phone: enquiryData.phone,
      info: enquiryData.service || "", // Pass service as "info"
      message: enquiryData.message,
    };

    emailjs
      .send(
        "service_zgjayp7",   // EmailJS service ID
        "template_mpdml6w",  // EmailJS template ID
        templateParams,
        "jt611qJHQczheAlMV"  // EmailJS public key
      )
      .then(() => {
        alert("Your enquiry has been sent successfully!");
        setEnquiryData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send enquiry. Please try again later.");
      });
  };



  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-white px-4 py-8">
        {/* Services Icons */}
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


        {/* Unified Service Overview Section */}
        <section className="px-4 md:px-10 py-12 text-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Why Our Services Matter</h2>
            <p className="text-lg mb-6 text-justify">
              Our comprehensive range of therapies, education programs, and developmental support is tailored to the unique needs of each child. We combine professional care with compassion to ensure growth across all domains — physical, cognitive, emotional, and social.
            </p>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">Why It’s Important</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Early and targeted intervention dramatically improves long-term outcomes.</li>
                <li>Every child receives personalized support across various developmental areas.</li>
                <li>Therapies support school success, family harmony, and emotional well-being.</li>
                <li>Multi-disciplinary programs ensure collaboration between parents, teachers, and professionals.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Enhanced communication and language development</li>
                <li>Better emotional regulation and social interaction</li>
                <li>Improved motor skills and independence in daily life</li>
                <li>Boosted academic readiness and confidence</li>
                <li>Support for parents and educators to maintain progress at home and school</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="px-4 md:px-10 py-12 text-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Enquire Now</h2>
            <form className="space-y-6" onSubmit={handleEnquirySubmit}>
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={enquiryData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={enquiryData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={enquiryData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Select a Service</label>
                <select
                  name="service"
                  value={enquiryData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option value="">-- Select --</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service.label}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={enquiryData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 w-full text-white px-6 py-2 rounded hover:bg-purple-700"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>

          </div>
        </section>
      </div>
      <FooterCommon />
    </div>
  );
}