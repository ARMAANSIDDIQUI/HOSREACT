import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaAward, FaMedal, FaClipboardList } from "react-icons/fa";
import Navbar from "../components/Navbar";
import FooterCommon from "../components/FooterCommon";
import CustomCarousel from "../components/Carousel";
import PentagonValues from "../components/PentagonValues";
import ArcValues from "../components/ArcValues";

// Use same image for content + signature (temporarily)
import carousel0 from "../images/Carousel0.jpg";
import carousel1 from "../images/Carousel1.jpg";
import carousel2 from "../images/Carousel2.jpg";
import carousel3 from "../images/Carousel3.jpg";
import carousel5 from "../images/physio.jpg";

import teamImage from "../images/team.jpg"; // Replace with real team image

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
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-purple-700"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
        >
          About the Organisation
        </motion.h2>
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
<div ref={visionRef} className="flex flex-col lg:flex-row items-center gap-10 mb-20">
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
      Our vision is to create a future where every child with neurodevelopmental or behavioral challenges 
      thrives in a nurturing, inclusive, and opportunity-rich environment. We aspire to become a national leader 
      in child-centered therapy and developmental care—empowering families, celebrating individual strengths, 
      and building a society that embraces diversity and dignity for all.
    </p>
  </motion.div>
</div>

{/* MISSION */}
<div ref={missionRef} className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-20">
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
      Our mission is to provide comprehensive, compassionate, and personalized care through over 12+ 
      specialized therapy services including Speech Therapy, Occupational Therapy, ABA Therapy, Autism-focused 
      interventions, and developmental support. We are committed to fostering holistic growth by delivering 
      evidence-based practices, empowering caregivers, and equipping each child with the skills and confidence 
      needed to flourish in daily life and beyond.
    </p>
  </motion.div>
</div>


        {/* VALUES */}
        <div ref={valuesRef} className="flex flex-col  items-center gap-10 mb-20">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <center><h2 className="text-3xl font-bold pb-8 mb-4">OUR CORE VALUES</h2></center>
            <div className="flex-1 min-w-[350px] max-w-[500px]">
              <PentagonValues />
            </div>
            <div className="flex-1 min-w-[350px] max-w-[500px]">
              <ArcValues />
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
