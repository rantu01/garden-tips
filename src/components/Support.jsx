import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaUsers, FaHeadset, FaClock, FaComments } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const Support = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Support | GardenTips</title>
        <meta name="description" content="Get help from GardenTips support team. Contact us via email, phone, or join our community forum for gardening assistance." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-10 left-1/4 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-800">
          <MdOutlineContactSupport className="inline mr-3 -mt-2" />
          GardenTips Support
        </h1>
      </div>

      {/* Support Options */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Email Support */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-emerald-50 hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-50 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
              <FaEnvelope className="text-3xl text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Support</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Get detailed answers to your gardening questions from our expert team.
            </p>
            <a 
              href="mailto:rantumondal06@gmail.com" 
              className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium"
            >
              rantumondal06@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Support */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-teal-50 hover:border-teal-100 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden">
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-50 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:-rotate-6 transition-transform duration-300">
              <FaPhoneAlt className="text-3xl text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone Support</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Speak directly with our gardening specialists for immediate assistance.
            </p>
            <div className="bg-teal-50 px-4 py-3 rounded-lg inline-block">
              <span className="text-teal-700 font-semibold text-lg">+880-1316-****37</span>
            </div>
          </div>
        </div>

        {/* Community Forum */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-lime-50 hover:border-lime-100 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-50 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-3 transition-transform duration-300">
              <FaUsers className="text-3xl text-lime-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Forum</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Connect with thousands of gardeners sharing knowledge and experiences.
            </p>
            <button className="inline-block px-6 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors duration-300 font-medium">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 md:p-14 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            <FaQuestionCircle className="inline mr-3 text-emerald-600" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                Our team typically responds to emails within 24 hours. For urgent matters, please call our support line.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">What are your support hours?</h3>
              <p className="text-gray-600">
                Phone support is available Monday-Friday, 9AM-5PM (GMT+6). Email support is monitored daily.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Is there a cost for support?</h3>
              <p className="text-gray-600">
                All basic support is completely free! We may offer premium consultation services for complex issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-800 mb-6">Still Need Help?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100">
            <FaHeadset className="text-4xl text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-black">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with a support agent in real-time during business hours.
            </p>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Start Chat
            </button>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100">
            <FaClock className="text-4xl text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-black">Schedule a Call</h3>
            <p className="text-gray-600 mb-4">
              Book a convenient time for a callback from our experts.
            </p>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;