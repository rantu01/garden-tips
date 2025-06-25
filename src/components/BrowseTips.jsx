import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaEye, FaLeaf, FaSeedling, FaTint, FaBug } from "react-icons/fa";
import { GiPlantWatering, GiFarmer, GiPlantRoots } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from 'react-helmet';


const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch(
          "https://gardening-server-lovat.vercel.app/tips/public"
        );
        if (!response.ok) throw new Error("Failed to fetch tips");
        const data = await response.json();
        setTips(data);
        setFilteredTips(data);
      } catch (err) {
        console.error("Error fetching tips:", err);
        setError("Failed to load garden tips. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTips();
  }, []);

  useEffect(() => {
    let results = tips;

    if (difficultyFilter !== "All") {
      results = results.filter(
        (tip) =>
          tip.difficulty?.toLowerCase() === difficultyFilter.toLowerCase()
      );
    }

    if (searchTerm) {
      results = results.filter(
        (tip) =>
          tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tip.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTips(results);
  }, [difficultyFilter, searchTerm, tips]);

  const handleView = (id) => {
    if (!user) {
      navigate("/login", { state: { from: `/tip/${id}` } });
    } else {
      navigate(`/tip/${id}`);
    }
  };

  const getDifficultyBadge = (difficulty) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-semibold";

    switch (difficulty?.toLowerCase()) {
      case "easy":
        return (
          <span className={`${baseClasses} bg-green-100 text-green-800`}>
            Easy
          </span>
        );
      case "medium":
        return (
          <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
            Medium
          </span>
        );
      case "hard":
        return (
          <span className={`${baseClasses} bg-red-100 text-red-800`}>Hard</span>
        );
      default:
        return (
          <span className={`${baseClasses} bg-gray-100 text-gray-800`}>
            Unknown
          </span>
        );
    }
  };

  const getCategoryIcon = (category) => {
    const iconClass = "text-lg mr-2";

    switch (category?.toLowerCase()) {
      case "watering":
        return <FaTint className={`${iconClass} text-blue-500`} />;
      case "planting":
        return <FaSeedling className={`${iconClass} text-green-500`} />;
      case "pests":
        return <FaBug className={`${iconClass} text-amber-500`} />;
      case "soil":
        return <GiPlantRoots className={`${iconClass} text-brown-500`} />;
      default:
        return <FaLeaf className={`${iconClass} text-emerald-500`} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>BrowseTips | GardenTips</title>
      </Helmet>
      <div className="text-center mb-8 text-green-700 dark:text-green-400 drop-shadow-sm">
        <h1 className="text-3xl font-bold  mb-2">Gardening Tips</h1>
        <p className="text-gray-600 dark:text-green-400">
          Discover expert advice from our gardening community
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="border border-white rounded-lg shadow-sm p-4 mb-6 bg-gradient-to-r from-green-800 to-emerald-900 text-white rounded-2xl">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tips by title or category..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}

          <div className="flex flex-wrap gap-2">
            {["All", "Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                onClick={() => setDifficultyFilter(level)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  difficultyFilter === level
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      ) : filteredTips.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
            <FaLeaf className="w-full h-full" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No tips found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm
              ? `No tips match your search for "${searchTerm}"`
              : `No tips found for "${difficultyFilter}" difficulty`}
          </p>
        </div>
      ) : (
        <div className=" shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="border border-white shadow-sm bg-gradient-to-r from-green-800 to-emerald-900 text-white rounded-2xl">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Difficulty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                  >
                    Preview
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium  uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="border border-white divide-y divide-gray-200">
                {filteredTips.map((tip) => (
                  <tr
                    key={tip._id}
                    className=" transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium ">
                        {tip.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getCategoryIcon(tip.category)}
                        <span className="text-sm ">
                          {tip.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getDifficultyBadge(tip.difficulty)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img
                          className="h-16 w-16 rounded-md object-cover border"
                          src={
                            typeof tip.image === "string" &&
                            tip.image.includes(",")
                              ? tip.image.split(",")[0].trim()
                              : typeof tip.image === "string"
                              ? tip.image
                              : ""
                          }
                          alt={tip.title}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleView(tip._id)}
                        className="text-green-600 hover:text-green-900 flex items-center justify-end w-full"
                      >
                        <FaEye className="mr-1" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
