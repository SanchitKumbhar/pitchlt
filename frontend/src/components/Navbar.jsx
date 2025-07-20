import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-2xl font-bold text-blue-600">PitchIt</div>

          <div className="flex items-center space-x-6">
            
            {/* Navigation Links  */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Explore Pitches</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">Events</a>
            </div>

            {/* Login Button */}
            <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100">
              Login
            </button>

            {/* Register Button */}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Register
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
