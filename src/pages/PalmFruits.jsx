// Media.jsx
import React from 'react';
import image1 from '../assets/Group 61 (copy).png'
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
import ProductDetailLayout from '../components/ProductDetailLayout';


const PalmFruits = () => {
  

  return (
    <ProductDetailLayout
      image={image1}
      title="Palm Fruits"
      subtitle="Fresh, Premium Quality Oil Palm Fruits"
    >
      <p>
        Our palm fruits are handpicked for quality and freshness, ensuring the
        best oil yield and taste. Perfect for local and industrial processing.
      </p>
    </ProductDetailLayout>
  );
};

export default PalmFruits;