import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastSent, setLastSent] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Rate limit: only allow one send per minute
    if (lastSent && Date.now() - lastSent < 60 * 1000) {
      setStatus("⚠️ Please wait at least 1 minute before sending again.");
      return;
    }

    setLoading(true);
    setStatus(""); // clear old status

    emailjs
      .sendForm(
        "service_xhoq0yc", // ✅ Your Service ID
        "template_yxz46u7", // ✅ Your Template ID
        form.current,
        "-O2ONN_cboWpiCPaa" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLastSent(Date.now());
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send: " + error.text);
        }
      )
      .finally(() => {
        setLoading(false);

        // optional: clear message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      {/* Header Section */}
      <section className="relative min-h-[70vh]">
        <img
          src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756383839/farm2_opyhmb.png"
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
      <section className="flex flex-col md:flex-row justify-between max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-10">
        {/* Left Card */}
        <div className="basis-full md:basis-[64%] flex flex-col">
          <img
            src="https://res.cloudinary.com/dk95qi8q9/image/upload/v1756383829/map_bzuspb.png"
            alt="Close-up of freshly harvested palm fruits."
            className="w-full max-h-[700px] rounded-2xl object-cover shadow-lg"
          />
          <div className="text-black mt-8">
            <h2 className="text-2xl font-bold mb-6">For General Enquiries</h2>
            <p className="text-lg mb-4 ">Call: <span className="hover:text-green-500">+234 807 678 8888</span></p>
            <p className="text-lg mb-4 ">Email: <span className="hover:text-green-500">farmerebelo@gmail.com</span></p>
            <p className="text-lg mb-4 ">
              Address: <span className="hover:text-green-700">Plot 6, Ponuwei Ebelo Drive, Gbelebu, Edo State</span>
            </p>
          </div>
        </div>

        {/* Right Card (Form) */}
        <div className="basis-full md:basis-[35%]">
          <div className="bg-white rounded-2xl shadow-xl px-8 pb-11 max-w-lg w-full flex flex-col justify-between h-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Contact Us
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject of your message"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading} // ✅ disable when sending
                className={`w-1/2 h-[50px] font-semibold text-lg md:text-[20px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none mt-8 ml-auto flex items-center justify-center transition-transform ${
                  loading
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-black text-white hover:scale-105"
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center text-sm font-medium text-green-600">
                {status}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
