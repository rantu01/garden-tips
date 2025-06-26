import React from "react";
import {
  GiWateringCan,
  GiPlantRoots,
  GiPlantSeed,
  GiSpotedFlower,
  GiBugNet,
} from "react-icons/gi";
import { Link } from "react-router";

const GardeningQuickTips = () => {
  const tips = [
    {
      text: "Water plants early in the morning to reduce evaporation.",
      icon: <GiWateringCan className="text-3xl text-blue-600" />,
    },
    {
      text: "Use mulch to retain soil moisture and prevent weeds.",
      icon: <GiPlantRoots className="text-3xl text-amber-700" />,
    },
    {
      text: "Rotate your crops yearly to avoid soil depletion.",
      icon: <GiPlantSeed className="text-3xl text-green-700" />,
    },
    {
      text: "Plant native species for easier maintenance.",
      icon: <GiSpotedFlower className="text-3xl text-emerald-600" />,
    },
    {
      text: "Use natural pest repellents like neem oil.",
      icon: <GiBugNet className="text-3xl text-lime-700" />,
    },
  ];

  return (
    <section className="mt-32 bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-6 md:px-8 rounded-xl shadow-lg border border-green-100 max-w-7xl mx-auto my-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Gardening Quick Tips
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Expert advice to help your garden thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4 border-l-4 border-green-500 hover:border-green-600"
            >
              <div className="mt-1">{tip.icon}</div>
              <div>
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {tip.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/browseTips">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
              Get More Gardening Tips
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GardeningQuickTips;
