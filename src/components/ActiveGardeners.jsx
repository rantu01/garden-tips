import React, { useEffect, useState } from "react";

const ActiveGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/gardeners")
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
          <div className="w-12 h-12 border-4 border-primary border-dashed rounded-full animate-spin"></div>
          <p className="text-lg text-neutral dark:text-gray-300">Loading gardeners...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 md:px-8 lg:px-12  text-base-content dark:text-green-200 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-green-700 dark:text-green-400 drop-shadow-sm">
        Active Gardeners
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {gardeners.map((gardener) => (
          <article
            key={gardener._id}
            className="bg-base-200 dark:bg-green-900 dark:bg-opacity-80 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col"
            aria-label={`Active gardener ${gardener.name}`}
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
            <p className="text-sm text-neutral-content dark:text-green-300 mb-4 flex-grow">
              {gardener.bio || "No bio available."}
            </p>
           
            <p>
              <strong>Rating:</strong> ⭐ {gardener.ratings?.average || 0} (
              {gardener.ratings?.count || 0})
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ActiveGardeners;
