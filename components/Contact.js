import React, { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message sent successfully! I'll get back to you soon."
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again later."
      });
    }
  };

  return (
    <section id="contact" className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container">
        <div className="col-lg-full mb-8">
          <div className="title-content">
            <p className="title">Feel free to contact me any time</p>
            <h2 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
              Get in touch
            </h2>
          </div>
        </div>
        
        <div className="flex flex-wrap mb-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-4">
            <form onSubmit={handleSubmit} className="py-6 px-[15px] rounded-lg">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 rounded-md border border-[#3a3a3a] text-white focus:outline-none focus:border-[#1ab394] transition-colors"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 rounded-md border border-[#3a3a3a] text-white focus:outline-none focus:border-[#1ab394] transition-colors"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-3 bg-gray-800 rounded-md border border-[#3a3a3a] text-white focus:outline-none focus:border-[#1ab394] transition-colors"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 bg-gray-800 rounded-md border border-[#3a3a3a] text-white focus:outline-none focus:border-[#1ab394] transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`bg-[#1ab394] text-white px-6 py-3 rounded-md hover:bg-[#159178] transition-colors duration-300 w-full font-medium ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Status Message */}
              {status.message && (
                <div className={`mt-4 p-4 rounded-md ${
                  status.success ? 'bg-green-500/20 text-green-500' :
                  status.error ? 'bg-red-500/20 text-red-500' :
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
            <div className="grid gap-4 py-6 px-[15px]">
              <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <FaPhone className="text-[#1ab394] text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Call Us On</h3>
                </div>
                <p className="text-gray-300">+2349063324523</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-[#1ab394] text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Visit Office</h3>
                </div>
                <p className="text-gray-300">Lagos, Nigeria</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-[#1ab394] text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Email Us</h3>
                </div>
                <p className="text-gray-300">uccodetech@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
