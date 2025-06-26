import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';


const MyTips = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    plantType: "",
    category: "",
    difficulty: "",
    availability: "",
  });

  useEffect(() => {
    if (!userEmail) {
      setError("Please log in to view your tips");
      setLoading(false);
      return;
    }

    const fetchTips = async () => {
      try {
        const res = await fetch(
          `https://server-side-f.vercel.app/api/tips?email=${encodeURIComponent(
            userEmail
          )}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch tips");
        }
        const data = await res.json();
        setTips(data);
      } catch (err) {
        setError(err.message || "Failed to fetch tips");
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, [userEmail]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This tip will be permanently deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#3498db",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      background: "#ffffff",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `https://server-side-f.vercel.app/my-tips/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.status === 204) {
        setTips((prevTips) => prevTips.filter((tip) => tip._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your tip has been deleted.",
          icon: "success",
          background: "#ffffff",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to delete the tip.",
          icon: "error",
          background: "#ffffff",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Error deleting the tip.",
        icon: "error",
        background: "#ffffff",
      });
    }
  };

  const openUpdateModal = (tip) => {
    setCurrentTip(tip);
    setFormData({
      title: tip.title || "",
      plantType: tip.plantType || "",
      category: tip.category || "",
      difficulty: tip.difficulty || "",
      availability: tip.availability || "",
    });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!currentTip) return;

    try {
      const res = await fetch(
        `https://server-side-f.vercel.app/api/tips/${currentTip._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setTips((prevTips) =>
          prevTips.map((tip) =>
            tip._id === currentTip._id ? { ...tip, ...formData } : tip
          )
        );
        setIsModalOpen(false);
        setCurrentTip(null);
        Swal.fire({
          title: "Success!",
          text: "Tip updated successfully.",
          icon: "success",
          background: "#ffffff",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to update tip.",
          icon: "error",
          background: "#ffffff",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Error updating tip.",
        icon: "error",
        background: "#ffffff",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!tips.length) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
          <p className="font-bold">No Tips Found</p>
          <p>You haven't shared any gardening tips yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <Helmet>
        <title>My Tips | GardenTips</title>
      </Helmet>

      <div className=" rounded-xl shadow-md overflow-hidden my-6 py-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-green-700 dark:text-green-400 drop-shadow-sm">My Garden Tips</h1>
          <p className="text-lg text-green-700 dark:text-green-400 drop-shadow-sm">Manage your shared gardening wisdom</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-green-800 to-emerald-900 text-white rounded-2xl">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Plant Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Availability
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {tips.map((tip) => (
                <tr
                  key={tip._id}
                  className="hover:bg-gray-50 transition-colors border border-amber-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    {tip.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {tip.plantType || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {tip.category || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {tip.difficulty || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {tip.availability || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="space-x-2">
                      <button
                        onClick={() => openUpdateModal(tip)}
                        className="text-teal-600 hover:text-teal-900 px-3 py-1 rounded-md border border-teal-600 hover:bg-teal-50 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(tip._id)}
                        className="text-red-600 hover:text-red-900 px-3 py-1 rounded-md border border-red-600 hover:bg-red-50 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">
                Update Tip
              </h3>
            </div>
            <form onSubmit={handleUpdateSubmit} className="p-6 space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="title"
                >
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="plantType"
                >
                  Plant Type
                </label>
                <input
                  type="text"
                  id="plantType"
                  name="plantType"
                  value={formData.plantType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="difficulty"
                >
                  Difficulty
                </label>
                <input
                  type="text"
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="availability"
                >
                  Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTips;
