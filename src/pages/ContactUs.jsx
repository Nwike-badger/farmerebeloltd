import React from 'react';
import image1 from '../assets/farm2.png';
import image2 from '../assets/map.png';



const ContactUs = () => {
  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      {/* Background Section */}
      <section className="relative min-h-[70vh]">
        {/* Background Image */}
        <img
          src={image1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="max-w-6xl px-6 md:px-12 pt-32 md:pt-44">
          <div className="relative mb-10 w-fit">
            <h3 className="text-[34px] leading-[32px] font-bold text-white mb-5">
              Get In Touch
            </h3>
            <p className="text-[20px] md:text-[25px] leading-[32px] font-medium text-white max-w-3xl">
              We are here to assist you! Please reach out with any questions,
              feedbacks or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
<section className="flex flex-col md:flex-row justify-between max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-10">
  {/* Left Card */}
  <div className="basis-full md:basis-[64%] flex flex-col">
    <img
      src={image2}
      alt="Close-up of freshly harvested palm fruits."
      className="w-full max-h-[700px] rounded-2xl object-cover shadow-lg"
    />
    <div className="text-black mt-8">
      <h2 className="text-2xl font-bold mb-6">For General Enquiries</h2>
      <p className="text-lg mb-4">📞 +234 807 678 8888</p>
      <p className="text-lg mb-4">✉️ farmerebelo@gmail.com</p>
      <p className="text-lg mb-4">Address: Plot 6, Ponuwei Ebelo Drive, Gbelebu, Edo State</p>
    </div>
  </div>

  {/* Right Card (Form) */}
  <div className="basis-full md:basis-[35%]">
    <div className="bg-white rounded-2xl shadow-xl px-8 pb-11 max-w-lg w-full flex flex-col justify-between h-auto">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject of your message"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Your Message
            </label>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <button
      type="submit"
      className="w-1/2 h-[50px] bg-black text-white font-semibold text-lg md:text-[20px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none mt-8 transition-transform hover:scale-105 ml-auto flex items-center justify-center"
       >
          Send Message
      </button>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactUs;
