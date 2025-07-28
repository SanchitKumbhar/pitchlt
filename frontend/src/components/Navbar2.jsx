import React, { useState } from "react";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between relative">
      {/* logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-blue-600">PitchIt</span>
      </div>

      {/* Desktop Nav Links */}

      <div className="hidden md:flex space-x-6">
        <Link to="/my-pitches" className="text-gray-700 hover:text-blue-600">
          My Pitches
        </Link>
        <Link to="/joined-teams" className="text-gray-700 hover:text-blue-600">
          Joined Teams
        </Link>
        <Link to="/explore" className="text-gray-700 hover:text-blue-600">
          Explore
        </Link>
        <Link to="/create-pitch" className="text-gray-700 hover:text-blue-600">
          Create Pitch
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
      </div>

      {/* Desktop Search field and Profile */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search teams, pitches or members..."
            className="pl-10 pr-3 py-1 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <FaUserCircle className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />
      </div>

      {/* Mobile view serach and hamburger*/}
      <div className="md:hidden flex items-center space-x-4">
        <div className="relative w-40 sm:w-52">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-3 py-1 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl text-gray-700" />
          ) : (
            <FaBars className="text-2xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              to="/my-pitches"
              className="text-gray-700 hover:text-blue-600"
            >
              My Pitches
            </Link>
            <Link
              to="/joined-teams"
              className="text-gray-700 hover:text-blue-600"
            >
              Joined Teams
            </Link>
            <Link to="/explore" className="text-gray-700 hover:text-blue-600">
              Explore
            </Link>
            <Link
              to="/create-pitch"
              className="text-gray-700 hover:text-blue-600"
            >
              Create Pitch
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
