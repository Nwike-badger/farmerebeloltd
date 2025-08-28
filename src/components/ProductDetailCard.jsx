import React from "react";

const ProductDetailCard = ({
  mainImage,
  galleryImages = [],
  title,
  description,
  features = [],
  specs = [],
  buttonText = "Learn More",
  onButtonClick,
  
  galleryItemContainerClassName = "w-full h-24 md:h-28 bg-gray-100 rounded-lg overflow-hidden items-center justify-center",
  
  galleryImageClassName = "w-full h-full object-cover cursor-pointer hover:scale-105 transition flex justify-center items-center",
}) => {
  return (
    <div className="max-w-8xl mx-auto bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left: Images */}
        <div className="md:basis-1/2 flex-shrink-0">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-[300px] md:h-[450px] object-cover rounded-xl mb-4"
          />
          <div className="grid grid-cols-3 gap-3 ">
            {galleryImages.map((img, idx) => (
              
              <div key={idx} className={galleryItemContainerClassName}>
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className={galleryImageClassName}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Content (No changes here) */}
        <div className="md:basis-1/2 flex flex-col gap-6 md:gap-6">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img
                      src={feature.icon}
                      alt={feature.text}
                      className="w-4 h-4 object-contain flex-shrink-0"
                    />
                    <p className="text-gray-700">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specs */}
          {specs.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-4 md:text-xl md:mb-8">
                Specifications
              </h4>
              <div
                className="
                  bg-gray-50 p-4 rounded-xl border border-gray-100
                  md:bg-[#F9F9F9] md:p-8 md:rounded-2xl md:border-0
                "
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-6">
                  {specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="
                        flex flex-col
                        sm:flex-row sm:items-center sm:gap-2
                        md:gap-4
                      "
                    >
                      <p
                        className="
                          text-sm font-medium text-gray-500
                          sm:font-extrabold sm:text-[#383838] sm:font-commissioner sm:w-1/2
                          md:w-auto
                        "
                      >
                        {spec.label}:
                      </p>
                      <p
                        className="
                          text-base font-semibold text-gray-800
                          md:font-semibold md:font-commissioner md:text-[#383838]
                        "
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Button */}
          <div className="mt-auto pt-6">
            <button
              onClick={onButtonClick}
              className="flex items-center justify-center w-[180px] h-[45px] bg-black text-white font-semibold text-lg md:text-[18px] 
                   rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none 
                   mt-2 mb-4 transition-transform hover:scale-105"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;