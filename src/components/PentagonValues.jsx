import React from "react";
import { FaHandshake, FaDoorOpen, FaEye, FaBalanceScale, FaSearch } from "react-icons/fa";

const coreValues = [
  { label: "Respect and Integrity", color: "#EF5350", icon: <FaHandshake size={24} /> },
  { label: "Openness", color: "#FFA726", icon: <FaDoorOpen size={24} /> },
  { label: "Transparency", color: "#26A69A", icon: <FaEye size={24} /> },
  { label: "Honesty", color: "#42A5F5", icon: <FaBalanceScale size={24} /> },
  { label: "Self Criticality", color: "#AB47BC", icon: <FaSearch size={24} /> },
];

export default function PentagonValues() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-[400px] aspect-square ">
        <svg className="absolute w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="#ebf8ff" /> Tailwind's blue-50 */}
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#888" />
            </filter>
          </defs>

          {/* Background rectangle for SVG */}
          <rect width="100%" height="100%" fill="url(#bg-gradient)" />

          {/* Pentagon shape */}
          <polygon
            points="200,60 335,150 275,325 125,325 65,150"
            fill="none"
            stroke="#eee"
            strokeWidth="5"
            filter="url(#shadow)"
          />

          {/* Lines from center to vertices */}
          {coreValues.map((val, i) => {
            const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
            const x = 200 + 140 * Math.cos(angle);
            const y = 200 + 140 * Math.sin(angle);
            return (
              <line
                key={val.label}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#ccc"
                strokeWidth="2"
              />
            );
          })}
        </svg>


        {/* Values around the pentagon */}
        {coreValues.map((val, i) => {
          const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
          const x = 200 + 150 * Math.cos(angle);
          const y = 200 + 150 * Math.sin(angle);
          return (
            <div
              key={val.label}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 min-w-[90px] min-h-[50px] px-3 py-2 rounded-xl text-white font-semibold text-sm flex flex-col items-center shadow-md border-2 border-white text-center"
              style={{ left: `${x / 4}%`, top: `${y / 4}%`, backgroundColor: val.color }}
            >
              {val.icon}
              <span className="mt-1 text-xs font-bold leading-tight">{val.label}</span>
            </div>
          );
        })}

        {/* Center Title Box */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] p-3 bg-white/90 rounded-xl shadow-lg flex items-center justify-center">
          <h2 className="text-center text-lg font-bold text-slate-700 tracking-wide drop-shadow-sm">
            Core Values
          </h2>
        </div>
      </div>
    </div>
  );
}
