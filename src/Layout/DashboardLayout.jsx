// DashboardLayout.jsx
import React from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaPlus,
  FaList,
  FaUser,
  FaSignOutAlt,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa";

const DashboardLayout = () => {
  const menuItemClass =
    "flex items-center gap-2 px-4 py-2 rounded hover:bg-emerald-700 transition-colors";
  const activeClass = "bg-white text-green-900 font-bold";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-green-800 to-emerald-900 text-white p-4 sticky top-0 h-screen">
        <NavLink
          to="/"
          className="text-2xl font-bold flex justify-center items-center mt-2 md:mr-2"
        >
          <FaLeaf className="text-2xl text-emerald-300 mr-2" />
          <h2 className="text-xl font-bold">GardenTips</h2>
        </NavLink>
        
        <h2 className="text-2xl font-bold mb-6 mt-6">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
          >
            <FaHome /> Overview
          </NavLink>
          <NavLink
            to="/dashboard/browseTips"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
          >
            <FaList /> All Tips
          </NavLink>
          <NavLink
            to="/dashboard/gardenTip"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
          >
            <FaLightbulb /> Share a Garden Tip
          </NavLink>
          <NavLink
            to="/dashboard/my-tips"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
          >
            <FaUser /> My Tip
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-base-200 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
