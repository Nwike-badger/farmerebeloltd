import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; 
import CountUp from 'react-countup'; 

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
import image9 from '../assets/Palm Fruits Image.png'
import image10 from '../assets/Rectangle 1511.png'
import image11 from '../assets/Rectangle 1513.png'
import image12 from '../assets/Rectangle 1512.png'
import image13 from '../assets/Vector(10) (copy).png';
import image14 from '../assets/Rectangle 1464.png';
import image15 from '../assets/Vector(3).svg'
import image16 from '../assets/Group.svg'
import image17 from '../assets/Vector(4).svg'
import image18 from '../assets/Group 1000003906.png'
import image19 from '../assets/Rectangle 1471.png'
import image20 from '../assets/Rectangle 1472.png'
import image21 from '../assets/Rectangle 1473.png'
import image22 from '../assets/Group 1000003916.svg'
import image23 from '../assets/Group 1000003917.svg'


// MODIFIED: Made the paragraph width responsive to prevent awkward wrapping on small screens.
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


const HomePage2 = () => {
  
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
  const { ref: whyChooseUsRef, inView: whyChooseUsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.2 });


  return (
    <div className="relative w-screen min-h-screen font-commissioner overflow-x-hidden">
      <Navbar />

  
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4 overflow-hidden">
        
        {/* HERO BACKGROUND IMAGES */}
        <div className="absolute inset-0 z-10">
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
          {/* add a blue or any color Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
    </div>


        {/* TEXT CONTENT */}
        <div ref={heroRef} className={`relative z-20 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[70px] lg:leading-[77px] text-white ">
              Welcome to{' '}
              <span className="text-black px-2 rounded bg-white/90">
                Farmer Ebelo Ltd.
              </span>
          </h1>
          <p className="font-medium text-lg md:text-[23px] md:leading-[30px] text-white mt-6 max-w-5xl drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]">
                A leading oil palm plantation, rooted in the Heartbeat of the Nation, we bring you farm fresh palm produce, cultivated with care and delivered with heart.
          </p>
        </div>
        
        <button
          onClick={() => window.location.href = '/about/our-story'}
          className={`relative z-20 w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px]
            rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none
            mt-10 transition-all duration-700 delay-300 ease-in-out
            hover:bg-gray-800 hover:scale-105 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Discover our farm
        </button>
      </section>


        {/* MODIFIED: Added a light background color for this section to stand out on mobile. Reduced padding and gaps for a tighter mobile view. */}
        <section ref={partnersRef} className={`w-full bg-[#F7F7F7] py-10 lg:pt-12 lg:pb-4 transition-opacity duration-1000 ${partnersInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className='items-center flex flex-col justify-center w-full text-black px-4'>
                <p className="font-medium text-center text-lg md:text-[20px] md:leading-[30px] max-w-3xl drop-shadow-md mb-8 lg:mb-10">
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

        
        {/* MODIFIED: Reduced vertical padding for mobile. Adjusted text size for better readability on small screens. Removed fixed min-height on mobile to prevent excess empty space. */}
        <section ref={whoWeAreRef} className="flex flex-wrap justify-center items-start w-full bg-[#E2FFEF] py-12 md:py-16 px-4 lg:ps-5 gap-8">
          <div className={`w-full lg:w-[45%] transition-all duration-500 ${whoWeAreInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
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
                    Explore the farm
              </a>
            </div>
          </div>
          
          <div className={`relative w-full lg:w-[45%] mt-8 lg:mt-2 min-h-[300px] lg:min-h-[550px] flex justify-center items-center lg:items-start transition-all duration-500 delay-200 ${whoWeAreInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <img src={image6} alt="Lush, green palm oil plantation..." className="w-full max-w-lg lg:max-w-full h-auto lg:h-[550px] rounded-xl object-cover shadow-lg"/>
            <img src={image7} alt="" className="absolute bottom-[-20px] right-[-10px] w-[100px] lg:w-[145px] lg:bottom-[-60px] lg:right-[-50px]"/>
          </div>
        </section>

        {/* MODIFIED: Reduced vertical padding on mobile. */}
        <section ref={beginningsRef} className={`flex flex-wrap justify-between items-center w-full bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700 ${beginningsInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className='w-full lg:w-[40%]'>
              <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight lg:leading-[1.3] font-extrabold mb-6 text-black ">From humble beginnings in 2019 to thriving fields, we have harvested and processed over <span className='text-[#00994D]'>14,000</span> palm fruits.</h2>
          </div>
          <div className="relative w-full lg:w-[45%]">
            <img src={image8} alt="Close-up of freshly harvested palm fruits." className="w-full h-auto max-h-[350px] rounded-xl object-cover shadow-lg"/>
          </div>
        </section>

        {/* MODIFIED: Reduced padding inside stat blocks for a better fit on mobile screens. */}
        <section className='bg-white w-full pb-7'>
          <div ref={growthBadgeRef} className={`px-4 py-2 mx-auto lg:mx-0 lg:ms-20 my-5 text-lg md:text-[1.375rem] bg-[#F9F9F9] text-[#00994D] rounded-2xl w-fit font-semibold transition-all duration-500 ${growthBadgeInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Growth in Numbers
          </div>

          <div className="flex flex-col lg:flex-row w-full text-center">
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

        {/* MODIFIED: Removed min-height, adjusted title to be centered and smaller on mobile, reduced overlay text size for mobile. */}
        <section>
          <div className="px-4 sm:px-5 py-12 mb-10">
            <div className="text-3xl md:text-[40px] text-[#00994D] font-bold font-commissioner text-center md:text-left md:ms-15 mb-8">
              What We Produce
            </div>
            <div className="max-w-[82rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="relative group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img src={image9} alt="Palm Fruits" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-3xl md:text-4xl font-semibold">Palm Fruits</span>
                </div>
              </div>

              <div className="grid grid-rows-2 gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group w-full overflow-hidden rounded-2xl shadow-md">
                    <img src={image10} alt="Palm Kernel Oil" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-2xl md:text-4xl font-semibold">Palm Kernel Oil</span>
                    </div>
                  </div>
                  <div className="relative group w-full overflow-hidden rounded-2xl shadow-md">
                    <img src={image11} alt="Sludge" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-3xl md:text-4xl font-semibold">Sludge</span>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-md">
                  <img src={image12} alt="Palm Kernel Cake" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-[#2B4939CC] flex items-center justify-center text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-3xl md:text-4xl font-semibold">Palm Kernel Cake</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* MODIFIED: Reduced vertical padding, margins and font sizes for a better mobile layout. Adjusted decorative image size and position for mobile. */}
<section className="relative px-4 py-12 md:py-16 bg-[#E2FFEF] text-center mb-12 md:mb-20 overflow-hidden">
  <h4 className="text-2xl md:text-[32px] leading-none font-commissioner font-semibold text-[#00994D] mb-4">
    Partner with us
  </h4>

  <h2 className="text-4xl md:text-[56px] leading-tight md:leading-none font-commissioner font-bold text-black mb-6 max-w-xl mx-auto">
    Partnering to Grow Value, Sustainably
  </h2>

  <p className="text-base md:text-[21px] leading-relaxed md:leading-[32px] font-manrope font-medium text-black max-w-xl mx-auto mb-8">
    At Farmer Ebelo Limited, we are building more than a farm. We are creating a scalable, full-cycle palm processing operation with long term growth and impact. Partner with us on this journey towards delivering economic impact.
  </p>

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


      {/* MODIFIED: Used a new ref for intersection observer. Reduced padding and font sizes for mobile. */}
      <section
          ref={whyChooseUsRef}
          className={`flex flex-col md:flex-row justify-between items-center max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700 ${whyChooseUsInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="basis-full md:basis-[54%] text-center md:text-left">
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
          </div>

          <div className="basis-full md:basis-[45%] relative">
            <img
              src={image14}
              alt="Close-up of freshly harvested palm fruits."
              className="w-full h-auto max-h-[400px] rounded-xl object-cover shadow-lg"
            />
          </div>
      </section>


      {/* MODIFIED: Fixed non-standard padding `px-18`. Made padding responsive. Reduced header font size on mobile. */}
      {/* DESKTOP ANIMATION: Added staggered fade-in-up animation to the cards. */}
      <section ref={cardsRef} className="bg-white pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1568px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            <div className={`bg-[#F9F9F9] p-6 rounded-2xl flex flex-col h-full transition-all duration-500 ${cardsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-[70px] h-[70px] bg-white rounded-full p-2 mb-6 shadow">
                <img src={image15} alt="Icon for Experience" className="w-full h-full object-contain rounded-full"/>
              </div>
              <h4 className="text-2xl md:text-[28px] text-[#00994D] font-semibold font-commissioner mb-4">
                Rooted in Experience
              </h4>
              <p className="text-base md:text-[18px] leading-relaxed md:leading-[30px] font-manrope font-medium text-black">
                With years of hands-on experience, we bring practical expertise to every stage of palm cultivation and processing.
              </p>
            </div>

            <div className={`bg-[#F9F9F9] p-6 rounded-2xl flex flex-col h-full transition-all duration-500 delay-200 ${cardsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-[70px] h-[70px] bg-white rounded-full p-2 mb-6 shadow">
                <img src={image16} alt="Icon for Quality" className="w-full h-full object-contain rounded-full"/>
              </div>
              <h4 className="text-2xl md:text-[28px] text-[#00994D] font-semibold font-commissioner mb-4">
                Quality Assurance
              </h4>
              <p className="text-base md:text-[18px] leading-relaxed md:leading-[30px] font-manrope font-medium text-black">
                From harvest to processing, we maintain rigorous quality control to deliver products you can trust.
              </p>
            </div>

            <div className={`bg-[#F9F9F9] p-6 rounded-2xl flex flex-col h-full transition-all duration-500 delay-[400ms] ${cardsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-[70px] h-[70px] bg-white rounded-full p-2 mb-6 shadow">
                <img src={image17} alt="Icon for Community" className="w-full h-full object-contain rounded-full"/>
              </div>
              <h4 className="text-2xl md:text-[28px] text-[#00994D] font-semibold font-commissioner mb-4">
                Built on Community
              </h4>
              <p className="text-base md:text-[18px] leading-relaxed md:leading-[30px] font-manrope font-medium text-black">
                We believe growth is shared. From job creation to community empowerment, our work uplifts the people that host us.
              </p>
            </div>

          </div>
        </div>
      </section>

{/* MODIFIED: Fixed non-standard padding `px-18` and made it responsive. */}
<section className='px-4 md:px-8 lg:px-16 pb-7'>
  <div className="max-w-[1568px] mx-auto">
    <img
            src={image18}
            alt="Infographic about our process"
            className="w-full h-full object-contain"
          />
  </div>
</section>

{/* MODIFIED: Fixed non-standard padding `px-18` and made it responsive. Added a gap on mobile. */}
<section className="bg-white pb-5 px-4 md:px-8 lg:px-16">
  <div className="max-w-[1568px] mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      
        <div className="flex flex-col h-full">
            <img src={image19} alt="Farm land" className="w-full h-full object-cover rounded-lg"/>
        </div>

        <div className="flex flex-col h-full">
            <img src={image20} alt="Palm fruit harvesting" className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="flex flex-col h-full sm:col-span-2 lg:col-span-1">
            <img src={image21} alt="Factory processing" className="w-full h-full object-cover rounded-lg" />
        </div>
    </div>
  </div>
</section>

{/* MODIFIED: Reduced vertical padding and font sizes for mobile. Adjusted quote icon positioning to be less aggressive on medium screens. */}
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

  <Footer/>

  </div>
    
  );
};

export default HomePage2;