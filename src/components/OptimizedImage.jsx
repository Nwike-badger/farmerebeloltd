import React from "react";

const OptimizedImage = ({ name, alt = "", className = "" }) => {
  // Adjust the base path if needed (this assumes images are in /src/assets/optimized/)
  const basePath = `/src/assets/optimized`;

  return (
    <picture>
      {/* Modern formats first */}
      <source srcSet={`${basePath}/${name}-1600.avif`} type="image/avif" />
      <source srcSet={`${basePath}/${name}-1600.webp`} type="image/webp" />
      {/* Fallback to JPEG */}
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
