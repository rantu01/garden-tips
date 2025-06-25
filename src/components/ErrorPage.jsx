import React from "react";
import { useRouteError, Link } from "react-router";
import errorAnimation from '../assets/Animation.gif';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  // Default error message if none is provided
  const errorMessage = error?.statusText || error?.message || "Page not found";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-emerald-800 text-white px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="flex justify-center">
          <img 
            src={errorAnimation} 
            alt="Error illustration" 
            className="h-48 w-auto object-contain"
            aria-hidden="true"
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-gray-900">Oops!</h1>
          <h2 className="text-3xl font-semibold text-red-600">404 Error</h2>
          <p className="text-lg text-gray-600">
            We're sorry, but something went wrong.
          </p>
          <p className="text-gray-500 italic">
            {errorMessage}
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            aria-label="Return to home page"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;