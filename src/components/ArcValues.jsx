import {
  Handshake,
  BookOpen,
  Eye,
  Heart,
  CircleUser,
} from "lucide-react";

// The `values` array holds data for each item to be displayed on the circle.
const values = [
  // Each object contains a text label, an icon component, and a rotation value in degrees for its position.
  { label: "Respect & Integrity", icon: <Handshake size={22} />, rotate: 0 },
  { label: "Openness", icon: <BookOpen size={22} />, rotate: 72 },
  { label: "Transparency", icon: <Eye size={22} />, rotate: 144 },
  { label: "Honesty", icon: <Heart size={22} />, rotate: 216 },
  { label: "Self Criticality", icon: <CircleUser size={22} />, rotate: 288 },
];

export default function ArcValues() {
  const sizes = {
    sm: 250,
    md: 300,
    lg: 350,
    xl: 400,
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full"
        style={{
          // A conic gradient creates a gradient that rotates around the center, which is used here to make colored sections for the circle.
          background: `conic-gradient(
            #ef4444 0% 10%, 
            #f97316 10% 30%, 
            #eab308 30% 50%, 
            #22c55e 50% 70%, 
            #3b82f6 70% 90%,
            #ef4444 90% 100%
          )`,
        }}
      >
        {values.map((val, i) => {
          // The rotation value is converted from degrees to radians, a unit of measurement needed for the math functions.
          // It's offset by 90 degrees to start the positioning from the top of the circle.
          const angle = ((val.rotate - 90) * Math.PI) / 180;

          const baseSize = 250; 
          const r = (baseSize * 0.35);

          // Trigonometric functions `cos` and `sin` are used to calculate the x and y coordinates for each item on the circle's circumference.
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          return (
            <div
              key={i}
              className="absolute flex flex-col items-center text-white text-center"
              style={{
                // `left` and `top` properties position the item from the center.
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                // To center the item itself on the calculated coordinates, ensuring perfect alignment.
                transform: "translate(-50%, -50%)",
                maxWidth: "70px",
              }}
            >
              <div className="text-sm sm:text-base md:text-lg mb-1">
                {val.icon}
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">
                {val.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}