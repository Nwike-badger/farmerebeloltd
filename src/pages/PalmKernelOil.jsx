// Media.jsx
import React from 'react';

import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Group(3).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Vector (another copy).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const PalmKernelOil = () => {
  

  return (
    <ProductDetailLayout
      image="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414779/palmkerneloil_khf6jg.jpg"
      title="Palm Kernel Oil"
      subtitle="Top Grade Palm Kernel Cake"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
  mainImage="https://res.cloudinary.com/dk95qi8q9/image/upload/v1756414779/palmkerneloil_khf6jg.jpg"
  galleryImages={[
    "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383822/palmkernloil1_swjqnh.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383821/palmkerneloil2_ksz5nv.png",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383821/palmkerneloil3_tflanw.png"
  ]}
  galleryImageClassName="w-[65px] md:w-[85px] mt-2 md:mt-0 mx-auto "
  title="High Quality Palm Kernel Oil"
  description="Our palm kernel oil is extracted from carefully selected kernels to deliver exceptional purity. Known for its versatility, it is widely used in food production, cosmetics, and industrial applications. Our oil guarantees both quality and reliability."
  features={[
    { icon: image5, text: "100% Natural" },
    { icon: image6, text: "Fast Delivery" },
    { icon: image8, text: "Multi-purpose Use" },
    { icon: image7, text: "Quality" },
  ]}
  specs={[
    { label: "Origin", value: "Edo State, Nigeria" },
    { label: "Production Period", value: "Year-round" },
    { label: "Extraction Method", value: "Cold Pressed" },
    { label: "Moisture Content", value: "<0.2%" },
  ]}
  buttonText="Contact for Pricing"
  onButtonClick={() => (window.location.href = "/our-produce")}
  // ✅ Override just for Palm Kernel
  customSpecsClassName="flex-row items-center gap-2 whitespace-nowrap"
/>

    </div>
     
    </ProductDetailLayout>
  );
};

export default PalmKernelOil;