import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import FooterCommon from "../components/FooterCommon";
import CustomCarousel from "../components/Carousel";

import carousel0 from "../assets/carousel0.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";

export const carouselData = [
  {
    image: carousel2,
    heading: "Strength Lies in Differences",
    text: "Inclusion is not a favor — it's a fundamental right.",
    url: "/about",
  },
  {
    image: carousel4,
    heading: "Progress Over Perfection",
    text: "Celebrate every milestone, no matter how small.",
    url: "/parent-training",
  },
  {
    image: carousel1,
    heading: "Healing Through Connection",
    text: "Therapy begins when we truly listen.",
    url: "/psychological-counselling",
  },
  {
    image: carousel3,
    heading: "Empathy Builds Bridges",
    text: "Understanding one another is the first step to acceptance.",
    url: "/services",
  },
];

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format.");
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone must be 10 digits.");
      return;
    }

    emailjs
      .sendForm(
        "service_zgjayp7", // Your service ID
        "template_qp3dj0s", // Your template ID
        form.current,
        "jt611qJHQczheAlMV" // Your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            title: "",
            name: "",
            email: "",
            phone: "",
            reason: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };


  return (
    <div className="bg-gradient-to-br from-purple-100 to-white">
      <Navbar />
      <CustomCarousel slides={carouselData} />

      <div className="px-4 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          We're here to help
        </h3>
        <p className="text-xl font-bold text-black mb-6">📞 +91 89797 33393</p>

        {/* {status && (
          <div
            className={`mb-6 text-sm font-medium px-4 py-2 rounded ${
              status.includes("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </div>
        )} */}

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
        >
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">- Select -</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Reason for Contact</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d55916.689734429354!2d78.757765!3d28.845019!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDUwJzQyLjEiTiA3OMKwNDUnMjguMCJF!5e0!3m2!1sen!2in!4v1754055410586!5m2!1sen!2in"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <FooterCommon />
    </div>
  );
}
