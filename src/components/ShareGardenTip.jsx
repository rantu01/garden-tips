import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';


const ShareGardenTip = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    plantType: "",
    difficulty: "Easy",
    description: "",
    image: "", // single URL string
    category: "Composting",
    availability: "Public",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        ...formData,
        image: formData.image.trim(),
        userEmail: user?.email || "",
        userName: user?.displayName || "",
      };

      const response = await fetch(
        "http://localhost:3000/tips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit tip.");
      }

      Swal.fire({
        icon: "success",
        title: "Tip Submitted!",
        text: "Your garden tip was successfully shared.",
        confirmButtonColor: "#22c55e",
      });

      setFormData({
        title: "",
        plantType: "",
        difficulty: "Easy",
        description: "",
        image: "",
        category: "Composting",
        availability: "Public",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md my-24 bg-base-100 dark:shadow-xl border border-white">
      <Helmet>
        <title>ShareTips | GardenTips</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-400">
        Share a Garden Tip
      </h2>

      {error && (
        <p className="text-red-500 mb-3 bg-red-100 dark:bg-red-900 p-2 rounded">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title (e.g., How I Grow Tomatoes Indoors)"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
          aria-label="Tip title"
        />

        <input
          type="text"
          name="plantType"
          placeholder="Plant Type / Topic"
          value={formData.plantType}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
          aria-label="Plant type"
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
          aria-label="Difficulty level"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          rows={4}
          required
          aria-label="Tip description"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="input input-bordered w-full"
          aria-label="Image URL"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
          aria-label="Category"
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Hydroponics</option>
          <option>Indoor Gardening</option>
          <option>Organic Gardening</option>
        </select>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
          aria-label="Availability"
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full cursor-not-allowed"
          placeholder="Your Email"
          aria-label="User email"
          tabIndex={-1}
        />

        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full cursor-not-allowed"
          placeholder="Your Name"
          aria-label="User name"
          tabIndex={-1}
        />

        <button
          type="submit"
          className={`btn btn-primary w-full bg-green-600 hover:bg-green-700 text-white ${
            loading ? "loading" : ""
          }`}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Submitting..." : "Submit Tip"}
        </button>
      </form>
    </div>
  );
};

export default ShareGardenTip;
