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
          <div className="grid grid-cols-3 gap-3">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-24 md:h-28 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Right: Content */}
        
        <div className="md:basis-1/2 flex flex-col gap-6 md:gap-6">
          {/* Title & Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
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
        /* MOBILE (Design A) */
        bg-gray-50 p-4 rounded-xl border border-gray-100
        /* DESKTOP (Design B) */
        md:bg-[#F9F9F9] md:p-8 md:rounded-2xl md:border-0
      "
    >
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-6">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className="
              /* MOBILE (Design A): stacked */
              flex flex-col
              /* Tablet up keeps row alignment; DESKTOP uses B's spacing */
              sm:flex-row sm:items-center sm:gap-2
              md:gap-4
            "
          >
            {/* Label */}
            <p
              className="
                /* MOBILE (Design A) */
                text-sm font-medium text-gray-500
                /* Tablet look from A; DESKTOP must match B exactly */
                sm:font-extrabold sm:text-[#383838] sm:font-commissioner sm:w-1/2
                /* Cancel the sm width at DESKTOP to match Design B */
                md:w-auto
              "
            >
              {spec.label}:
            </p>

            {/* Value */}
            <p
              className="
                /* MOBILE (Design A) */
                text-base font-semibold text-gray-800
                /* DESKTOP (Design B) */
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
              className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition"
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









// import React from "react";

// const ProductDetailCard = ({
//   mainImage,
//   galleryImages = [],
//   title,
//   description,
//   features = [],
//   specs = [],
//   buttonText = "Learn More",
//   onButtonClick,
// }) => {
//   return (
//     <div className="max-w-8xl bg-white overflow-hidden">
//       {/* Main Flex Layout */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Left: Images */}
//         <div className="basis-[50%] flex-shrink-0">
//           {/* Main Image */}
//           <img
//             src={mainImage}
//             alt={title}
//             className="w-[670px] h-[300px] md:h-[450px] object-cover rounded-xl mb-4"
//           />

//           {/* Gallery Images */}
//           <div className="flex gap-3">
//             {galleryImages.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Gallery ${idx + 1}`}
//                 className="w-52 h-37 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right: Content */}
//         <div className="basis-[50%] flex flex-col gap-8">
//           {/* Title & Description */}
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
//             <p className="text-gray-700 text-base">{description}</p>
//           </div>

//           {/* Features */}
//           {features.length > 0 && (
//             <div>
//               <h4 className="text-xl font-semibold mb-5">Key Features</h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-3">
//                     <img
//                       src={feature.icon}
//                       alt={feature.text}
//                       className="w-4 h-4 object-contain"
//                     />
//                     <p className="text-gray-700 ">{feature.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Specs */}
//           {specs.length > 0 && (
//             <div>
//               <h4 className="text-xl font-semibold mb-8">Specifications</h4>
//               <div className="bg-[#F9F9F9] p-8 rounded-2xl">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {specs.map((spec, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center gap-4 text-[#383838]"
//                     >
//                       <p className="font-extrabold font-commissioner">
//                         {spec.label}:
//                       </p>
//                       <p className="font-semibold font-commissioner">
//                         {spec.value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* ⬇️ Button moved inside the right card */}
//           <div className="mt-6">
//             <button
//               onClick={onButtonClick}
//               className="px-8 py-3 bg-black text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition"
//             >
//               {buttonText}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailCard;
