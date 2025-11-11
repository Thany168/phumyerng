import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="w-11/12 lg:w-3/4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">
          <Link to="/">PhumYerng</Link>
        </div>

        {/* Navigation - Desktop (show only on lg and above) */}
        <nav className="hidden  lg:flex space-x-6 font-medium text-gray-700">
          <Link to="/wedding">Wedding</Link>
          <Link to="/birthday">Birthday</Link>
          <Link to="/">Baby & Kids</Link>
          <Link to="/party">Party</Link>
          <Link to="/">Greeting Cards</Link>
          <Link to="/">Trending</Link>
        </nav>

        {/* Action buttons - Desktop (show only on lg and above) */}
        <div className="hidden lg:flex space-x-4">
          <button className="text-gray-700 hover:text-green-500">Log in</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            Go Premium
          </button>
        </div>

        {/* Mobile & Tablet Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white w-11/12 mx-auto mt-4 shadow-lg rounded-lg p-4 flex flex-col space-y-4">
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Wedding
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Birthday
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Baby & Kids
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Party
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Greeting Cards
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Trending
          </Link>
          <button className="text-gray-700 text-left" onClick={toggleMenu}>
            Log in
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-left">
            Go Premium
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
