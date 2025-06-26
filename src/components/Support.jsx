import React from "react";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaUsers } from "react-icons/fa";

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-gray-800 mt-24">
      <Helmet>
        <title>Support | GardenTips</title>
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Support Center</h1>
        <p className="text-lg text-green-700">We’re here to help you grow with confidence.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Email */}
        <div className="bg-white border border-green-100 shadow-sm rounded-xl p-6 text-center">
          <FaEnvelope className="text-3xl text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p>
            For help or questions, email us at <br />
            <a href="mailto:support@gardentips.com" className="text-green-600 font-medium hover:underline">
              rantumondal06@gmail.com
            </a>
          </p>
        </div>

        {/* Phone Support */}
        <div className="bg-white border border-green-100 shadow-sm rounded-xl p-6 text-center">
          <FaPhoneAlt className="text-3xl text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p>
            Need urgent help? Call us at <br />
            <span className="text-green-700 font-medium">+880-1316-****37</span>
          </p>
        </div>

        {/* Community Forum */}
        <div className="bg-white border border-green-100 shadow-sm rounded-xl p-6 text-center">
          <FaUsers className="text-3xl text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
          <p>
            Connect with other gardeners on our Community Forum to ask questions and share tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
