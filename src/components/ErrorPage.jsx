import React from "react";
import { useRouteError, Link } from "react-router";
import errorAnimation from '../assets/Animation.gif';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  // Default error message if none is provided
  const errorMessage = error?.statusText || error?.message || "The page you're looking for doesn't exist.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-emerald-100 px-4 text-center">
      <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-xl shadow-2xl shadow-emerald-100/50 transform transition-all duration-500 hover:shadow-emerald-200/70">
        <div className="flex justify-center">
          <img 
            src={errorAnimation} 
            alt="Error illustration" 
            className="h-56 w-auto object-contain animate-bounce-slow"
            aria-hidden="true"
          />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
          <h2 className="text-2xl font-semibold text-emerald-600">
            {error?.status ? `${error.status} Error` : "Page Not Found"}
          </h2>
          <p className="text-gray-600">
            We can't seem to find what you're looking for.
          </p>
          <p className="text-gray-500 italic text-sm py-2 px-4 bg-gray-50 rounded-lg">
            {errorMessage}
          </p>
        </div>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Return to home page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;