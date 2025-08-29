// Media.jsx
import React from 'react';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector(5) (copy).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(1).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const Sludge = () => {
  

  return (
    <ProductDetailLayout
      image= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/sludge_bbwstk.png"
      title="Sludge"
      subtitle="High Quality Sludge"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/sludge_bbwstk.png"
        galleryImages={[ "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383822/sludge1_qqy7ye.png",
           "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383821/sludge2_wtz8uv.png",
           "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383821/sludge3_d4iill.png"]}
        title="High Quality Sludge"
        description="Our sludge is a by-product of palm oil processing, rich in nutrient and commonly used in animal feed, soap making, and biofuel production among others. The sludge at Farmer Ebelo provides industries with a reliable raw material without compromising quality."
        features={[
          { icon: image5, text: "100% Organic" },
          { icon: image6, text: "Fresh Harvest" },
          { icon: image7, text: "Premium Quality" },
          { icon: image8, text: "Fast Delivery" },
        ]}
        specs={[
          { label: "Origin  ", value: "Edo State, Nigeria" },
          { label: "HarvestPeriod", value: "Year-round" },
          { label: "Oil Content", value: "18% - 22%" },
          { label: "Moisture Content", value: "12% - 15%" },
        ]}
        buttonText="Back to Products"
        onButtonClick={() => (window.location.href = "/our-produce")}
      />
    </div>
     
    </ProductDetailLayout>
  );
};

export default Sludge;