import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router";

const ExploreGardenersPage = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/gardeners-all")
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gardeners:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600">Loading gardeners...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 min-h-screen">
      <Helmet>
        <title>ExploreTips | GardenTips</title>
      </Helmet>
      <h1 className="text-3xl font-extrabold text-center mb-10 text-green-700">
        Explore Gardeners
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {gardeners.map((gardener) => (
          <article
            key={gardener._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            aria-label={`Gardener ${gardener.name}`}
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-48 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-bold mb-2 text-green-800">
              {gardener.name}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Total Tips Shared:</strong> {gardener.totalSharedTips || 0}
            </p>

            <button
              onClick={() => navigate(`/gardener/${gardener._id}`)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              See Details
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardenersPage;