import {
  Handshake,
  BookOpen,
  Eye,
  Heart,
  CircleUser,
} from "lucide-react";

const values = [
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
          const angle = ((val.rotate - 90) * Math.PI) / 180;

          // ✅ Dynamic radius (35–40% of circle size keeps labels inside)
          const baseSize = 250; // smallest circle size
          const r = (baseSize * 0.35);

          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          return (
            <div
              key={i}
              className="absolute flex flex-col items-center text-white text-center"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
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


