// Media.jsx
import React from 'react';
import MediaGallery from '../components/MediaGallery';

const Media = () => {
  const images = [
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383840/staff2_fmjojx.png", 
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383834/community_ofkvpn.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383831/Rectangle_1499_k83m70.png", 
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383835/palmkernel1_dkaij5.png", 
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/palmkernel_vy6fyh.png", 
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/factory_i8p8uo.jpg",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383833/building_o9xgya.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383833/factory2_brqwrb.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383833/farm4_j5y0et.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383842/staff_btdqbk.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383831/staff3_paoavx.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383831/Rectangle_1499_k83m70.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383830/factory3_ttjf3q.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383836/farm3_ur5qtc.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383830/govt_algh3q.png"
  ];

  return (
    <div className="w-full min-h-screen font-commissioner overflow-x-hidden">
      
      {/* Background Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/farm2_opyhmb.png"
          alt="Farmer Ebelo farm background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
        <div className="px-6">
          <h2 className="text-[32px] md:text-[45px] font-bold leading-[40px] md:leading-[48px] text-white max-w-3xl">
            Farmer Ebelo Gallery
          </h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 lg:px-21">
          {images.map((img, idx) => (
            <MediaGallery key={idx} image={img} />
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Media;
