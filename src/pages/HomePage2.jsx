import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import image1 from '../assets/Download-Pictures-Of-Nature-For-Backgrounds.jpg';
import image2 from '../assets/gettyimages-130409782-2048x2048.jpg';
import image3 from '../assets/gettyimages-1292399669-2048x2048.jpg';
import image4 from '../assets/gettyimages-1586165598-2048x2048.jpg';
import logo1 from '../assets/EDSG-LOGO-Hi-res 1.svg';
import logo2 from '../assets/nirsal-logo-big 1.svg';
import logo3 from '../assets/boa-logo 1.svg';
import logo4 from '../assets/bank 1.svg';
import logo5 from '../assets/logo 1.svg';
import image6 from '../assets/Rectangle 1505.png';
import image7 from '../assets/Vector(10).png';
import image8 from '../assets/Rectangle 1506.png';

const HomePage2 = () => {
  const backgrounds = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    // CHANGE 1: Removed `h-screen` and `overflow-hidden` to allow the page to scroll.
    <div className="relative w-screen min-h-screen font-commissioner">
      
      {/* For a fixed navbar, ensure the Navbar component itself has `fixed top-0 left-0 w-full z-50` classes. */}
      <Navbar />

      {/* CHANGE 2: Changed background from `absolute` to `fixed` to keep it in place during scroll. */}
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
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Main content container that scrolls over the fixed background */}
      <div className="relative z-10 w-full">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4">
          {/* CHANGE 3: Made font size responsive. It's smaller on mobile and grows to your original size on desktop. */}
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[70px] lg:leading-[77px] text-white drop-shadow-lg">
            Welcome to{' '}
            <span className="text-[#121F18] px-2 rounded">
              Farmer Ebelo Ltd.
            </span>
          </h1>
          <p className="font-medium text-lg md:text-[20px] md:leading-[30px] text-white mt-6 max-w-3xl drop-shadow-md">
            A leading oil palm plantation, rooted in the Heartbeat of the Nation, we bring you farm fresh palm produce, cultivated with care and delivered with heart.
          </p>
          <button
            onClick={() => window.location.href = '/about/our-story'}
            className="w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px] rounded-[10px] mt-10 hover:bg-gray-800 transition-colors"
          >
            Discover our farm
          </button>
        </section>

        {/* This section is now reachable by scrolling. */}
        <section className="flex flex-col w-full bg-white pt-12 pb-4">
            
            <div className='items-center flex flex-col justify-center w-full bg-white text-black px-4'>
                <p className="font-medium text-center text-lg md:text-[20px] md:leading-[30px] max-w-3xl drop-shadow-md mb-10">
                  We are supported by partners who believe in the value of local farming
                </p>

                {/* CHANGE 4: Logos now center and stack on mobile (`justify-center`) but keep your layout on desktop (`lg:justify-between`). */}
                <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-4xl gap-y-8 gap-x-12 lg:gap-6 px-4 mb-5">
                  <img src={logo1} alt="Edo State Government Logo" className="h-12 lg:h-15 object-contain" />
                  <img src={logo2} alt="NIRSAL Logo" className="h-6 lg:h-7 object-contain" />
                  <img src={logo3} alt="Bank of Agriculture Logo" className="h-9 lg:h-10 object-contain" />
                  <img src={logo4} alt="Partner Bank Logo" className="h-11 lg:h-13 object-contain" />
                  <img src={logo5} alt="Partner Logo" className="h-9 lg:h-10 object-contain" />
                </div>
            </div>
        </section>

        {/* Who We Are Section */}
        {/* CHANGE 5: Added responsive padding (`px-4`) and adjusted flexbox to stack on mobile. */}
        <section className="flex flex-wrap justify-center items-start w-full bg-[#E2FFEF99] py-16 px-4 lg:px-8 gap-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-between w-full lg:w-[42%] min-h-[500px]">
            <div>
              <h2 className="text-3xl font-bold font-commissioner mb-6 text-[#00994D]">Who we are</h2>
              <p className="text-xl md:text-[22px] leading-relaxed mb-6">
                At <span className='text-[#00994D]'>Farmer Ebelo Limited,</span> we are rooted in the rich agricultural heritage of the Heartbeat of the Nation — Edo State,
                cultivating value from every part of the palm. From fresh palm fruits to premium palm kernel oil,
                palm kernel cake, and sludge, we process each product with care, purpose, and a deep respect for the land.
              </p>
              <p className='text-xl md:text-[22px] leading-relaxed'>
                We are more than just a farm, we are a full cycle agricultural business committed to quality, sustainability, 
                and local growth. Every harvest supports not just homes and industries, but also the communities around us. With every drop,
                kernel, and by-product; we deliver the best nature has to offer. Responsibly grown, expertly processed, and proudly local!
              </p>
            </div>
            
            <a
              href='/about/our-story'
              className="flex items-center justify-center w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px] rounded-[10px] mt-8 hover:bg-gray-800 transition-colors"
            >
              Discover our farm
            </a>
          </div>

          {/* Right Column - Image with Overlap */}
          <div className="relative w-full lg:w-[47%] mt-2 min-h-[400px] lg:min-h-[500px] flex justify-center items-center lg:items-start">
            <img
              src={image6}
              alt="Lush, green palm oil plantation with workers harvesting fresh palm fruits."
              className="w-full max-w-lg lg:max-w-full h-auto lg:h-[500px] rounded-xl object-cover shadow-lg"
            />
            {/* CHANGE 6: Adjusted decorative image position to be safe on mobile and apply your overlap only on desktop (`lg:`). */}
            <img
              src={image7}
              alt="" // Decorative image
              className="absolute bottom-[-20px] right-0 w-[100px] lg:w-[145px] lg:bottom-[-60px] lg:right-[-50px]"
            />
          </div>
        </section>

        {/* From Humble Beginnings Section */}
        {/* CHANGE 7: Made padding responsive and ensured vertical stacking on mobile. */}
        <section className="flex flex-wrap justify-between items-center w-full bg-white py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4">
          <div className='w-full lg:w-[40%]'>
              <h2 className="text-3xl lg:text-4xl leading-tight lg:leading-[1.3] font-extrabold mb-6 text-black ">From humble beginnings in 2019 to thriving fields, we have harvested and processed over <span className='text-[#00994D]'>14,000</span> palm fruits.</h2>
          </div>
          <div className="relative w-full lg:w-[45%]">
            <img
              src={image8}
              alt="Close-up of freshly harvested palm fruits."
              className="w-full h-auto max-h-[350px] rounded-xl object-cover shadow-lg"
            />
          </div>
        </section>

        {/* Growth in Numbers Section */}
        <section className='bg-white w-full pb-16'>
          {/* CHANGE 8: Centered the badge on mobile and restored your margin on desktop (`lg:`). */}
          <div className="px-4 py-2 mx-auto lg:mx-0 lg:ms-20 my-5 text-lg md:text-[1.375rem] bg-[#F9F9F9] text-[#00994D] rounded-2xl w-fit font-semibold">
              Our Growth in Numbers
          </div>

          {/* CHANGE 9: The three stat cards now stack vertically on mobile and go in a row on desktop (`lg:flex-row`). */}
          <div className="flex flex-col lg:flex-row w-full text-center">
              <div className="flex-1 p-10 lg:pt-20 bg-[#2B4939] text-white">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">1,980+</h3>
                  <p className='text-xl lg:text-2xl w-56 mx-auto'>Total area of planted oil palm</p>
              </div>
              <div className="flex-1 p-10 lg:pt-20 bg-[#E2FFEF99] text-black">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">39,000</h3>
                  <p className='text-xl lg:text-2xl w-56 mx-auto'>Tons of palm oil produced</p>
              </div>
              <div className="flex-1 p-10 lg:pt-20 bg-[#121F18] text-white">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">400+</h3>
                  <p className='text-xl lg:text-2xl w-56 mx-auto'>Direct and indirect employees</p>
              </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage2;