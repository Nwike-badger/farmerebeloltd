// MissionAndVisionCardWithImage.jsx
import React from "react";

const MissionAndVisionCardWithImage = ({ heading, content, image, isList = false }) => {
  return (
    <div className="relative bg-[#121F18] rounded-2xl p-8 w-full h-full">
      {/* Heading */}
      <h2
        className="font-commissioner font-semibold text-[72px] leading-[72px] text-white mb-6"
        style={{ fontFamily: "Commissioner" }}
      >
        {heading}
      </h2>

      {/* Body Content */}
      {isList ? (
        <ul className="flex flex-col space-y-4 items-start">
          {content.map((item, index) => (
            <li
              key={index}
              className=" rounded-full px-4 py-2 font-manrope text-lg text-white inline-block border-2"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-manrope text-lg leading-relaxed text-white">
          {content}
        </p>
      )}

      {/* Overlapping Image */}
      <div className="absolute -bottom-2 -right-1 w-38 h-40">
        <img
          src={image}
          alt={heading}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MissionAndVisionCardWithImage;
