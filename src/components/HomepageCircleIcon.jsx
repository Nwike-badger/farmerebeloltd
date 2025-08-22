// src/components/HomepageCircleIcon.jsx
import React from "react";

const HomepageCircleIcon = ({ src, alt, offset = "" }) => {
  return (
    <div className="w-[60px] h-[60px] bg-white rounded-full p-3 mb-6 shadow flex items-center justify-center">
      <img src={src} alt={alt} className={`w-full h-full object-contain ${offset}`} />
    </div>
  );
};

export default HomepageCircleIcon;
