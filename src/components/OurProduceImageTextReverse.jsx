import React from 'react';

const OurProduceImageTextReverse = ({ imageSrc, title, description, reverse = false }) => {
  return (
    <section
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-between items-center max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700`}
    >
      {/* Text Section */}
      <div className="basis-full md:basis-[60%] text-center md:text-left">
        <h5 className="text-3xl md:text-[23px] leading-tight md:leading-none font-commissioner font-bold text-black mb-6 max-w-2xl mx-auto md:mx-0">
          {title}
        </h5>

        <p className="text-base md:text-[20px] leading-relaxed md:leading-[32px] font-manrope font-medium text-black max-w-2xl mb-8 mx-auto md:mx-0">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="basis-full md:basis-[38%] relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto max-h-[400px] rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default OurProduceImageTextReverse;
