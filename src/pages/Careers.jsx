import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaComments, FaUserNurse, FaRunning, FaBookOpen } from "react-icons/fa";
import Navbar from "../components/Navbar";
import FooterCommon from "../components/FooterCommon";
import CustomCarousel from "../components/Carousel";

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/physio.jpg";

export const carouselData = [
  {
    image: carousel1,
    heading: "Different, Not Less",
    text: "Neurodiversity is a strength — not a weakness.",
    url: "/autism-therapy",
  },
  {
    image: carousel2,
    heading: "Little Steps, Big Impact",
    text: "The smallest progress can lead to the greatest breakthroughs.",
    url: "/adl-training",
  },
  {
    image: carousel4,
    heading: "Embrace Every Ability",
    text: "Every child brings something unique to the world.",
    url: "/special-education",
  },
  {
    image: carousel3,
    heading: "Connection Over Correction",
    text: "Build trust before you try to teach.",
    url: "/social-skill-training",
  },
];

export default function Careers() {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);

    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const phone = formData.get("user_phone")?.trim();
    const position = formData.get("position")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || name.length < 2) {
      errors.user_name = "Name must be at least 2 characters.";
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.user_email = "Please enter a valid email.";
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      errors.user_phone = "Phone must be a 10-digit number.";
    }
    if (!position) {
      errors.position = "Please specify a position.";
    }
    if (!message) {
      errors.message = "Please tell us why you want to join.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData(form.current);

    emailjs
      .send(
        "service_zgjayp7", // your EmailJS service ID
        "template_mpdml6w", // your EmailJS template ID
        {
          title: "Job Application", // matches {{reason}} in your template
          name: formData.get("user_name"),
          phone: formData.get("user_phone"),
          email: formData.get("user_email"),
          info: formData.get("position"),
          message: formData.get("message"),
        },
        "jt611qJHQczheAlMV"
      )
      .then(
        () => {
          alert("Application sent successfully!");
          form.current.reset();
          setFormErrors({});
        },
        () => {
          alert("Failed to send application. Please try again.");
        }
      );
  };


  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      {/* Icons for Roles */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaComments className="text-5xl text-pink-600 mb-3" />
            <p className="text-lg font-semibold">Speech Therapist</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserNurse className="text-5xl text-pink-600 mb-3" />
            <p className="text-lg font-semibold">Occupational Therapist</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRunning className="text-5xl text-pink-600 mb-3" />
            <p className="text-lg font-semibold">Physiotherapist</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBookOpen className="text-5xl text-pink-600 mb-3" />
            <p className="text-lg font-semibold">Special Educator</p>
          </div>
        </div>
      </div>

      {/* Job Info Section */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6 text-gray-800">
        <h2 className="text-3xl font-bold text-pink-700 text-center">We're Hiring!</h2>
        <p className="text-lg text-center">
          Join us as a <strong>Speech Therapist</strong>, <strong>Occupational Therapist</strong>, or <strong>Physiotherapist</strong> at House of Specials.
        </p>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-pink-700">Requirements</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Degree in Occupational Therapy, Physiotherapy or Speech Therapy</li>
            <li>Valid professional license</li>
            <li>Experience with children preferred</li>
            <li>Commitment to continuous professional development</li>
            <li>Strong communication and interpersonal skills</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-pink-700">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Develop and implement individualised therapy plans</li>
            <li>Conduct assessments and evaluations</li>
            <li>Provide parent and caregiver education</li>
            <li>Collaborate with a multidisciplinary team</li>
          </ul>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-pink-700">Organisation Details</h3>
          <p>
            HOS is a child development centre that provides various therapies such as special education,
            occupational therapy, speech therapy, and social skills training.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-pink-700">Location</h3>
          <p>Dr. Ram Swarup Colony, Moradabad, UP.</p>
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-3xl mx-auto p-8 mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-center text-pink-700">Apply Now</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border rounded px-4 py-2"
            />
            {formErrors.user_name && (
              <p className="text-red-500 text-sm">{formErrors.user_name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border rounded px-4 py-2"
            />
            {formErrors.user_email && (
              <p className="text-red-500 text-sm">{formErrors.user_email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              className="w-full border rounded px-4 py-2"
            />
            {formErrors.user_phone && (
              <p className="text-red-500 text-sm">{formErrors.user_phone}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="position"
              placeholder="Position you're applying for"
              className="w-full border rounded px-4 py-2"
            />
            {formErrors.position && (
              <p className="text-red-500 text-sm">{formErrors.position}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Why do you want to join us?"
              rows="4"
              className="w-full border rounded px-4 py-2"
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded w-full"
          >
            Submit Application
          </button>
        </form>
      </div>

      <FooterCommon />
    </div>
  );
}
