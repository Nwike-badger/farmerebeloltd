import React from 'react';
import image2 from '../assets/Vector 7.svg';
import OurProduceCards from '../components/OurProduceCards';

const OurProduce = () => {
  const cards = [
    { image: "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/Palm_Fruits_Image_u3wksg.jpg", text: 'Palm Fruits', link: '/our-produce/palm-fruits' },
    { image: "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383835/palmoil4_iyiyj3.png", text: 'Palm Oil', link: '/our-produce/palm-oil' },
    { image: "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/palmkernel_vy6fyh.png", text: 'Palm Cake', link: '/our-produce/palm-cake' },
    { image: "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383840/palmfruitsoil_pitrsu.png", text: 'Palm Kernel Oil', link: '/our-produce/palm-kernel-oil' },
    { image: "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/sludge_bbwstk.png", text: 'Sludge', link: '/our-produce/sludge' },
  ];

  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      {/* HERO */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center text-white">
        <div className="absolute inset-0 z-10">
          <img
            src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383842/palmfruits2_uucvk7.png"
            alt="Background"
            className="w-full h-[600px] md:h-full object-cover"
          />
          {/* --- CHANGE START: Modified overlay height to match the image --- */}
          <div className="absolute inset-x-0 top-0 w-full h-[600px] md:h-full bg-black opacity-50"></div>
          {/* --- CHANGE END --- */}
        </div>

        <div className="max-w-6xl w-full px-4 md:px-5 pt-24 md:pt-32 lg:pt-0 lg:mx-17 relative z-20">
          {/* h5 with underline */}
          <div className="relative mb-6 md:mb-6 w-fit">
            <h5 className="text-xl md:text-[24px] font-normal">Freshness</h5>
            <img
              src={image2}
              alt="Stylish underline"
              className="absolute -bottom-2 left-0 w-[100px] md:w-[150px]"
            />
          </div>

          <h2 className="text-3xl md:text-[45px] font-bold leading-tight md:leading-snug mb-6 md:mb-10 max-w-2xl">
            Our Produce - Pure, Wholesome & Nourishing
          </h2>

          <p className="text-lg md:text-[23px] leading-relaxed md:leading-[32px] font-semibold max-w-3xl">
            From our fields to your table, we grow great, pesticide-free palm and ensure it reaches you within 24 hours of harvest.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-10 md:py-16">
        <div className="max-w-8xl mx-auto px-4 md:px-21">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 justify-items-center">
            {cards.map((card, index) => (
              <div key={index}>
                <OurProduceCards
                  image={card.image}
                  text={card.text}
                  link={card.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProduce;