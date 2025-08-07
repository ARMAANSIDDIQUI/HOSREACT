import {
  Handshake,
  BookOpen,
  Eye,
  Heart,
  CircleUser,
} from "lucide-react";

const values = [
  { label: "Respect & Integrity", icon: <Handshake size={28} />, rotate: 0 },
  { label: "Openness", icon: <BookOpen size={28} />, rotate: 72 },
  { label: "Transparency", icon: <Eye size={28} />, rotate: 144 },
  { label: "Honesty", icon: <Heart size={28} />, rotate: 216 },
  { label: "Self Criticality", icon: <CircleUser size={28} />, rotate: 288 },
];

export default function ArcValues() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="relative w-[400px] h-[400px] rounded-full"
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
        {/* Value labels and icons inside the circle */}
        {values.map((val, i) => {
          const angle = ((val.rotate - 90) * Math.PI) / 180; // adjust for top
          const r = 130;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          return (
            <div
              key={i}
              className="absolute flex flex-col items-center text-white font-semibold text-sm"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {val.icon}
              <p className="mt-1 text-center w-[80px] leading-tight">{val.label}</p>
            </div>
          );
        })}

        {/* Center Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-lg z-10">
          Our Core Values
        </div>
      </div>
    </div>
  );
}
