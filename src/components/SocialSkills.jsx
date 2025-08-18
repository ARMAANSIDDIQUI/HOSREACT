// src/components/SocialSkills.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images manually
import socialSkills0 from "../assets/social_skills/social_skills0.jpg";
import socialSkills1 from "../assets/social_skills/social_skills1.jpg";
import socialSkills5 from "../assets/social_skills/social_skills5.jpg";

const SocialSkills = () => {
  const images = [
    socialSkills0,
    socialSkills1,
    socialSkills5,
  ];

  return (
    <div className="mb-16">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-purple-700 text-center mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Social Skills Development
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Through interactive activities, students learn communication,
        cooperation, empathy, and problem-solving — skills essential for
        building positive relationships in everyday life.
      </motion.p>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
          >
            <img
              src={img}
              alt={`SocialSkills-${idx}`}
              className="w-72 h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialSkills;
