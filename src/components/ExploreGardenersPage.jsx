import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';


const ExploreGardenersPage = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gardening-server-lovat.vercel.app/gardeners-all")
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
          <p className="text-lg text-gray-600 dark:text-gray-300">Loading gardeners...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8  min-h-screen">
      <Helmet>
        <title>ExploreTips | GardenTips</title>
      </Helmet>
      <h1 className="text-3xl font-extrabold text-center mb-10 text-green-700 dark:text-green-400 drop-shadow-sm">
        Explore Gardeners
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {gardeners.map((gardener) => (
          <article
            key={gardener._id}
            className="bg-white dark:bg-green-900 dark:bg-opacity-80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            aria-label={`Gardener ${gardener.name}`}
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-48 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-bold mb-2 text-green-800 dark:text-green-300">
              {gardener.name}
            </h2>
            <div className="flex flex-wrap gap-2 text-gray-700 dark:text-green-200 text-sm mb-2">
              <p><strong>Age:</strong> {gardener.age}</p>
              <p><strong>Gender:</strong> {gardener.gender}</p>
              <p><strong>Status:</strong> {gardener.status}</p>
            </div>
            <p className="text-gray-700 dark:text-green-200 mb-2">
              <strong>Experience:</strong>{" "}
              {Array.isArray(gardener.experiences)
                ? gardener.experiences.join(", ")
                : gardener.experiences}
            </p>
            <p className="text-gray-700 dark:text-green-200 mb-2">
              <strong>Total Tips Shared:</strong> {gardener.totalSharedTips || 0}
            </p>
            {gardener.bio && (
              <p className="text-sm text-gray-600 dark:text-green-300 mt-auto">
                <strong>Bio:</strong> {gardener.bio}
              </p>
            )}
            {gardener.ratings && (
              <p className="text-sm text-gray-600 dark:text-green-300 mt-1">
                <strong>Rating:</strong> ⭐ {gardener.ratings.average || 0} (
                {gardener.ratings.count || 0} reviews)
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardenersPage;
