// MeetOurFounder.jsx
import React from 'react';
import image1 from '../assets/founder.png';

const MeetOurFounder = () => {
  return (
    <div className="w-full min-h-screen font-commissioner bg-white overflow-x-hidden">
      
      
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 lg:px-20 h-auto">


        
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={image1}
            alt="Goodluck Ilajufi Ebelo"
            className="w-[90vw] max-w-[407px] h-auto max-h-[600px] rounded-[20px] object-cover shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col text-center md:text-left max-w-2xl mt-0 md:mt-25">
          <h2 className="font-commissioner text-[32px] sm:text-[42px] lg:text-[48px] leading-tight tracking-tight">
            <span className="font-medium">Goodluck Ilajufi</span>
            <br className="hidden md:block" />
            <span className="font-bold">Ebelo</span>
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Managing Director, Farmer Ebelo Limited
          </p>

          <hr className="w-full mx-auto md:mx-0 my-6 border-t-2 border-gray-500" />

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-600">
            <p>
              Email:{" "}
              <a
                href="mailto:goodluckebelo@farmerebelo.biz"
                className="hover:underline"
              >
                goodluckebelo@farmerebelo.biz
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="#" className="hover:underline">
                Goodluck Ebelo
              </a>
            </p>
          </div>

          {/* First Bio Paragraph */}
          <p className="mt-6 text-base  leading-relaxed">
            Goodluck Ilajufi Ebelo is the Managing Director and Chief Executive of
            Farmer Ebelo Limited. He studied at Obafemi Awolowo University and later at
            the Kellogg School of Management, equipping him with both local and global
            perspectives on leadership, innovation, and business strategy.
          </p>
        </div>
      </section>

      {/* Second Bio Paragraph - Full Width */}
      <section className="px-6 lg:px-20  max-w-7xl mx-auto mt-7">
        <p className="text-base   leading-relaxed text-center md:text-justify">
          With over two decades of distinguished experience in journalism, Goodluck has
          built a reputation as a thought leader and change maker. As the Publisher and
          Editor-in-Chief of Nigerian Times, he spearheaded investigative and
          development-driven reporting that shaped public discourse and influenced
          national conversations. In 2018, he transitioned his vision into agriculture
          by founding Farmer Ebelo Limited, channelling his beliefs into transforming
          communities through agribusiness. His career reflects a deep commitment to
          truth, accountability, and innovation in service of community development.
        </p>
      </section>
      <section className="px-6 lg:px-20 pb-20 max-w-7xl mx-auto mt-7">
        <p className="text-base leading-relaxed text-center md:text-justify">
          Goodluck Ebelo is passionate about governance, social impact, and sustainability, values that shaped his transition from media to agriculture. Through Farmer Ebelo, he champions empowerment, food security, and inclusive growth, positioning agriculture as a driver of national progress. He continues to advocate for systems that strengthen institutions and empower people, ensuring that innovation serves not just businesses, but uplifts people.
        </p>
      </section>
    </div>
  );
};

export default MeetOurFounder;
