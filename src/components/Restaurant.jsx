// src/components/Restaurant.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images manually
import restaurant0 from "../assets/restaurant/restaurant0.jpg";
import restaurant1 from "../assets/restaurant/restaurant1.jpg";
import restaurant3 from "../assets/restaurant/restaurant3.jpg";
import restaurant5 from "../assets/restaurant/restaurant5.jpg";
import restaurant6 from "../assets/restaurant/restaurant6.jpg";
import restaurant7 from "../assets/restaurant/restaurant7.jpg";

const Restaurant = () => {
  const images = [
    restaurant0, restaurant1, restaurant3,
     restaurant5, restaurant6, restaurant7
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
        Restaurant Visits
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Restaurant visits offer opportunities to explore new cuisines,
        practice dining etiquette, and enjoy shared meals with friends and family.
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
              alt={`Restaurant-${idx}`}
              className="w-72 h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
