// Media.jsx
import React from 'react';
import image1 from '../assets/Group 1000003955.png'
import image2 from '../assets/Palm Fruits Image.png';
import image3 from '../assets/Rectangle 1521.png';
import image4 from '../assets/Rectangle 1522.png';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector(5) (copy).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(1).svg';

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const PalmOil = () => {
  

  return (
    <ProductDetailLayout
      image={image1}
      title="Palm Fruits"
      subtitle="Fresh, Premium Quality Oil Palm Fruits"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage={image2}
        galleryImages={[image1, image3,image4]}
        title="Premuim Oil Palm Fruits"
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
        buttonText="Back to Products"
        onButtonClick={() => (window.location.href = "/our-produce")}
      />
    </div>
     
    </ProductDetailLayout>
  );
};

export default PalmOil;