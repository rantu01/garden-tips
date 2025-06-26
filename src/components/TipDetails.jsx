import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";

const TipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLiking, setIsLiking] = useState(false);
  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await fetch(`http://localhost:3000/tips/${id}`);
        if (!response.ok) throw new Error("Failed to fetch tip details.");
        const data = await response.json();
        setTip(data);
      } catch (err) {
        console.error(err);
        setError("Could not load tip details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, [id]);

  const handleLike = async () => {
    if (!tip) return;
    setIsLiking(true);
    try {
      const response = await fetch(`http://localhost:3000/tips/like/${tip._id}`, {
        method: "PATCH",
      });
      if (!response.ok) throw new Error("Failed to like tip");
      setTip({ ...tip, totalLiked: (tip.totalLiked || 0) + 1 });
    } catch (err) {
      console.error("Like error:", err);
    } finally {
      setIsLiking(false);
    }
  };

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-[6px] border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-green-700 dark:text-green-300 font-semibold">Loading tip details...</p>
        </div>
      </div>
    );

  if (error)
    return <p className="text-center text-red-500 p-8 text-lg">{error}</p>;

  if (!tip)
    return <p className="text-center p-8 text-lg">Tip not found.</p>;

  const getUserInitial = () => tip.user?.name?.charAt(0).toUpperCase() || 'G';
  const getFirstName = () => tip.user?.name?.split(' ')[0] || 'Gardener';

  return (
    <div className="font-sans  max-w-7xl mx-auto px-4 py-10 ">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 italic drop-shadow-sm">
          {tip.title}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 ">
        {/* Tip Main Content */}
        <main className="md:w-2/3">
          <article className=" shadow-lg rounded-xl p-8 border border-warning">
            

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tip.category && (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 rounded-full text-sm font-medium">
                  {tip.category}
                </span>
              )}
              {tip.difficulty && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">
                  {tip.difficulty}
                </span>
              )}
              {tip.availability && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium">
                  {tip.availability}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed mb-8">{tip.description}</p>

            {/* Images */}
            {tip.image && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {tip.image.split(",").map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={img.trim()}
                      alt={`Tip Image ${i + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap justify-between items-center border-t pt-6 mt-6">
              <button
                onClick={handleLike}
                disabled={isLiking}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-pink-700 dark:text-pink-400 transition-colors ${
                  isLiking
                    ? "bg-pink-200  cursor-not-allowed"
                    : "bg-pink-100 hover:bg-pink-200 dark:bg-pink-950 dark:hover:bg-pink-900"
                }`}
              >
                ❤️ Like ({tip.totalLiked || 0})
              </button>

              <button
                onClick={() => navigate(-1)}
                className="mt-4 md:mt-0 px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                ← Go Back
              </button>
            </div>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="md:w-1/3">
          <div className=" p-6 rounded-xl shadow-md sticky top-6 border border-warning">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">About the Gardener</h3>

            {/* <div className="flex items-center mb-6">
              <div className="bg-green-200 dark:bg-green-700 text-green-900 dark:text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                {getUserInitial()}
              </div>
              <div>
                <h4 className="font-bold text-lg">{tip.userName || 'Anonymous Gardener'}</h4>
                {tip.user?.email && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{tip.user.email}</p>
                )}
              </div>
            </div> */}

            <div>
              <h5 className="font-bold mb-2">Gardening Focus</h5>
              <div className="flex flex-wrap gap-2">
                {tip.category && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">
                    {tip.category}
                  </span>
                )}
                {tip.difficulty && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-medium">
                    {tip.difficulty}
                  </span>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TipDetails;
