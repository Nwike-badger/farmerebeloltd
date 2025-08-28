import React from 'react';
import image1 from '../assets/palmfruits2.png'
import image2 from '../assets/Vector 7.svg';
import image3 from '../assets/Palm Fruits Image.png';
import image4 from '../assets/palmoil4.png';
import image5 from '../assets/palmfruitsoil.png'
import image6 from '../assets/sludge.png'
import image7 from '../assets/palmkernel.png';
import OurProduceCards from '../components/OurProduceCards';

const OurProduce = () => {

  const cards = [
  { image: image3, text: 'Palm Fruits', link: '/our-produce/palm-fruits' },
  { image: image4, text: 'Palm Oil', link: '/our-produce/palm-oil' }, 
  { image: image7, text: 'Palm Cake', link: '/our-produce/palm-cake' },
  { image: image5, text: 'Palm Kernel Oil', link: '/our-produce/palm-kernel-oil' },
  { image: image6, text: 'Sludge', link: '/our-produce/sludge' },
];
  
  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      

      {/* Background Section */}
      <section className="relative min-h-[66vh] md:min-h-[90vh]  flex items-center text-white">
  
            <div className="absolute inset-0  -z-10">
              <img
                src={image1}
                alt="Background"
                className="w-full h-[600px] md:h-full object-cover "
              
              />
              <div className="absolute inset-0 bg-black/30 z-10"></div>
            </div>

            
            <div className="max-w-6xl  w-full px-4 md:px-5 pt-24 md:pt-32 lg:pt-0 lg:mx-17">
              {/* h5 with underline */}
                    <div className="relative mb-6 md:mb-6 w-fit">
                      {/* CHANGED: Mobile font size is `text-xl`, desktop is your original `text-[24px]` */}
                      <h5 className="text-xl md:text-[24px] font-normal">
                        Freshness
                      </h5>
                      <img
                        src={image2}
                        alt="Stylish underline"
                        className="absolute -bottom-2 md:-bottom-2 left-0 w-[100px] md:w-[150px] -[rotate:6deg]"
                      />
                    </div>

              
              <h2 className="text-3xl md:text-[45px] font-bold leading-tight md:leading-snug mb-6 md:mb-10 max-w-2xl">
                Our Produce - Pure, Wholesome & Nourishing
              </h2>

              
              <p className="text-lg md:text-[23px] leading-relaxed md:leading-[32px] font-semibold max-w-3xl">
                From our fields to your table, we grow grest, pesticde free palm and ensure it reaches you within 24 hours of harvest.
              </p>
            </div>
    </section>


    <section className=" py-12 md:py-16">
  {/* CHANGED: Using mobile-first padding, then restoring your desktop `px-19` value. */}
          <div className="max-w-8xl mx-auto px-4 md:px-19">
            {/* CHANGED: Using a larger gap on mobile/tablet, then restoring your tighter `gap-2` for the desktop layout. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-2 justify-items-start">
              {cards.map((card, index) => (
                  <OurProduceCards
                    key={index}
                    image={card.image}
                    text={card.text}
                    link={card.link}
                  />
              ))}
            </div>
          </div>
    </section>
      
          
    </div>
  );
};

export default OurProduce;
