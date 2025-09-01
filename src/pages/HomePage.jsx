// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

import image7 from '../assets/Vector(10).png';
import logo1 from '../assets/EDSG-LOGO-Hi-res 1.svg';
import logo2 from '../assets/nirsal-logo-big 1.svg';
import logo3 from '../assets/boa-logo 1.svg';
import logo4 from '../assets/bank 1.svg';
import logo5 from '../assets/logo 1.svg';

import image13 from '../assets/Vector(10) (copy).png';
import image15 from '../assets/Vector(3).svg';
import image16 from '../assets/Group.svg';
import image17 from '../assets/Vector(4).svg';
import image22 from '../assets/Group 1000003916.svg';
import image23 from '../assets/Group 1000003917.svg';
import HomepageCardWithIcon from '../components/HompageCardWithIcon';
import VideoSlider from "../components/VideoSlider";

const AnimatedStat = ({ number, suffix, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <h3 className="text-4xl lg:text-5xl font-bold mb-2">
        {inView ? <CountUp end={number} duration={2.5} separator="," /> : '0'}
        {suffix}
      </h3>
      <p className='text-lg lg:text-2xl w-full max-w-[240px] md:max-w-xs mx-auto'>{children}</p>
    </div>
  );
};

const HomePage = () => {
  const backgrounds = [
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/home_zxcsqy.jpg",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414781/farm_y9pviw.jpg",
    "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/palmfruits_ocbmpm.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  // Refs for scroll animations
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: partnersRef, inView: partnersInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: beginningsRef, inView: beginningsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: growthBadgeRef, inView: growthBadgeInView } = useInView({ triggerOnce: true, threshold: 0.8 });
  const { ref: whyChooseUsRef, inView: whyChooseUsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardsData = [
    {
      icon: image15,
      alt: "Icon for Experience",
      title: "Rooted in Experience",
      text: "With years of hands-on experience, we bring practical expertise...",
      delay: "animate-fade-in-up",
      offset: "-translate-y-[1px]"
    },
    {
      icon: image16,
      alt: "Icon for Quality",
      title: "Quality Assurance",
      text: "From harvest to processing, we maintain rigorous quality control...",
      delay: "animate-fade-in-up delay-200",
      offset: "translate-y-[5px]"
    },
    {
      icon: image17,
      alt: "Icon for Community",
      title: "Built on Community",
      text: "We believe growth is shared. From job creation to community empowerment...",
      delay: "animate-fade-in-up delay-[400ms]",
    },
  ];

  const myVideos = [
    "https://res.cloudinary.com/dk95qi8q9/video/upload/f_auto,q_auto/v1756382064/video1_compressed_venkqj.mp4",
    // CONVERTED .mov to .mp4 for better performance
    "https://res.cloudinary.com/dk95qi8q9/video/upload/f_auto,q_auto/v1756374672/video2_cnnyui.mp4",
    "https://res.cloudinary.com/dk95qi8q9/video/upload/f_auto,q_auto/v1756374682/video3_dbqvw4.mp4",
    "https://res.cloudinary.com/dk95qi8q9/video/upload/v1756382063/video4_compressed_btudy2.mp4"
  ];

  // Reusable animation variants for consistency
  const textAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const imageAnimation = {
    initial: { clipPath: "inset(0 0 100% 0)" },
    whileInView: { clipPath: "inset(0 0 0% 0)" },
    transition: { duration: 1, ease: "easeInOut", delay: 0.2 }
  };
  
  const viewportSettings = { once: true, amount: 0.2 };

  return (
    <div className="relative w-screen min-h-screen font-commissioner overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-10">
          {backgrounds.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Background"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: index === currentIndex ? 1 : 0 }}
            />
          ))}
        </div>

        <div ref={heroRef} className={`relative z-20 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[70px] lg:leading-[77px] text-white ">
            Welcome to{' '}
            <span className="text-[#BCFFDE]">
              Farmer Ebelo Ltd.
            </span>
          </h1>
          <p className="font-medium text-lg md:text-[20px] md:leading-[30px] text-white mt-6 max-w-5xl drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]">
            A leading oil palm plantation, rooted in the Heartbeat of the Nation, we bring you farm fresh palm produce, cultivated with care and delivered with heart.
          </p>
        </div>

        <button
          onClick={() => window.location.href = '/about/our-story'}
          className={`relative z-20 w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px]
            rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none
            mt-10 transition-all duration-700 delay-300 ease-in-out
            hover:bg-black hover:scale-105 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Discover Our Farm
        </button>
      </section>

      {/* PARTNERS */}
      <section ref={partnersRef} className={`w-full bg-[#F7F7F7] py-10 lg:pt-12 lg:pb-4 transition-opacity duration-1000 ${partnersInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className='items-center flex flex-col justify-center w-full text-black px-4'>
          <p className="font-medium font-commissioner text-center text-lg md:text-[20px] md:leading-[30px] max-w-3xl drop-shadow-md mb-8 lg:mb-10">
            We are supported by partners who believe in the value of local farming
          </p>
          <div className="flex flex-wrap justify-center items-center w-full max-w-4xl gap-y-6 gap-x-8 lg:gap-x-12 lg:gap-6 px-4 mb-5">
            <img src={logo1} alt="Edo State Government Logo" className="h-10 lg:h-15 object-contain" />
            <img src={logo2} alt="NIRSAL Logo" className="h-5 lg:h-7 object-contain" />
            <img src={logo3} alt="Bank of Agriculture Logo" className="h-8 lg:h-10 object-contain" />
            <img src={logo4} alt="Partner Bank Logo" className="h-9 lg:h-13 object-contain" />
            <img src={logo5} alt="Partner Logo" className="h-8 lg:h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="flex flex-wrap justify-center items-start w-full bg-[#E2FFEF] py-12 md:py-16 px-4 lg:ps-5 gap-8">
        <motion.div
          {...textAnimation}
          viewport={viewportSettings}
          className="w-full lg:w-[45%]"
        >
          <div className="flex flex-col justify-between lg:min-h-[500px]">
            <div>
              <h2 className="text-3xl font-bold font-commissioner mb-6 text-[#00994D]">Who we are</h2>
              <p className="text-base md:text-[22px] leading-relaxed mb-6">
                At <span className='text-[#00994D]'>Farmer Ebelo Limited,</span> we are rooted in the rich agricultural heritage of the Heartbeat of the Nation - Edo State,
                cultivating value from every part of the palm. From fresh palm fruits to premium palm kernel oil, palm kernel cake, and sludge, we process each product with care,
                purpose, and a deep respect for the land.
              </p>
              <p className='text-base md:text-[22px] leading-relaxed'>
                We are more than just a farm, we are a full cycle agricultural business committed to quality, sustainability, and local growth.
                Every harvest supports not just homes and industries, but also the communities around us. With every drop, kernel, and by-product;
                we deliver the best nature has to offer. Responsibly grown, expertly processed, and proudly local!
              </p>
            </div>
            <a
              href="/about/our-story"
              className="flex items-center justify-center w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px] 
                        rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none 
                        mt-8 transition-transform hover:scale-105"
            >
              Explore the Farm
            </a>
          </div>
        </motion.div>

        <motion.div
          {...imageAnimation}
          viewport={viewportSettings}
          className="relative w-full lg:w-[45%] mt-8 lg:mt-2 min-h-[300px] lg:min-h-[550px] flex justify-center items-center lg:items-start overflow-hidden"
        >
          <img
            src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756415724/staff4_z0tuof.png"
            alt="Lush, green palm oil plantation..."
            className="w-full max-w-lg lg:max-w-full h-auto lg:h-[550px] rounded-xl object-cover shadow-lg"
          />
          <img
            src={image7}
            alt=""
            className="absolute bottom-[-20px] right-[-10px] w-[100px] lg:w-[145px] lg:bottom-[-60px] lg:right-[-50px]"
          />
        </motion.div>
      </section>

      {/* BEGINNINGS */}
      <section ref={beginningsRef} className={`flex flex-wrap justify-between items-center w-full bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700 ${beginningsInView ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div
          {...textAnimation}
          viewport={viewportSettings}
          className='w-full lg:w-[40%]'
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight lg:leading-[1.3] font-extrabold mb-6 text-black ">
            From humble beginnings in 2019 to thriving fields, we have harvested and processed over <span className='text-[#00994D]'>14,000</span> palm fruits.
          </h2>
        </motion.div>

        <motion.div
          {...imageAnimation}
          viewport={viewportSettings}
          className="relative w-full lg:w-[45%] overflow-hidden"
        >
          <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383842/palmfruits2_uucvk7.png" alt="Close-up of freshly harvested palm fruits." className="w-full h-auto max-h-[350px] rounded-xl object-cover shadow-lg"/>
        </motion.div>
      </section>

      {/* GROWTH IN NUMBERS (UNCHANGED) */}
      <section className='bg-white w-full pb-7'>
        <div ref={growthBadgeRef} className={`px-4 py-2 mx-auto lg:mx-0 lg:ms-20 my-5 text-lg md:text-[1.375rem] bg-[#F9F9F9] text-[#00994D] rounded-2xl w-fit font-semibold transition-all duration-500 ${growthBadgeInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Our Growth in Numbers
        </div>

        <div className="flex flex-col lg:flex-row w-full text-center font-manrope">
          <div className="flex-1 p-8 lg:p-10 lg:pt-20 bg-[#2B4939] text-white">
            <AnimatedStat number={1980} suffix="+">Total area of planted oil palm</AnimatedStat>
          </div>
          <div className="flex-1 p-8 lg:p-10 lg:pt-20 bg-[#E2FFEF] text-black">
            <AnimatedStat number={39000}>Tons of palm oil produced</AnimatedStat>
          </div>
          <div className="flex-1 p-8 lg:p-10 lg:pt-20 bg-[#121F18] text-white">
            <AnimatedStat number={400} suffix="+">Direct and indirect employees</AnimatedStat>
          </div>
        </div>
      </section>

      {/* WHAT WE PRODUCE */}
      <section>
        <div className="px-4 sm:px-5 py-12 mb-10">
          <motion.div
            {...textAnimation}
            viewport={viewportSettings}
            className="text-3xl md:text-[40px] text-[#00994D] font-bold font-commissioner text-center md:text-left md:ms-15 mb-8"
          >
            What We Produce
          </motion.div>

          <div className="max-w-[82rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              {...imageAnimation}
              viewport={viewportSettings}
              className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/Palm_Fruits_Image_u3wksg.jpg" alt="Palm Fruits" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-3xl md:text-4xl font-semibold">Palm Fruits</span>
              </div>
            </motion.div>

            <div className="grid grid-rows-2 gap-6">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  {...imageAnimation}
                  viewport={viewportSettings}
                  className="relative group w-full overflow-hidden rounded-2xl shadow-md"
                >
                  <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383840/palmfruitsoil_pitrsu.png" alt="Palm Kernel Oil" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-2xl md:text-4xl font-semibold">Palm Kernel Oil</span>
                  </div>
                </motion.div>

                <motion.div
                  {...imageAnimation}
                  viewport={viewportSettings}
                  className="relative group w-full overflow-hidden rounded-2xl shadow-md"
                >
                  <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/sludge_bbwstk.png" alt="Sludge" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-3xl md:text-4xl font-semibold">Sludge</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                {...imageAnimation}
                viewport={viewportSettings}
                className="relative group overflow-hidden rounded-2xl shadow-md"
              >
                <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/palmkernel_vy6fyh.png" alt="Palm Kernel Cake" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-3xl md:text-4xl font-semibold">Palm Kernel Cake</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER WITH US */}
      <section className="relative px-4 py-12 md:py-16 bg-[#E2FFEF] text-center mb-12 md:mb-20 overflow-hidden">
        <motion.h4
          {...textAnimation}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          viewport={viewportSettings}
          className="text-2xl md:text-[32px] leading-none font-commissioner font-semibold text-[#00994D] mb-4"
        >
          Partner with us
        </motion.h4>

        <motion.h2
          {...textAnimation}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={viewportSettings}
          className="text-4xl md:text-[56px] leading-tight md:leading-none font-commissioner font-bold text-black mb-6 max-w-xl mx-auto"
        >
          Partnering to Grow Value, Sustainably
        </motion.h2>

        <motion.p
          {...textAnimation}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={viewportSettings}
          className="text-base md:text-[21px] leading-relaxed md:leading-[32px] font-manrope font-medium text-black max-w-xl mx-auto mb-8"
        >
          At Farmer Ebelo Limited, we are building more than a farm. We are creating a scalable, full-cycle palm processing operation with long term growth and impact. Partner with us on this journey towards delivering economic impact.
        </motion.p>

        <button
          onClick={() => window.location.href = '/contact'}
          className="relative z-20 w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px]
            rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none
            transition-all duration-700 ease-in-out hover:bg-gray-800 hover:scale-105"
        >
          Contact Us
        </button>

        <img
          src={image13}
          alt="Decorative"
          className="absolute -bottom-12 -left-8 w-[120px] md:w-[180px] object-contain -z-0"
        />
      </section>

      {/* WHY CHOOSE US */}
      <section
        ref={whyChooseUsRef}
        className={`flex flex-col md:flex-row justify-between items-center max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700 ${whyChooseUsInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <motion.div
          {...textAnimation}
          viewport={viewportSettings}
          className="basis-full md:basis-[54%] text-center md:text-left"
        >
          <div className="text-2xl md:text-[37px] text-[#00994D] font-semibold font-commissioner mb-5">
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-[43px] leading-tight md:leading-none font-commissioner font-bold text-black mb-6 max-w-2xl mx-auto md:mx-0">
            Rooted in Tradition, Powered by Quality.
          </h2>

          <p className="text-base md:text-[20px] leading-relaxed md:leading-[32px] font-manrope font-medium text-black max-w-2xl mb-8 mx-auto md:mx-0">
            Farmer Ebelo Limited draws on years of local farming experience to produce palm-based goods that stand out for their quality and consistency.
             From careful harvesting to precise processing, our promise is premium, locally-sourced excellent palm.
          </p>
        </motion.div>

        <motion.div
          {...imageAnimation}
          viewport={viewportSettings}
          className="basis-full md:basis-[45%] relative overflow-hidden"
        >
          <img
            src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383842/staff_btdqbk.png"
            alt="Close-up of freshly harvested palm fruits."
            className="w-full h-auto max-h-[400px] rounded-xl object-cover shadow-lg"
          />
        </motion.div>
      </section>

      {/* CARDS */}
      <section ref={cardsRef} className="bg-white pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1568px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cardsData.map((card, index) => (
              <HomepageCardWithIcon
                key={index}
                icon={card.icon}
                alt={card.alt}
                title={card.title}
                text={card.text}
                delay={cardsInView ? card.delay : "opacity-0"}
                offset={card.offset}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SLIDER */}
      <section>
        <div>
          <VideoSlider videos={myVideos} />
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="bg-white pb-5 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1568px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <motion.div
              {...imageAnimation}
              viewport={viewportSettings}
              className="flex flex-col h-full overflow-hidden rounded-lg"
            >
              <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383840/staff2_fmjojx.png" alt="Farm land" className="w-full h-full object-cover rounded-lg"/>
            </motion.div>

            <motion.div
              {...imageAnimation}
              viewport={viewportSettings}
              className="flex flex-col h-full overflow-hidden rounded-lg"
            >
              <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756415726/staff5_elda3w.png" alt="Factory processing" className="w-full h-full object-cover rounded-lg" />
            </motion.div>

            <motion.div
              {...imageAnimation}
              viewport={viewportSettings}
              className="flex flex-col h-full overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1"
            >
              <img src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/farm2_opyhmb.png" alt="Palm fruit harvesting" className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative bg-white py-12 md:py-16 px-4 text-center">
        <img
          src={image22}
          alt="Opening quote"
          className="absolute w-8 h-8 md:w-[52px] md:h-[48px] object-contain
                     top-4 left-4 md:top-[4.25rem] md:left-8 lg:left-44"
        />

        <img
          src={image23}
          alt="Closing quote"
          className="absolute w-8 h-8 md:w-[52px] md:h-[48px] object-contain
                     bottom-4 right-4 md:bottom-auto md:top-[4.25rem] md:right-8 lg:right-44"
        />

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[58px] leading-snug font-commissioner font-semibold text-black max-w-5xl mx-auto">
          We do not just plant palm. We plant a dream for our people and our land.
        </h3>
      </section>
    </div>
  );
};

export default HomePage;