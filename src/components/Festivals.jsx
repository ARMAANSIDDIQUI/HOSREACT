// src/components/Festivals.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images manually
import festivals0 from "../assets/festivals/festivals0.jpg";
import festivals1 from "../assets/festivals/festivals1.jpg";
import festivals2 from "../assets/festivals/festivals2.jpg";
import festivals3 from "../assets/festivals/festivals3.jpg";
import festivals4 from "../assets/festivals/festivals4.jpg";
import festivals5 from "../assets/festivals/festivals5.jpg";
import festivals6 from "../assets/festivals/festivals6.jpg";
import festivals7 from "../assets/festivals/festivals7.jpg";
import festivals8 from "../assets/festivals/festivals8.jpg";
import festivals9 from "../assets/festivals/festivals9.jpg";
import festivals10 from "../assets/festivals/festivals10.jpg";
import festivals11 from "../assets/festivals/festivals11.jpg";
import festivals12 from "../assets/festivals/festivals12.jpg";
import festivals13 from "../assets/festivals/festivals13.jpg";
import festivals14 from "../assets/festivals/festivals14.jpg";
import festivals15 from "../assets/festivals/festivals15.jpg";

const Festivals = () => {
  const images = [
    festivals0, festivals1, festivals2, festivals3,
    festivals4, festivals5, festivals6, festivals7,
    festivals8, festivals9, festivals10, festivals11,
    festivals12, festivals13, festivals14, festivals15
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
        Festivals
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-gray-700 mb-8 max-w-2xl mx-auto"
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
