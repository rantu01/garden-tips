import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router"; // ✅ Fixed import
import { AuthContext } from "../context/AuthContext";
import LOGO from "../assets/LOGO.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setDarkMode(initialTheme === "dark");
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const linkClass = "btn btn-ghost normal-case font-medium";
  const activeClass = "bg-white font-bold text-black";

  return (
    <nav className="sticky top-0 shadow-md bg-base-100 z-50 bg-gradient-to-r from-green-800 to-emerald-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold flex justify-center items-center mt-2 md:mr-2"
        >
          <FaLeaf className="text-2xl text-emerald-300 mr-2" />
          <h2 className="text-xl font-bold">GardenTips</h2>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto z-40 md:items-center gap-2 md:gap-2 p-4 md:p-0 bg-gradient-to-r from-green-800 to-emerald-900 text-white rounded-2xl`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/gardeners-all"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}
          >
            Explore Gardeners
          </NavLink>
          <NavLink
            to="/browseTips"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}
          >
            Browse Tips
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}
          >
            About Us 
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}
          >
            Support
          </NavLink>
          {
            user? <NavLink
            to="/dashboard"
            className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}
          >
            Dashboard
          </NavLink> : ``
          }

          {/* 🌗 Theme */}
          <DarkModeSwitch
            checked={darkMode}
            onChange={toggleTheme}
            size={22}
            sunColor="#FFA500"
            moonColor="#4B5563"
          />

          {/* 🔐 Auth */}
          {user ? (
            <div className="relative flex items-center group">
              <div
                className="avatar cursor-pointer tooltip tooltip-top"
                data-tip={user?.displayName || "User"}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt={user?.displayName || "User"}
                    className="w-10 rounded-full"
                    onError={(e) => {
                      e.target.src =
                        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
                    }}
                  />
                </div>
              </div>

              {showDropdown && (
                <div className="absolute right-0 top-14 mt-1 bg-base-200 p-3 rounded-box shadow-lg z-50 w-48">
                  <p className="text-center text-accent font-semibold mb-2">
                    {user?.displayName || "User"}
                    <p className="text-sm">{user?.email || "User"}</p>
                  </p>
                  <button
                    onClick={signOutUser}
                    className="btn btn-error btn-sm w-full text-black"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-primary btn-sm">
              Login / Sign Up
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
