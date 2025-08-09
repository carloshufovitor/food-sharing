import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../src/assets/no-data-available.json"; 

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4 transition">
      {/* Animation */}
      <div className="w-80 md:w-96">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      {/* Text */}
      <h1 className="text-5xl md:text-7xl font-bold text-green-600 dark:text-green-400 mb-4">
        Oops!
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-[#73B21A] hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium shadow-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
