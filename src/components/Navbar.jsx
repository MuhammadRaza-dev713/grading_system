import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; 
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide">
          SmartGrade
        </Link>

        {/* Desktop Navigation */}
        <div className=" md:flex space-x-10 text-lg">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/features" className="hover:text-gray-400 transition">
            Features
          </Link>
          <Link to="/howitworks" className="hover:text-gray-400 transition">
            How It Works
          </Link>
          <Link to="/testimonials" className="hover:text-gray-400 transition">
            Testimonials
          </Link>
        </div>

        {/* Authentication Buttons (Desktop) */}
        <div className=" md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link
                to={user?.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}
                className="bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-green-600 px-5 py-2 rounded-md hover:bg-green-700 transition">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        {/* Mobile Menu Links */}
        <nav className="flex flex-col items-center space-y-6 text-xl">
          <Link to="/" className="text-white hover:text-gray-400 transition" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/features" className="text-white hover:text-gray-400 transition" onClick={toggleMenu}>
            Features
          </Link>
          <Link to="/howitworks" className="text-white hover:text-gray-400 transition" onClick={toggleMenu}>
            How It Works
          </Link>
          <Link to="/testimonials" className="text-white hover:text-gray-400 transition" onClick={toggleMenu}>
            Testimonials
          </Link>

          {/* Authentication Buttons (Mobile) */}
          {isAuthenticated ? (
            <>
              <Link
                to={user?.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}
                className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition" onClick={toggleMenu}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
