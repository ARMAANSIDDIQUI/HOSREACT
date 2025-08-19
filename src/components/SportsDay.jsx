import React from "react";
import { motion } from "framer-motion";


import sportsDay0 from "../assets/sports_day/sports_day0.jpg";

import sportsDay2 from "../assets/sports_day/sports_day2.jpg";

import sportsDay4 from "../assets/sports_day/sports_day4.jpg";


const SportsDay = () => {
  // An array is used to manage all the imported images.
  const images = [
    sportsDay0,

    sportsDay2,

    sportsDay4,

  ];

  return (
    <div className="mb-16">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-purple-700 text-center mb-3"
        // This animation makes the heading fade in and slide up from below.
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sports Day
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
        // This animation makes the paragraph fade in after a slight delay, following the heading.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A day filled with energy, teamwork, and joy — celebrating the spirit of
        sportsmanship through fun and inclusive games for everyone.
      </motion.p>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {/* The `map` function iterates through the `images` array to render each image dynamically. */}
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            // This animation makes each image fade in and slide up as it enters the viewport.
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // `viewport={{ once: true }}` ensures the animation only plays the very first time the element comes into view.
            viewport={{ once: true }}
            // A staggered delay is applied to make each image animate in sequence.
            transition={{ duration: 0.6, delay: idx * 0.05 }}
          >
            <img
              src={img}
              alt={`SportsDay-${idx}`}
              className="w-72 h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SportsDay;