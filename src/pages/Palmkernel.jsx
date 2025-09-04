// Media.jsx
import React from 'react';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector (copy).svg';
import image7 from '../assets/Group (copy).svg';
import image8 from '../assets/Group(3).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const PalmKernel = () => {
  

  return (
    <ProductDetailLayout
      image= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/palmkernel_vy6fyh.png"
      title="Palm Kernel Cake"
      subtitle="Top Grade Palm Kernel Cake"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/palmkernel_vy6fyh.png"
        galleryImages={[ "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383825/palmkernelproduce_o2wi1e.png",
          "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383835/palmkernel1_dkaij5.png",
          "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/palmkernel_vy6fyh.png"]}
        title="Top Grade Palm Kernel Cake"
        description="Our palm kernel cake is a high quality by-product of crude palm kernel oil extraction, rich in protein and fibre. It is an excellent and affordable feed ingredient for livestock, ensuring healthy growth and improved productivity."
        features={[
          { icon: image5, text: "100% Natural" },
          { icon: image6, text: "High Protein Content" },
          { icon: image7, text: "Cost Effective Feed Solution" },
          { icon: image8, text: "Fast Delivery" },
        ]}
        specs={[
          { label: "Origin  ", value: "Edo State, Nigeria" },
          { label: "Production Period", value: "Year-round" },
          { label: "Fibre Content", value: "8% - 10%" },
          { label: "Moisture Content", value: "10%" },
        ]}
        buttonText="Contact for Pricing"
        onButtonClick={() => (window.location.href = "/contact-us")}
      />
    </div>
     
    </ProductDetailLayout>
  );
};

export default PalmKernel;