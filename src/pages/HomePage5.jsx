import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; 
import CountUp from 'react-countup'; 

import Navbar from '../components/Navbar';
import image1 from '../assets/Group 114.png';
import image2 from '../assets/Group 114(1).png';
import image3 from '../assets/Group 114(2).png';
import logo1 from '../assets/EDSG-LOGO-Hi-res 1.svg';
import logo2 from '../assets/nirsal-logo-big 1.svg';
import logo3 from '../assets/boa-logo 1.svg';
import logo4 from '../assets/bank 1.svg';
import logo5 from '../assets/logo 1.svg';
import image6 from '../assets/Rectangle 1505.png';
import image7 from '../assets/Vector(10).png';
import image8 from '../assets/Rectangle 1506.png';



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
      <p className='text-xl lg:text-2xl w-56 mx-auto'>{children}</p>
    </div>
  );
};


const HomePage5 = () => {
  
  const backgrounds = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);


  
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: partnersRef, inView: partnersInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whoWeAreRef, inView: whoWeAreInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: beginningsRef, inView: beginningsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: growthBadgeRef, inView: growthBadgeInView } = useInView({ triggerOnce: true, threshold: 0.8 });


  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      <Navbar />

      <div className="fixed inset-0 z-0">
        {backgrounds.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="relative z-30 w-full">
        
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div ref={heroRef} className={`relative z-20 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-[70px] lg:leading-[77px] text-white drop-shadow-lg">
              Welcome to{' '}
              <span className="bg-[#00994D] px-2 rounded">
                Farmer Ebelo Ltd.
              </span>
            </h1>
            <p className="font-medium text-lg md:text-[20px] md:leading-[30px] text-white mt-6 max-w-3xl drop-shadow-md">
              A leading oil palm plantation, rooted in the Heartbeat of the Nation, we bring you farm fresh palm produce, cultivated with care and delivered with heart.
            </p>
          </div>
           
          <button
              onClick={() => window.location.href = '/about/our-story'}
              className={`relative z-20 w-[200px] h-[50px] bg-[#00994D] text-white font-semibold text-lg md:text-[20px]
                rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none
                mt-10 transition-all duration-700 delay-300 ease-in-out
                hover:bg-[#007a3e] hover:scale-105 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
              Discover our farm
          </button>

        </section>

        
        <section ref={partnersRef} className={`w-full bg-white pt-12 pb-4 transition-opacity duration-1000 ${partnersInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className='items-center flex flex-col justify-center w-full text-black px-4'>
                <p className="font-medium text-center text-lg md:text-[20px] md:leading-[30px] max-w-3xl drop-shadow-md mb-10">
                  We are supported by partners who believe in the value of local farming
                </p>
                <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-4xl gap-y-8 gap-x-12 lg:gap-6 px-4 mb-5">
                  <img src={logo1} alt="Edo State Government Logo" className="h-12 lg:h-15 object-contain" />
                  <img src={logo2} alt="NIRSAL Logo" className="h-6 lg:h-7 object-contain" />
                  <img src={logo3} alt="Bank of Agriculture Logo" className="h-9 lg:h-10 object-contain" />
                  <img src={logo4} alt="Partner Bank Logo" className="h-11 lg:h-13 object-contain" />
                  <img src={logo5} alt="Partner Logo" className="h-9 lg:h-10 object-contain" />
                </div>
            </div>
        </section>

        
        <section ref={whoWeAreRef} className="flex flex-wrap justify-center items-start w-full bg-[#E2FFEF] py-16 px-4 lg:ps-5  gap-8">
          {/* MODIFIED: Add animation class based on parent's visibility */}
          <div className={`w-full lg:w-[45%] transition-all duration-500 ${whoWeAreInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="flex flex-col justify-between min-h-[500px]">
              <div>
                <h2 className="text-3xl font-bold font-commissioner mb-6 text-[#00994D]">Who we are</h2>
                <p className="text-xl md:text-[22px] leading-relaxed mb-6">
                  At <span className='text-[#00994D]'>Farmer Ebelo Limited,</span> we are rooted in the rich agricultural heritage of the Heartbeat of the Nation - Edo State,
                   cultivating value from every part of the palm. From fresh palm fruits to premium palm kernel oil, palm kernel cake, and sludge, we process each product with care,
                    purpose, and a deep respect for the land.
                </p>
                <p className='text-xl md:text-[22px] leading-relaxed'>
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
                    Explore the farm
              </a>
            </div>
          </div>
          
          <div className={`relative w-full lg:w-[45%] mt-2 min-h-[400px] lg:min-h-[550px] flex justify-center items-center lg:items-start transition-all duration-500 delay-200 ${whoWeAreInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <img src={image6} alt="Lush, green palm oil plantation..." className="w-full max-w-lg lg:max-w-full h-auto lg:h-[550px] rounded-xl object-cover shadow-lg"/>
            <img src={image7} alt="" className="absolute bottom-[-20px] right-0 w-[100px] lg:w-[145px] lg:bottom-[-60px] lg:right-[-50px]"/>
          </div>
        </section>

        {/* MODIFIED: Add ref and animations */}
        <section ref={beginningsRef} className={`flex flex-wrap justify-between items-center w-full bg-white py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700 ${beginningsInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className='w-full lg:w-[40%]'>
              <h2 className="text-3xl lg:text-4xl leading-tight lg:leading-[1.3] font-extrabold mb-6 text-black ">From humble beginnings in 2019 to thriving fields, we have harvested and processed over <span className='text-[#00994D]'>14,000</span> palm fruits.</h2>
          </div>
          <div className="relative w-full lg:w-[45%]">
            <img src={image8} alt="Close-up of freshly harvested palm fruits." className="w-full h-auto max-h-[350px] rounded-xl object-cover shadow-lg"/>
          </div>
        </section>

        <section className='bg-white w-full pb-16'>
          {/* MODIFIED: Add ref and animation */}
          <div ref={growthBadgeRef} className={`px-4 py-2 mx-auto lg:mx-0 lg:ms-20 my-5 text-lg md:text-[1.375rem] bg-[#F9F9F9] text-[#00994D] rounded-2xl w-fit font-semibold transition-all duration-500 ${growthBadgeInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Growth in Numbers
          </div>

          <div className="flex flex-col lg:flex-row w-full text-center">
              {/* MODIFIED: Use the new AnimatedStat component for the count-up effect */}
              <div className="flex-1 p-10 lg:pt-20 bg-[#2B4939] text-white">
                  <AnimatedStat number={1980} suffix="+">Total area of planted oil palm</AnimatedStat>
              </div>
              <div className="flex-1 p-10 lg:pt-20 bg-[#E2FFEF] text-black">
                  <AnimatedStat number={39000}>Tons of palm oil produced</AnimatedStat>
              </div>
              <div className="flex-1 p-10 lg:pt-20 bg-[#121F18] text-white">
                  <AnimatedStat number={400} suffix="+">Direct and indirect employees</AnimatedStat>
              </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage5;