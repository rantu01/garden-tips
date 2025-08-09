import React from "react";
import { useRouteError, Link } from "react-router";
import errorAnimation from '../assets/Animation.gif';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  // Enhanced error message handling
  const errorMessage = error?.statusText || error?.message || "The page you're looking for doesn't exist.";
  const statusCode = error?.status || 404;
  const is404 = statusCode === 404;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 px-4 text-center">
      <div className="max-w-md w-full space-y-6 p-10 bg-white rounded-2xl shadow-xl shadow-emerald-100/40 transform transition-all duration-500 hover:shadow-emerald-200/60 hover:-translate-y-1">
        {/* Animated illustration container */}
        <div className="flex justify-center relative">
          <img 
            src={errorAnimation} 
            alt="" 
            className="h-48 w-auto object-contain animate-float"
            aria-hidden="true"
          />
          {!is404 && (
            <span className="absolute -top-3 -right-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              {statusCode}
            </span>
          )}
        </div>
        
        {/* Error content */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              {is404 ? "Page Not Found" : "Something Went Wrong"}
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg">
            {is404 
              ? "We can't seem to find what you're looking for."
              : "An unexpected error has occurred."}
          </p>
          
          <div className="py-3 px-4 bg-gray-50/80 rounded-lg border border-gray-100">
            <p className="text-gray-500 font-mono text-sm">
              <span className="text-emerald-600 font-medium">Error:</span> {errorMessage}
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-6">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full text-white bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-300/50"
            aria-label="Return to home page"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Return to Home
            </span>
            <span className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;