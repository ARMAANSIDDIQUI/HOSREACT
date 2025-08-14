// src/components/Vocational.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images manually
import vocational0 from "../assets/vocational/vocational0.jpg";
import vocational1 from "../assets/vocational/vocational1.jpg";
import vocational2 from "../assets/vocational/vocational2.jpg";
import vocational3 from "../assets/vocational/vocational3.jpg";

const Vocational = () => {
  const images = [vocational0, vocational1, vocational2, vocational3];

  return (
    <div className="mb-16">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-purple-700 text-center mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Vocational Training
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Equipping individuals with hands-on skills for independence and
        confidence — preparing them for real-world opportunities.
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
              alt={`Vocational-${idx}`}
              className="w-72 h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Vocational;
