import React from "react";
// Example icons, replace with your preferred icon set
import { FaHandshake, FaDoorOpen, FaEye, FaBalanceScale, FaSearch } from "react-icons/fa";

const coreValues = [
  {
    label: "Respect and Integrity",
    color: "#EF5350", // Red
    icon: <FaHandshake size={32} />,
  },
  {
    label: "Openness",
    color: "#FFA726", // Orange
    icon: <FaDoorOpen size={32} />,
  },
  {
    label: "Transparency",
    color: "#26A69A", // Green
    icon: <FaEye size={32} />,
  },
  {
    label: "Honesty",
    color: "#42A5F5", // Blue
    icon: <FaBalanceScale size={32} />,
  },
  {
    label: "Self Criticality",
    color: "#AB47BC", // Purple
    icon: <FaSearch size={32} />,
  },

];

export default function PentagonValues() {
  return (
    <div style={styles.container} className="w-full h-screen bg-white flex items-center justify-center">
      <svg width="400" height="400" style={{ position: "absolute" }}>
        {/* Pentagon shape with connector lines */}
        <polygon
          points="200,60 335,150 275,325 125,325 65,150"
          fill="none"
          stroke="#eee"
          strokeWidth="5"
          filter="url(#shadow)"
        />
        {coreValues.map((val, i) => {
          // Pentagon vertices
          const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
          const x = 200 + 140 * Math.cos(angle);
          const y = 200 + 140 * Math.sin(angle);
          // Center connector lines
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
        <filter id="shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#888" />
        </filter>
      </svg>
      {/* Core values positioned around the pentagon */}
      {coreValues.map((val, i) => {
        const angle = (2 * Math.PI * i) / 5 - Math.PI / 2;
        const x = 170 * Math.cos(angle) + 200;
        const y = 170 * Math.sin(angle) + 200;
        return (
          <div
            key={val.label}
            style={{
              ...styles.valueBox,
              left: x,
              top: y,
              backgroundColor: val.color,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            }}
          >
            <div>{val.icon}</div>
            <span style={styles.label}>{val.label}</span>
          </div>
        );
      })}
      {/* Center with title */}
    
    </div>
  );
}

const styles = {
  container: {
    width: 400,
    height: 400,
    margin: "auto",
    background: "linear-gradient(135deg, #fff 0%, #e3eafc 100%)",
    position: "relative",
    borderRadius: 24,
    boxShadow: "0 6px 26px #a6aaff18",
  },
  valueBox: {
    position: "absolute",
    minWidth: 110,
    minHeight: 55,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    color: "#fff",
    fontWeight: 600,
    gap: 4,
    padding: "8px 14px",
    fontSize: 16,
    border: "3px solid #fff",
  },
  label: {
    marginTop: 4,
    fontWeight: 700,
    fontSize: 15,
    whiteSpace: "nowrap",
    textShadow: "0 1px 6px #0003",
  },
  centerBox: {
    position: "absolute",
    left: 200,
    top: 200,
    width: 150,
    height: 90,
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.96)",
    borderRadius: 15,
    boxShadow: "0 2px 18px #0001",
  },
  centerTitle: {
    fontSize: 27,
    fontWeight: 900,
    color: "#455a64",
    letterSpacing: 1,
    textShadow: "0 0 11px #fff768",
  },
};
