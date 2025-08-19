import { motion } from "framer-motion";

export default function ColoredIcon({ icon, index }) {
   // We've set up an array of colors to give each icon a unique look.
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

   // The modulo operator (%) ensures the index always falls within the color array's bounds,
   // creating a repeating color sequence for icons.
   const iconColor = rainbowColors[index % rainbowColors.length];

   return (
      // This is a special `div` from the Framer Motion library that lets us add cool animations.
      <motion.div
         // When you hover over the icon, it will get 20% bigger and rotate a little bit.
         whileHover={{ scale: 1.2, rotate: 5 }}
         // When you click or tap it, it will shrink slightly and rotate the other way.
         whileTap={{ scale: 0.9, rotate: -5 }}
         className="relative text-4xl bg-white p-5 rounded-full shadow-md transition-all"
      >
         {/* This creates a fun, animated rainbow border behind the icon. */}
         <div
            className="absolute inset-0 rounded-full p-[2px] animate-spin-slow"
            style={{
               // This creates a gradient that spins in a circle, making a rainbow effect.
               background:
                  "conic-gradient(red, orange, yellow, green, cyan, blue, purple, red)",
            }}
         >
            <div className="rounded-full h-full w-full bg-white"></div>
         </div>

         {/* This holds the icon itself, making sure it stays on top of the spinning border. */}
         <div className={`relative z-10 ${iconColor}`}>{icon}</div>
      </motion.div>
   );
}