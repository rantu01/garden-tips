import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalItems: 0,
    myItems: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [tipsRes, usersRes] = await Promise.all([
          fetch("https://server-side-f.vercel.app/tips/public"),
          fetch("https://server-side-f.vercel.app/gardeners-all"),
        ]);

        if (!tipsRes.ok || !usersRes.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const tipsData = await tipsRes.json();
        const usersData = await usersRes.json();

        const myTips = tipsData.filter((tip) => tip.userEmail === user?.email);

        setStats({
          totalItems: tipsData.length,
          myItems: myTips.length,
          totalUsers: usersData.length,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email]);

  // Chart data
  const chartData = [
    { name: "Total Items", value: stats.totalItems },
    { name: "My Items", value: stats.myItems },
    { name: "Total Users", value: stats.totalUsers },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold ">Dashboard Overview</h1>
          <p className="">Welcome back, {user?.displayName || "User"}!</p>
        </div>
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
          />
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-sm text-red-700">
            Error loading dashboard data: {error}
          </p>
        </div>
      ) : (
        <>
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500">Total Items</p>
              <p className="text-2xl font-semibold text-gray-800">
                {stats.totalItems}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500">My Items</p>
              <p className="text-2xl font-semibold text-gray-800">
                {stats.myItems}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-semibold text-gray-800">
                {stats.totalUsers}
              </p>
            </div>
          </div>

          {/* Recharts Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <h2 className="text-xl font-semibold mb-4">Statistics Chart</h2>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10B981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              User Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Full Name</p>
                <p className="text-base font-medium text-gray-800">
                  {user?.displayName || "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email Address</p>
                <p className="text-base font-medium text-gray-800">
                  {user?.email || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardOverview;
