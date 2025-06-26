import React from "react";
import { Helmet } from "react-helmet";
import { GiPlantSeed, GiGardeningShears, GiFarmer } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <Helmet>
        <title>About Us | GardenTips</title>
      </Helmet>

      <div className="text-center mb-12 text-green-700 dark:text-green-400">
        <h1 className="text-4xl font-bold text-green-700 mb-2">
          About GardenTips 🌿
        </h1>
        <p className="text-lg text-green-700">
          Helping gardeners grow — one tip at a time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-green-200 text-center transition-colors">
          <GiPlantSeed className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>
            We aim to build a thriving gardening community by sharing practical,
            beginner-friendly, and expert-level tips for all green thumbs.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-green-200 text-center">
          <GiGardeningShears className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>
            To become the #1 platform for garden enthusiasts to learn, grow, and
            connect — across seasons and borders.
          </p>
        </div>

        {/* Team */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-green-200 text-center">
          <GiFarmer className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
          <p>
            A small team of passionate developers and garden lovers led by{" "}
            <span className="text-green-700 font-semibold">Rantu Mondal</span>,
            committed to spreading green knowledge digitally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
