// Media.jsx
import React from 'react';
import image1 from '../assets/sludge.png'
import image2 from '../assets/sludge1.png';
import image3 from '../assets/sludge2.png';
import image4 from '../assets/sludge3.png';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector(5) (copy).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(1).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const Sludge = () => {
  

  return (
    <ProductDetailLayout
      image={image1}
      title="Sludge"
      subtitle="High Quality Sludge"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage={image1}
        galleryImages={[image2, image3,image4]}
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