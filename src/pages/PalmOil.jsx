// Media.jsx
import React from 'react';
import image1 from '../assets/palmoil6.png'
import image2 from '../assets/palmoil5.png';
import image3 from '../assets/palmoil3.png';
import image4 from '../assets/palmoil2.png';
import image5 from '../assets/Group(1).svg';
import image6 from '../assets/Vector(5) (copy).svg';
import image7 from '../assets/Group(2).svg';
import image8 from '../assets/Group(1).svg';
import image9 from '../assets/palmoil1.png'

import ProductDetailLayout from '../components/ProductDetailLayout';
import ProductDetailCard from '../components/ProductDetailCard';


const PalmOil = () => {
  

  return (
    <ProductDetailLayout
      image={image1}
      title="Palm Oil"
      subtitle="Fresh, Premium Quality Palm Oil"
    >

    <div className="p-6 md:p-11">
      <ProductDetailCard
        mainImage={image2}
        galleryImages={[image3, image9,image4]}
        galleryImageClassName="object-contain max-w-full max-h-full mx-auto flex justify-center items-center"
        title="High Quality Palm Oil"
        description="Our palm oil is carefully extracted from freshly harvested oil palm fruits, retaining its rich natural flavour, vibrant colour and high nutritional value. Processed under strict quality standards, it is the perfect choice for cooking, food production and industrial applications."
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