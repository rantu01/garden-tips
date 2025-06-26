import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
  FaHeart,
  FaArrowLeft,
  FaUser,
  FaLeaf,
  FaSeedling,
  FaRegClock,
  FaShareAlt,
  FaChartLine,
  FaGlobe,
  FaImages,
} from "react-icons/fa";

const TipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLiking, setIsLiking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-[6px] border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-green-700 dark:text-green-300 font-semibold">
            Loading tip details...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
            Error Loading Tip
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );

  if (!tip)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Tip Not Found
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The gardening tip you're looking for doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Browse Other Tips
          </button>
        </div>
      </div>
    );

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-green-100 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft /> Back to Tips
          </button>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <FaLeaf size={12} /> {tip.plantType}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <FaChartLine size={14} /> {tip.difficulty}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <FaGlobe size={14} /> {tip.availability}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {tip.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                  {tip.userName?.charAt(0) || "G"}
                </div>
                <div>
                  <p className="font-medium">{tip.userName || "Gardener"}</p>
                  {tip.userEmail && (
                    <p className="text-green-200 text-sm">{tip.userEmail}</p>
                  )}
                </div>
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="flex items-center gap-1 text-green-200">
                <FaRegClock />
                <span className="text-sm">
                  {tip.createdAt ? formatDate(tip.createdAt) : "Unknown date"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article */}
          <article className="lg:w-2/3 rounded-xl shadow-md overflow-hidden border-1 border-white">
            {tip.image && (
              <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={tip.image.split(",")[0].trim()}
                  alt={tip.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="p-6 sm:p-8 ">
              <p className="text-lg leading-relaxed mb-6">{tip.description}</p>

              {tip.image?.split(",").length > 1 && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FaImages /> More Photos
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tip.image
                      .split(",")
                      .slice(1)
                      .map((img, i) => (
                        <div
                          key={i}
                          className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={img.trim()}
                            alt={`More ${i}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap justify-between items-center gap-4">
                <button
                  onClick={handleLike}
                  disabled={isLiking}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-colors ${
                    isLiking
                      ? "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 cursor-not-allowed"
                      : "bg-pink-50 dark:bg-pink-950 hover:bg-pink-100 dark:hover:bg-pink-900 text-pink-600 dark:text-pink-400"
                  }`}
                >
                  <FaHeart className={isLiking ? "animate-pulse" : ""} />
                  <span>Like ({tip.totalLiked || 0})</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-5 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 transition-colors"
                >
                  <FaShareAlt />
                  <span>{isCopied ? "Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            <div className=" rounded-xl shadow-md p-6 border-1 border-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 ">
                <FaUser className="text-green-600" />
                About the Gardener
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-2xl font-bold">
                  {tip.userName?.charAt(0) || "G"}
                </div>
                <div>
                  <h4 className="font-bold text-lg ">{tip.userName}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{tip.userEmail}</p>
                </div>
              </div>
            </div>

            <div className=" rounded-xl shadow-md p-6 border-1 border-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 ">
                <FaSeedling className="text-green-600" />
                Plant Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm ">Plant Type</p>
                  <p className="font-medium ">{tip.plantType}</p>
                </div>
                <div>
                  <p className="text-sm ">Difficulty</p>
                  <p className="font-medium ">{tip.difficulty}</p>
                </div>
                <div>
                  <p className="text-sm ">Category</p>
                  <p className="font-medium ">{tip.category}</p>
                </div>
              </div>
            </div>

            <div className=" rounded-xl shadow-md p-6 border-1 border-white">
              <h3 className="text-xl font-semibold mb-4 ">More Tips</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Discover similar gardening tips</p>
              <Link
                to="/browseTips"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Browse All Tips
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
