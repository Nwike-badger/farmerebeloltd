// Media.jsx
import React from 'react';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector(5) (copy).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(3).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const PalmFruits = () => {
  

  return (
    <ProductDetailLayout
      image= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414779/palmfruits6_coo2mo.jpg"
      title="Palm Fruits"
      subtitle="Fresh, Premium Quality Oil Palm Fruits"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/Palm_Fruits_Image_u3wksg.jpg"
        galleryImages={[
          "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414779/palmfruits6_coo2mo.jpg",
           "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383828/palmfruits3_fkfnhm.png",
           "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383827/palmfruits4_obiash.png"]}
        title="Premium Oil Palm Fruits"
        description="Our oil palm fruits are harvested at optimal 
        ripeness to ensure maximum oil content and quality. 
        Grown in the fertile soils of Edo State, Nigeria, these 
        fresh fruits are the foundation of our sustainable palm oil
         production process."
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
        buttonText="Contact for Pricing"
        onButtonClick={() => (window.location.href = "/our-produce")}
      />
    </div>
     
    </ProductDetailLayout>
  );
};

export default PalmFruits;