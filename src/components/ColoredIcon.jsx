// src/components/ColoredIcon.jsx
import { motion } from "framer-motion";

export default function ColoredIcon({ icon, index }) {
  const rainbowColors = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-purple-500",
    "text-pink-500",
  ];
  const iconColor = rainbowColors[index % rainbowColors.length];

  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      className="relative text-4xl bg-white p-5 rounded-full shadow-md transition-all"
    >
      {/* Rotating Dotted Circle */}
      <div
        className="absolute inset-0 rounded-full p-[2px] animate-spin-slow"
        style={{
          background:
            "conic-gradient(red, orange, yellow, green, cyan, blue, purple, red)",
        }}
      >
        <div className="rounded-full h-full w-full bg-white"></div>
      </div>

      {/* Actual Icon */}
      <div className={`relative z-10 ${iconColor}`}>{icon}</div>
    </motion.div>
  );
}
