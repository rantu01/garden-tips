import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router'; // Use react-router-dom
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., could be replaced with real API call later)
    const timer = setTimeout(() => {
      setLoading(false);
    }, ); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

