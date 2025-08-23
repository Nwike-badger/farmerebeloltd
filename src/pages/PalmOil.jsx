// Media.jsx
import React from 'react';
import image1 from '../assets/Rectangle 1487.png';
import image2 from '../assets/Rectangle 1471.png';
import image3 from '../assets/Rectangle 1489.png';
import image4 from '../assets/Rectangle 1490.png';
import image5 from '../assets/Rectangle 1491.png';
import image6 from '../assets/Rectangle 1519.png';
import image7 from '../assets/Rectangle 1505.png';
import image8 from '../assets/Rectangle 1494.png';
import image9 from '../assets/Rectangle 1495.png';
import image10 from '../assets/Rectangle 1496.png';
import image11 from '../assets/Rectangle 1464.png';
import image12 from '../assets/Rectangle 1498.png';
import image13 from '../assets/Rectangle 1499.png';
import image14 from '../assets/Rectangle 1500.png';
import image15 from '../assets/Rectangle 1473.png';
import image16 from '../assets/Rectangle 1502.png';

import Footer from '../components/Footer';
import MediaGallery from '../components/MediaGallery';

const PalmOil = () => {
  const images = [
    image2, image3, image4, image5, image6, image7, image8, image9,
    image10, image11, image12, image13, image14, image15, image16
  ];

  return (
    // FIX: Removed `bg-white` from this main container.
    <div className="w-full min-h-screen font-commissioner overflow-x-hidden">
      
      {/* Background Section - The image here will now be visible. */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <img
          src={image1}
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
      {/* FIX: Added `bg-white` specifically to this section. */}
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

export default PalmOil;