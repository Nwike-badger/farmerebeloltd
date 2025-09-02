
import React from 'react';


const CommunityImpact = () => {
  

  
 

  return (
    <div className="w-full min-h-screen font-commissioner overflow-x-hidden">
      
      {/* Background Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/farm2_opyhmb.png"
          alt="Farmer Ebelo farm background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
        <div className="px-6">
          <h2 className="text-[32px] md:text-[45px] font-bold leading-[40px] md:leading-[48px] text-white max-w-3xl">
            Corporate Social Responsibilty
          </h2>
        </div>
      </section>

      
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00994D]">Our Commitment</h2>
        <p className="text-lg md:text-xl max-w-6xl mx-auto">
          Farmer Ebelo Limited is dedicated to cultivating impact beyond our fields. Our commitment goes beyond farming, we support initiatives that uplift our host communities, empower our employees, and strengthen our partnerships with government agencies, customers, and other stakeholders. Our CSR is purpose-driven with the aim of making positive impact through strategic programs that promote quality education, enhance access to healthcare, promote sustainable agriculture and drive socio-economic growth.
        </p>
      </section>

      {/* Full-width Image */}
      <section>
        <img 
          src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383834/community_ofkvpn.png" 
          alt="Community Impact Banner" 
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#00994D]">Our Scope</h2>
        <p className="text-lg md:text-xl  max-w-4xl mx-auto">
          Our CSR scope cuts across three cardinal points - Health, Education and Environment
        </p>
      </section>

      <section className="px-6 md:px-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
  {/* Card 1 */}
  <div className="flex flex-col">
    <img 
      src="https://res.cloudinary.com/dk95qi8q9/image/upload/v1756823544/Rectangle_1526_etbzge.png" 
      alt="Team" 
      className="w-full h-64 md:h-80 object-cover rounded-2xl"
    />
    <div className="mt-6 ">
      <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#00994D]">Health</h4>
      <p className="text-gray-600 text-sm md:text-base">
        Farmer Ebelo is committed to improving the health and wellbeing of members of our host communities. Through regular medical outreaches, we provide free consultations, essential drugs, health education, and preventive care services to underserved populations.
      </p>
      <p className="text-gray-600 text-sm md:text-base mt-3">
        Through this initiative, we have worked with healthcare providers to deliver impactful outreach programs, ensuring that no one is left behind in accessing basic healthcare.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col">
    <img 
      src="https://res.cloudinary.com/dk95qi8q9/image/upload/v1756823545/Rectangle_1527_nevtfp.png" 
      alt="Community" 
      className="w-full h-64 md:h-80 object-cover rounded-2xl"
    />
    <div className="mt-6 ">
      <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#00994D]">Education</h4>
      <p className="text-gray-600 text-sm md:text-base">
        At Farmer Ebelo Limited, we see education as a seed of lasting transformation. By supporting students, providing learning materials, and creating opportunities for skill development, we empower young people to dream bigger and achieve more.
      </p>
      <p className="text-gray-600 text-sm md:text-base mt-4">
        From scholarships and school facility upgrades to training initiatives that equip youths with practical knowledge, our investment in education ensures that every child and student in our host communities has the chance to grow, thrive, and contribute meaningfully to society.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col">
    <img 
      src="https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383833/building_o9xgya.png" 
      alt="Sustainability" 
      className="w-full h-64 md:h-80 object-cover rounded-2xl"
    />
    <div className="mt-6 ">
      <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#00994D]">Environment</h4>
      <p className="text-gray-600 text-sm md:text-base">
        We believe that a thriving community is built on the foundations of a thriving environment. As part of our environmental impact, we facilitated the linking of the 13 communities in our area to the national grid, ensuring access to electricity. We are also currently carrying out the construction of a 49km road, improving the road networks of our communities and opening up opportunities for trade, mobility and economic growth within our community.
      </p>
    </div>
  </div>
</section>




  
      
    </div>
  );
};

export default CommunityImpact;