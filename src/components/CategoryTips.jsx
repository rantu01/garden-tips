// CategoryTips.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryTips = () => {
  const { name } = useParams();
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch("https://server-side-f.vercel.app/tips/public");
        const data = await res.json();
        const filtered = data.filter((tip) => tip.category === name);
        setTips(filtered);
      } catch (err) {
        console.error("Failed to fetch tips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, [name]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Tips in "{name}" Category
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : tips.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          No tips found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip._id} className="bg-white shadow rounded-xl overflow-hidden">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{tip.description.slice(0, 80)}...</p>
                <p className="text-sm text-green-700 font-medium">Plant: {tip.plantType}</p>
                <p className="text-xs text-gray-500">Posted by: {tip.userName}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryTips;
