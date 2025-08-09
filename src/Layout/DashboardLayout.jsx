import React, { useState } from "react";
import { NavLink, Outlet } from "react-router"; // changed to react-router-dom
import {
  FaHome,
  FaList,
  FaUser,
  FaLightbulb,
  FaLeaf,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItemClass =
    "flex items-center gap-2 px-4 py-2 rounded hover:bg-emerald-700 transition-colors";
  const activeClass = "bg-white text-green-900 font-bold";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 
          bg-gradient-to-b from-green-800 to-emerald-900 text-white p-4 z-50 
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between mb-6">
          <NavLink
            to="/"
            className="text-2xl font-bold flex items-center gap-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaLeaf className="text-emerald-300" />
            <h2 className="text-xl font-bold">GardenTips</h2>
          </NavLink>
          {/* Close button on mobile */}
          <button
            className="md:hidden text-white text-xl"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaHome /> Overview
          </NavLink>
          <NavLink
            to="/dashboard/browseTips"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaList /> All Tips
          </NavLink>
          <NavLink
            to="/dashboard/gardenTip"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaLightbulb /> Share a Garden Tip
          </NavLink>
          <NavLink
            to="/dashboard/my-tips"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaUser /> My Tip
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaUser /> Profile
          </NavLink>
        </nav>
      </aside>

      {/* Right Side Content */}
      <div className="flex-1 bg-base-200 h-screen overflow-y-auto">
        {/* Top bar for mobile */}
        <div className="md:hidden flex items-center justify-between p-4 bg-gradient-to-r from-green-800 to-emerald-900 text-white shadow-md sticky top-0 z-40">
          <button onClick={toggleSidebar} className="text-2xl">
            <FaBars />
          </button>
          <h2 className="text-lg font-bold">GardenTips Dashboard</h2>
        </div>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
