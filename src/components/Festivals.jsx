import React from "react";
import { motion } from "framer-motion";

import festivals0 from "../assets/festivals/festivals0.jpg";
import festivals1 from "../assets/festivals/festivals1.jpg";
import festivals5 from "../assets/festivals/festivals5.jpg";
import festivals6 from "../assets/festivals/festivals6.jpg";
import festivals7 from "../assets/festivals/festivals7.jpg";
import festivals8 from "../assets/festivals/festivals8.jpg";

import festivals10 from "../assets/festivals/festivals10.jpg";
import festivals11 from "../assets/festivals/festivals11.jpg";
import festivals12 from "../assets/festivals/festivals12.jpg";

const Festivals = () => {
  const images = [
    festivals0, festivals1, festivals5, festivals6, festivals7,
    festivals8, festivals10, festivals11,
    festivals12
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
        Festivals
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
        // This animation makes the paragraph fade in after a slight delay, following the heading.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Celebrating festivals brings joy, color, and cultural awareness to our
        community. These moments foster togetherness, respect for traditions,
        and a sense of belonging.
      </motion.p>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            // This animation makes each image fade in and slide up as it comes into the viewport.
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // This ensures the animation only plays the first time the element is viewed.
            viewport={{ once: true }}
            // A staggered delay is applied to make each image animate in sequence.
            transition={{ duration: 0.6, delay: idx * 0.05 }}
          >
            <img
              src={img}
              alt={`Festivals-${idx}`}
              className="w-72 h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Festivals;