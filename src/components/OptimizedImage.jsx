import React from "react";

const OptimizedImage = ({ name, alt = "", className = "" }) => {
  
  const basePath = `/src/assets/optimized`;

  return (
    <picture>
    
      <source srcSet={`${basePath}/${name}-1600.avif`} type="image/avif" />
      <source srcSet={`${basePath}/${name}-1600.webp`} type="image/webp" />
      
      <img
        src={`${basePath}/${name}-1600.jpg`}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    </picture>
  );
};

export default OptimizedImage;
