// components/ProductDetailLayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // using lucide-react icons

const ProductDetailLayout = ({ image, title, subtitle, children }) => {
  return (
    <div className="w-full">
      {/* Back to Products */}
      <section>
        <Link
          to="/our-produce"
          className="flex items-center gap-2 ms-15 p-5 text-black hover:text-green-700 transition"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center ">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-top -z-10 "
        />

        <div className="ms-20">
          <h2 className="text-[37px] md:text-[50px] font-bold leading-[45px] md:leading-[53px]
             text-white max-w-3xl mb-5">
            {title}
          </h2>

          <h4 className="text-[21px] md:text-[27px] font-bold leading-[25px] md:leading-[29px]
             text-white max-w-3xl">
            {subtitle}
          </h4>
        </div>
      </section>

      {/* Extra content for each product (optional) */}
      <section className="p-10">{children}</section>
    </div>
  );
};

export default ProductDetailLayout;
