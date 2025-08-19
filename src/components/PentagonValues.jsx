import React from "react";
import {
  FaHandshake,
  FaDoorOpen,
  FaEye,
  FaBalanceScale,
  FaSearch,
} from "react-icons/fa";

// An array of objects, each representing a core value with its label, a unique color, and a corresponding icon.
const coreValues = [
  { label: "Respect and Integrity", color: "#EF5350", icon: <FaHandshake size={20} /> },
  { label: "Openness", color: "#FFA726", icon: <FaDoorOpen size={20} /> },
  { label: "Transparency", color: "#26A69A", icon: <FaEye size={20} /> },
  { label: "Honesty", color: "#42A5F5", icon: <FaBalanceScale size={20} /> },
  { label: "Self Criticality", color: "#AB47BC", icon: <FaSearch size={20} /> },
];

export default function PentagonValues() {
  return (
    <div className="w-full flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-[350px] sm:max-w-[400px] aspect-square">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* The `<filter>` element is used to apply a drop shadow effect to the pentagon shape. */}
            <filter id="shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#999" />
            </filter>
          </defs>

          {/* Pentagon shape */}
          <polygon
            // The `points` attribute defines the vertices of the pentagon using x,y coordinates.
            points="200,60 335,150 275,325 125,325 65,150"
            fill="none"
            stroke="#e5e7eb" // tailwind gray-200
            strokeWidth="4"
            filter="url(#shadow)"
          />

          {/* Lines from center to vertices */}
          {coreValues.map((val, i) => {
            // Trigonometry is used to calculate the coordinates for the lines, arranging them in a star shape.
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
                stroke="#d1d5db" // tailwind gray-300
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        {/* Values around the pentagon */}
        {coreValues.map((val, i) => {
          // Trigonometry is used to calculate the coordinates for the value labels, positioning them around the pentagon.
          const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
          const x = 200 + 155 * Math.cos(angle);
          const y = 200 + 155 * Math.sin(angle);
          return (
            <div
              key={val.label}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 min-w-[70px] max-w-[100px] px-2 py-1 rounded-lg text-white font-semibold text-xs flex flex-col items-center shadow-md border border-white/40 text-center"
              style={{
                // The `x` and `y` coordinates are converted to percentages to ensure the values are positioned correctly within the responsive SVG.
                left: `${x / 4}%`,
                top: `${y / 4}%`,
                backgroundColor: val.color,
              }}
            >
              {val.icon}
              <span className="mt-1 text-[10px] sm:text-xs font-bold leading-tight">
                {val.label}
              </span>
            </div>
          );
        })}

        {/* Center Title Box */}
      </div>
    </div>
  );
}