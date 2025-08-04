import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import image1 from '../assets/Download-Pictures-Of-Nature-For-Backgrounds.jpg';
import image2 from '../assets/gettyimages-130409782-2048x2048.jpg';
import image3 from '../assets/gettyimages-1292399669-2048x2048.jpg';
import image4 from '../assets/gettyimages-1586165598-2048x2048.jpg';
import logo1 from '../assets/EDSG-LOGO-Hi-res 1.svg'
import logo2 from '../assets/nirsal-logo-big 1.svg'
import logo3 from '../assets/boa-logo 1.svg'
import logo4 from '../assets/bank 1.svg'
import logo5 from '../assets/logo 1.svg'
import image6 from '../assets/Rectangle 1505.png'
import image7 from '../assets/Vector(10).png'
import image8 from '../assets/Rectangle 1506.png'

const HomePage4 = () => {
  const backgrounds = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    // 1. REMOVED `h-screen` and `overflow-hidden` to allow the page to scroll naturally.
    <div className="relative w-screen min-h-screen font-commissioner ">
      
      {/* SEE STEP 2 BELOW on how to make your Navbar fixed. */}
      <Navbar />

      {/* 2. CHANGED background from `absolute` to `fixed` to keep it in place during scroll. */}
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

      {/* 3. REMOVED `h-full` and `overflow-y-auto` since the whole page will scroll now. */}
      <div className="relative z-10 w-full">
        
        {/* 4. MODIFIED section to fill the screen and center content. This pushes the next section down, making scrolling necessary. */}
        <section className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4">
          <h1 className="font-commissioner font-bold text-[70px] leading-[77px] text-white drop-shadow-lg">
            Welcome to{' '}
            <span className="text-[#121F18] px-2 rounded">
              Farmer Ebelo Ltd.
            </span>
          </h1>
          <p className="font-commisioner font-medium text-[20px] leading-[30px] text-white mt-6 max-w-3xl drop-shadow-md">
            A leading oil palm plantation, rooted in the Heartbeat of the Nation, we bring you farm fresh palm produce, cultivated with care and delivered with heart.
          </p>
          <button
            onClick={() => window.location.href = '/about/our-story'}
            className="w-[200px] h-[50px] bg-black text-white font-commissioner font-semibold text-[20px] leading-[24px] rounded-[10px] mt-10"
          >
            Discover our farm
          </button>
        </section>

        {/* This section is now reachable by scrolling. */}
        <section className="flex flex-col w-full bg-white py-13">
            
            <div className='items-center flex flex-col  justify-center w-full bg-white text-black'>
                <p className="font-commissioner font-medium text-[20px] leading-[30px] max-w-3xl drop-shadow-md text-center mb-10">
                We are supported by partners who believe in the value of local farming
                </p>

            {/* Logo Row */}
                <div className="flex justify-between items-center w-full max-w-4xl gap-6 px-4 mb-5 flex-wrap">
                  <img src={logo1} alt="Partner 1" className="h-15 object-contain" />
                  <img src={logo2} alt="Partner 2" className="h-7 object-contain" />
                  <img src={logo3} alt="Partner 3" className="h-10 object-contain" />
                  <img src={logo4} alt="Partner 4" className="h-13 object-contain" />
                  <img src={logo5} alt="Partner 4" className="h-10 object-contain" />
                </div>
            </div>

        <div className="flex flex-wrap justify-center items-start w-full bg-[#E2FFEF99] py-10 gap-8">
          {/* Left Column - Text Content (Desktop layout is identical) */}
          <div className="flex flex-col justify-between w-full md:w-[42%] min-h-[500px] ms-8">
            <div>
              <h2 className="text-3xl font-bold font-commissioner mb-6 text-[#00994D]">Who we are</h2>
              <p className="text-[22px] font-commissioner leading-relaxed mb-6">
                At <span className='text-[#00994D]'>Farmer Ebelo Limited,</span> we are rooted in the rich agricultural heritage of the Heartbeat of the Nation — Edo State,
                cultivating value from every part of the palm. From fresh palm fruits to premium palm kernel oil,
                palm kernel cake, and sludge, we process each product with care, purpose, and a deep respect for the land.
              </p>
              <p className='text-[22px] font-commissioner leading-relaxed'>
                We are more than just a farm, we are a full cycle agricultural business committed to quality, sustainability, 
                and local growth. Every harvest supports not just homes and industries, but also the communities around us. With every drop,
                kernel, and by-product; we deliver the best nature has to offer. Responsibly grown, expertly processed, and proudly local!
              </p>
            </div>
            
            {/* IMPROVEMENT 1: Changed to an <a> tag for correct semantics, styled to look identical to your button. */}
            <a
              href='/about/our-story'
              className="flex items-center justify-center w-[200px] h-[50px] bg-black text-white font-commissioner font-semibold text-[20px] rounded-[10px] mt-6 hover:bg-gray-700 transition-colors"
            >
              Discover our farm
            </a>
          </div>

          {/* Right Column - Wider Image with Overlap (Desktop layout is identical) */}
          <div className="relative w-full md:w-[47%] mt-2 min-h-[500px] flex justify-center items-start">
            {/* IMPROVEMENT 2: Alt text is now more descriptive for accessibility. */}
            <img
              src={image6}
              alt="Lush, green palm oil plantation with workers harvesting fresh palm fruits."
              className="w-full h-[500px] rounded-xl object-cover shadow-lg"
            />

            {/* IMPROVEMENT 3: Critical fix for mobile. The image is positioned safely on small screens 
              and only moves to its overlapping position on desktop (md), preventing horizontal scrollbars.
            */}
            <img
              src={image7}
              alt="" // Decorative images have an empty alt tag.
              className="absolute bottom-4 right-4 w-[100px] md:w-[145px] md:bottom-[-60px] md:right-[-50px]"
            />
          </div>
        </div>

        
        <div className="flex flex-wrap justify-between items-start w-full  pt-10 px-20">
          
              <div className='w-full md:w-[40%] min-h-[300px] mt-25'>
                  <h2 className="text-4xl leading-[1.3]  font-extrabold font-commissioner mb-6 text-black ">From humble beginnings in 2019 to thriving fields, we have harvested and processed over <span className='text-[#00994D]'>14,000</span> palm fruits.</h2>
              
              </div>

          
            <div className="relative w-full md:w-[40%] mt-2 min-h-[400px] ">
              
              <img
                src={image8}
                alt="Lush, green palm oil plantation with workers harvesting fresh palm fruits."
                className="w-full h-[350px] rounded-xl object-cover shadow-lg"
              />

            </div>
        </div>

      <div class="px-4 ms-19 font-semibold py-2 my-5 text-[1.375rem] bg-[#F9F9F9] text-[#00994D] rounded-2xl w-72">
              Our Growth in Numbers
      </div>

        <div class="flex w-full">
            <div class="flex-1  p-6 pt-20 bg-[#2B4939] text-center text-white min-h-[260px]">
                <h3 class="text-5xl font-bold mb-2">1,980+</h3>
                <p className='text-2xl w-56 mx-auto' >Total area of planted oil palm</p>
            </div>

            <div class="flex-1  p-6 pt-20 bg-[#E2FFEF99] text-center text-black">
                <h3 class="text-5xl font-bold mb-2">39,000</h3>
                <p className='text-2xl w-56 mx-auto'>Tons of palm oil produced</p>
            </div>

            <div class="flex-1 p-6 pt-20 bg-[#121F18] text-center text-white">
                <h3 class="text-5xl font-bold mb-2">400+</h3>
                <p className='text-2xl w-56 mx-auto'>Direct and indirect employees</p>
            </div>
        </div>

        



      </section>



      </div>
    </div>
  );
};

export default HomePage4;