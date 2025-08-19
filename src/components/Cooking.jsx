import React from "react";
import { motion } from "framer-motion";

import cooking0 from "../assets/cooking/cooking0.jpg";
import cooking1 from "../assets/cooking/cooking1.jpg";
import cooking2 from "../assets/cooking/cooking2.jpg";

const Cooking = () => {
  const images = [cooking0, cooking1, cooking2];

  return (
    <div className="mb-16">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-purple-700 text-center mb-3"
        // This animation makes the element fade in and slide up from below.
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cooking
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
        // This animation makes the element fade in after a slight delay.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Teaching our students how to cook builds independence, confidence, and
        life skills. From chopping vegetables to making a full meal, every step
        is a milestone worth celebrating.
      </motion.p>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            // This animation makes the element fade in and slide up as it becomes visible in the viewport.
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // The `viewport` prop ensures the animation only runs once when the element first enters the view.
            viewport={{ once: true }}
            // This `transition` creates a staggered effect, making each image animate in sequence.
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <img
              src={img}
              alt={`Cooking-${idx}`}
              className="w-72 h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cooking;