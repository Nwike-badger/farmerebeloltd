// components/Card.jsx
import React from 'react';

const OurProduceCards = ({ image, text, onClick }) => {
  return (
    <div className="  rounded-lg  flex flex-col items-start">
      <img
        src={image}
        alt={text}
        className="w-[528px] h-[430px] object-cover rounded-[10px] mb-4"
      />
      <p className="font-commissioner font-semibold text-[20px] leading-[24px] text-black ">
        {text}
      </p>
      <button
  onClick={() => window.location.href = '/about/our-story'}
  className="flex items-center justify-center w-[180px] h-[45px] bg-black text-white font-semibold text-lg md:text-[18px] 
             rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none 
             mt-2 mb-4 transition-transform hover:scale-105"
>
  Learn More
</button>
    </div>
  );
};

export default OurProduceCards;
