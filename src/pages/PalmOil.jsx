import React from 'react';

import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector.svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(3).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';

const PalmOil = () => {
  return (
    <ProductDetailLayout
      image="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414779/palmoil6_rtiz1u.jpg"
      title="Palm Oil"
      subtitle="Fresh, Premium Quality Palm Oil"
    >
      <div className="p-6 md:p-11">
        <ProductDetailCard
          mainImage="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383832/palmoil5_vrytr0.png"
          galleryImages={[
            "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383820/palmoil3_wuvk4n.png",
            "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383820/palmoil1_qd6br8.png",
            "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383820/palmoil2_oeqpkk.png"
          ]}
          // Base class for all thumbnails
          galleryImageClassName="object-contain max-w-full max-h-full mx-auto flex justify-center items-center"
          // ✅ Only the LAST thumbnail gets an extra top margin on mobile
          galleryImageClassNames={[
            "",               // first image
            "mt-2 md:mt-0",       // second image
            "mt-8 md:mt-0 "    // third image
          ]}
          title="High Quality Palm Oil"
          description="Our palm oil is carefully extracted from freshly harvested oil palm fruits, retaining its rich natural flavour, vibrant colour and high nutritional value. Processed under strict quality standards, it is the perfect choice for cooking, food production and industrial applications."
          features={[
            { icon: image5, text: "100% Organic" },
            { icon: image6, text: "Rich Flavor & Aroma" },
            { icon: image7, text: "Premium Quality" },
            { icon: image8, text: "Fast Delivery" },
          ]}
          specs={[
            { label: "Origin  ", value: "Edo State, Nigeria" },
            { label: "HarvestPeriod", value: "Year-round" },
            { label: "Free Fatty Acid", value: "<5%" },
            { label: "Moisture Content", value: "0.2%" },
          ]}
          buttonText="Contact for Pricing"
          onButtonClick={() => (window.location.href = "/contact-us")}
        />
      </div>
    </ProductDetailLayout>
  );
};

export default PalmOil;
