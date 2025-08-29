// components/OurProduceCards.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OurProduceCards = ({ image, text, link }) => {
  return (
    <div className="rounded-lg flex flex-col items-center md:items-start">
      <img
        src={image}
        alt={text}
        className="w-[320px] md:w-[415px] h-[350px] md:h-[350px] ms-6 md:ms-0 object-cover rounded-[10px] mb-4 bg-[#F9FAFB]"
      />
      <p className="font-commissioner font-bold text-[17px] leading-[24px] text-black ">
        {text}
      </p>
      <Link
        to={link}
        className="flex items-center justify-center w-[180px] h-[45px] bg-black text-white font-semibold text-lg md:text-[18px] 
                   rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none 
                   mt-2 mb-4 transition-transform hover:scale-105"
      >
        Learn More
      </Link>
    </div>
  );
};

export default OurProduceCards;
