// src/components/HomepageCardWithIcon.jsx
import React from "react";
import CircleIcon from "./HomepageCircleIcon";

const HomepageCardWithIcon = ({ icon, alt, title, text, delay = "", offset = "" }) => {
  return (
    <div className={`bg-[#F9F9F9] p-6 rounded-2xl flex flex-col h-full transition-all duration-500 ${delay}`}>
      <CircleIcon src={icon} alt={alt} offset={offset} />
      <h4 className="text-2xl md:text-[28px] text-[#00994D] font-semibold font-commissioner mb-4">
        {title}
      </h4>
      <p className="text-base md:text-[18px] leading-relaxed md:leading-[30px] font-manrope font-medium text-black">
        {text}
      </p>
    </div>
  );
};

export default HomepageCardWithIcon;
