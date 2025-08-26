// Media.jsx
import React from 'react';
import image1 from '../assets/palmkernel.png'
import image2 from '../assets/palmkernelproduce.png';
import image3 from '../assets/palmkernel1.png';
import image4 from '../assets/palmkernel.png';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector(5) (copy).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(1).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const PalmKernel = () => {
  

  return (
    <ProductDetailLayout
      image={image1}
      title="Palm Kernel Cake"
      subtitle="Top Grade Palm Kernel Cake"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage={image1}
        galleryImages={[image2, image3,image4]}
        title="Top Grade Palm Kernel Cake"
        description="Our palm kernel cake is a high quality by-product of crude palm kernel oil extraction, rich in protein and fibre. It is an excellent and affordable feed ingredient for livestock, ensuring healthy growth and improved productivity."
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

export default PalmKernel;