import React from "react";
import { Helmet } from "react-helmet";
import { GiPlantSeed, GiGardeningShears, GiFarmer, GiFlowerPot } from "react-icons/gi";
import { FaLeaf, FaSeedling } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>About Us | GardenTips</title>
        <meta name="description" content="Learn about GardenTips - our mission to help gardeners grow, our vision for the future, and the passionate team behind it all." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-20 w-32 h-32 bg-lime-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-800">
          About <span className="whitespace-nowrap">GardenTips</span> <FaLeaf className="inline ml-2 -mt-2" />
        </h1>
      </div>

      {/* Value Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {/* Mission */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-green-50 hover:border-green-100 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-50 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
              <GiPlantSeed className="text-3xl text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower every gardener with practical, science-backed knowledge that makes growing plants accessible, enjoyable, and successful at any skill level.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-green-50 hover:border-green-100 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden">
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-50 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:-rotate-6 transition-transform duration-300">
              <GiGardeningShears className="text-3xl text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To create the world's most trusted gardening ecosystem where enthusiasts connect, learn, and grow together — transcending seasons and geographical boundaries.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-green-50 hover:border-green-100 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-50 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-3 transition-transform duration-300">
              <GiFarmer className="text-3xl text-lime-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h3>
            <p className="text-gray-600 leading-relaxed">
              A passionate collective of horticulturists, technologists, and educators led by <span className="font-semibold text-emerald-700">Rantu Mondal</span>, united by our love for plants and digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 md:p-14 mb-16 relative overflow-hidden">
        <GiFlowerPot className="absolute -right-10 -bottom-10 text-40 opacity-5 text-emerald-300 w-64 h-64" />
        <FaSeedling className="absolute -left-10 -top-10 text-40 opacity-5 text-lime-300 w-64 h-64" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Our <span className="text-emerald-600">Story</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                GardenTips began as a small blog in 2018 when our founder Rantu noticed how difficult it was to find reliable, localized gardening advice online. What started as weekend hobby quickly blossomed into a thriving community.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we serve over 500,000 gardeners monthly with tips that combine traditional wisdom with modern horticultural science. Our content is carefully curated by experts and tested by our community.
              </p>
            </div>
            <div className=" p-6 rounded-2xl shadow-md border border-green-100">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center">
                <FaSeedling className="mr-2" /> Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-black">Science-backed, practical advice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-black">Personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-black">Global community of gardeners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-black">Constantly updated content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-black">100% ad-free experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;