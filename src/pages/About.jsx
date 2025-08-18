import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaAward, FaMedal, FaClipboardList } from "react-icons/fa";
import Navbar from "../components/Navbar";
import FooterCommon from "../components/FooterCommon";
import CustomCarousel from "../components/Carousel";
import PentagonValues from "../components/PentagonValues";
import ArcValues from "../components/ArcValues";

// Use same image for content + signature (temporarily)
import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel5 from "../assets/physio.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import teamImage from "../assets/team.jpg"; // Replace with real team image
import logo from "../assets/logo.jpg";
export const carouselData = [
  {
    image: carousel0,
    heading: "Who We Are",
    text: "Meet the passionate team behind House of Specials and our story.",
    url: "/about",
  },
  {
    image: carousel2,
    heading: "Our Vision & Mission",
    text: "Creating an inclusive world where every child thrives with dignity.",
    url: "/about#vision",
  },
  {
    image: carousel3,
    heading: "Why We Exist",
    text: "Addressing the need for accessible and quality therapy services.",
    url: "/about#why",
  },
];

const About = () => {

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      // Fallback: match with refs if needed
      if (id === "vision" && visionRef.current) {
        visionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (id === "mission" && missionRef.current) {
        missionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (id === "values" && valuesRef.current) {
        valuesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);


  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      {/* About the Organisation */}
      <div className="px-6 py-12 text-gray-800 max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="House of Specials Logo"
          className="h-16 w-24 rounded-2xl object-cover sm:h-10 sm:w-14"
        />

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-purple-700 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
        >
          About the Organisation
        </motion.h2>
      </motion.div>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
        >
          Welcome to <strong>House of Specials</strong>, where every child is celebrated for their unique abilities. We are dedicated to empowering children and adults with disabilities to lead independent and fulfilling lives. Our team of compassionate professionals offers a comprehensive range of therapies, including special education, speech therapy, occupational therapy, social skills training, and sensory integration.
          <br /><br />
          At House of Specials, we believe in the potential of every individual. We work with children and adults with autism, ADHD, cerebral palsy, Down syndrome, intellectual disabilities, and more. Through our tailored programs, we focus on skill development and holistic growth, ensuring each person we work with can thrive in their everyday lives.
          <br /><br />
          Beyond providing therapy, we are committed to raising awareness about disabilities and fostering a more inclusive community. Join us in our mission to make a difference, one step at a time.
        </motion.p>
      </div>

      {/* Our Team Image Section */}
      <div className=" py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Our Team</h2>
          <img
            src={teamImage}
            alt="Our Team"
            className="rounded-xl mx-auto shadow-lg"
          />
        </div>
      </div>

      {/* Navigation for V/M/V */}
      <div className="w-full min-h-screen px-4 py-10 text-gray-800">
        <div className="flex justify-center gap-10 mb-12 text-purple-700 text-center text-md font-medium cursor-pointer">
          <div onClick={() => scrollToSection(visionRef)} className="flex flex-col items-center text-md hover:text-purple-900">
            <FaAward size={64} />
            <span >vision</span>
          </div>
          <div onClick={() => scrollToSection(missionRef)} className="flex flex-col items-center hover:text-purple-900">
            <FaMedal size={64} />
            <span>mission</span>
          </div>
          <div onClick={() => scrollToSection(valuesRef)} className="flex flex-col items-center hover:text-purple-900">
            <FaClipboardList size={64} />
            <span>values</span>
          </div>
        </div>

        {/* VISION */}
        <div ref={visionRef} id="visionRef" className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <motion.img
            src={carousel1}
            alt="Vision"
            className="w-full max-w-md rounded-xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          />
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              House of Specials is formed with the mission to provide high-quality services 
              for the differently–abled in small towns.
            </p>
            
          </motion.div>
        </div>

        {/* MISSION */}
        <div id="missionRef" ref={missionRef} className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-20">
          <motion.img
            src={carousel5}
            alt="Mission"
            className="w-full max-w-md rounded-xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          />
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              To enable and empower persons with disabilities and their families in Moradabad. 
              To conduct awareness programs and provide a safe and accepting environment for the 
              differently abled to learn and reach their utmost potential.
            </p>
          </motion.div>
        </div>

        {/* VALUES */}
        <div
          id="valuesRef"
          ref={valuesRef}
          className="flex flex-col items-center gap-10 mb-20 px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            className="w-full max-w-5xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center pb-6 sm:pb-8 mb-4">
              OUR CORE VALUES
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
              {/* Pentagon */}
              <div className="flex-1 min-w-[280px] max-w-[400px] w-full">
                <PentagonValues />
              </div>

              {/* Arc */}

              <div className="min-w-[280px] max-w-[400px] w-full center self-start">
                <ArcValues />
              </div>

            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <div
          className="text-center text-sm text-purple-700 mt-12 cursor-pointer"
          onClick={() => scrollToSection(visionRef)}
        >
          ↑ back to top
        </div>
      </div>

      <FooterCommon />
    </div>
  );
};

export default About;
