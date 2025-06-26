import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaLeaf, FaSeedling } from "react-icons/fa";

const GardenerDetails = () => {
  const { id } = useParams();
  const [gardener, setGardener] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGardener = async () => {
      try {
        const response = await fetch(`http://localhost:3000/gardeners/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGardener(data);
      } catch (err) {
        console.error("Error fetching gardener details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGardener();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700 text-lg font-medium">Loading gardener details...</p>
        </div>
      </div>
    );
  }

  if (error || !gardener) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Gardener Not Found</h2>
          <p className="text-gray-600">{error || "The requested gardener does not exist."}</p>
          <button 
            onClick={() => window.history.back()} 
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Gardeners
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-scree py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{`${gardener.name} | Professional Gardener | GardenTips`}</title>
        <meta name="description" content={`Learn more about ${gardener.name}, a professional gardener with ${gardener.experiences?.length || 0} years of experience.`} />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <img
                  src={gardener.image || "/default-gardener.jpg"}
                  alt={gardener.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {gardener.status && (
                  <span className={`absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${gardener.status === 'Professional' ? 'bg-blue-500' : 'bg-green-500'}`}>
                    {gardener.status}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{gardener.name}</h1>
                <div className="flex items-center gap-2 text-green-100">
                  <FaUser className="text-sm" />
                  <span>{gardener.age} years old • {gardener.gender}</span>
                </div>
                <p className="mt-3 text-green-100">{gardener.bio || "Passionate gardener with extensive plant knowledge."}</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8">
            {/* Main Information */}
            <div className="md:col-span-2 space-y-6">
              {gardener.experiences?.length > 0 && (
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800 mb-3">
                    <FaSeedling className="text-green-600" />
                    Gardening Experience
                  </h3>
                  <ul className="space-y-2">
                    {gardener.experiences.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-gray-700">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">
                  {gardener.bio || `${gardener.name} is a dedicated gardener with a passion for cultivating beautiful and sustainable gardens. With ${gardener.experiences?.length || 'several'} years of experience, they bring expertise and care to every plant they tend.`}
                </p>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Member since</p>
                      <p className="font-medium text-gray-500">{new Date(gardener.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLeaf className="text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Tips shared</p>
                      <p className="font-medium text-gray-500">{gardener.totalSharedTips || 0}</p>
                    </div>
                  </div>
                </div>
              </div>

              {gardener.contactInfo && (
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact</h3>
                  <div className="space-y-3">
                    {gardener.contactInfo.email && (
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-green-600" />
                        <a href={`mailto:${gardener.contactInfo.email}`} className="font-medium text-green-700 hover:underline">
                          {gardener.contactInfo.email}
                        </a>
                      </div>
                    )}
                    {gardener.contactInfo.phone && (
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-green-600" />
                        <a href={`tel:${gardener.contactInfo.phone}`} className="font-medium text-green-700 hover:underline">
                          {gardener.contactInfo.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenerDetails;