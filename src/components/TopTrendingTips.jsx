import React, { useEffect, useState } from "react";

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/tips-show?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching top trending tips:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[30vh] bg-base-100 text-base-content">
        <div className="w-10 h-10 border-4 border-primary border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:px-10 lg:px-24 bg-base-100 text-base-content max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-400 drop-shadow-sm">🌟 Top Trending Tips</h2>

      {/* Card view for small devices */}
      <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-base-200 shadow-md rounded-lg p-4 border border-base-300">
            <img
              src={tip.image || "https://via.placeholder.com/150"}
              alt={tip.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{tip.title}</h3>
            <p className="text-sm"><strong>Plant Type:</strong> {tip.plantType}</p>
            <p className="text-sm"><strong>Difficulty:</strong> {tip.difficulty}</p>
            <p className="text-sm"><strong>Category:</strong> {tip.category}</p>
            <p className="text-sm"><strong>Likes:</strong> ❤️ {tip.totalLiked || 0}</p>
            
          </div>
        ))}
      </div>

      {/* Table view for medium and larger devices */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border border-base-300 text-sm ">
          <thead className="bg-base-200 text-base-content">
            <tr className="bg-gradient-to-r from-green-800 to-emerald-900 text-white ">
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Plant Type</th>
              <th className="px-4 py-2 border">Difficulty</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Likes</th>
              <th className="px-4 py-2 border">User</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={index} className="hover:bg-base-300/30 transition">
                <td className="px-4 py-2 border">
                  <img
                    src={tip.image || "https://via.placeholder.com/100"}
                    alt={tip.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{tip.title}</td>
                <td className="px-4 py-2 border">{tip.plantType}</td>
                <td className="px-4 py-2 border">{tip.difficulty}</td>
                <td className="px-4 py-2 border">{tip.category}</td>
                <td className="px-4 py-2 border">❤️ {tip.totalLiked || 0}</td>
                <td className="px-4 py-2 border">
                  {tip.userName} <br />
                  <span className="text-xs text-neutral-content">{tip.userEmail}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopTrendingTips;
