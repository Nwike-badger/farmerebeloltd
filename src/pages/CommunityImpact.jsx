// Media.jsx
import React from 'react';
import image1 from '../assets/farm2.png';
import ProductDetailLayout from '../components/ProductDetailLayout';

const CommunityImpact = () => {
  

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

export default CommunityImpact;