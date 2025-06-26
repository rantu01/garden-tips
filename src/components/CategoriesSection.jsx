import React from "react";
import { useNavigate } from "react-router";

const categories = [
  {
    name: "Hydroponics",
    image: "https://cdn-icons-png.flaticon.com/512/2903/2903846.png",
  },
  {
    name: "Indoor Gardening",
    image: "https://cdn-icons-png.flaticon.com/512/4380/4380475.png",
  },
  {
    name: "Organic Gardening",
    image: "https://cdn-icons-png.flaticon.com/512/3381/3381246.png",
  },
  {
    name: "Vertical Gardening",
    image: "https://cdn-icons-png.flaticon.com/512/2285/2285446.png",
  },
  {
    name: "Composting",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    name: "Plant Care",
    image: "https://cdn-icons-png.flaticon.com/512/2903/2903936.png",
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-green-700 dark:text-green-400 drop-shadow-sm">Explore by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => navigate(`/category/${category.name}`)}
              className="bg-white shadow-md hover:shadow-lg cursor-pointer rounded-xl flex flex-col items-center p-4 transition duration-200 hover:bg-green-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="font-medium text-center text-green-800">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
