import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// import { useAuth } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { user, logout } = useAuth(); //get user info
  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="w-11/12 lg:w-3/4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">
          <Link to="/">PhumYerng</Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex space-x-6 font-medium text-gray-700">
          <Link to="/wedding">Wedding</Link>
          <Link to="/birthday">Birthday</Link>
          <Link to="/">Baby & Kids</Link>
          <Link to="/party">Party</Link>
          <Link to="/">Greeting Cards</Link>
          <Link to="/">Trending</Link>
        </nav>

        {/* Action buttons - Desktop */}
        <div className="hidden lg:flex space-x-4 items-center">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                {/* <FaUserCircle className="text-green-500 text-2xl" /> */}
                <img
                  src="https://scontent.fpnh4-1.fna.fbcdn.net/v/t39.30808-6/523252659_1385059859252937_1023051555944821916_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHng7rtd8W2CEh0fj3e92M48VNDKhKz4AbxU0MqErPgBowhBsDmk1JBAi-10gkBhgmmNGuuoJFkov6cqSuFBlav&_nc_ohc=6T3qGyTBg_YQ7kNvwGP2CL_&_nc_oc=AdkmZ8PesHbDXgC0Y_QolC69ZcYXCXvD9XytU7Z1SO-8wVZoWsH21NcvHP6BmFgFo1A&_nc_zt=23&_nc_ht=scontent.fpnh4-1.fna&_nc_gid=ngDMiEibpuddbxdCT8sndw&oh=00_Afizb7SilCeSQt_THUgxCr95C9Rd6XSUGCprFb5y4UdMpA&oe=6918735B"
                  className="w-[30px] h-[30px] rounded-[50%] object-cover"
                  alt="userprofile"
                />
                <span className="text-gray-700 font-medium">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition-all ring-1 ring-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="text-gray-700 hover:text-green-500 font-medium flex items-center"
            >
              Log in
            </Link>
          )}
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
          <Link to="/wedding" onClick={toggleMenu} className="text-gray-700">
            Wedding
          </Link>
          <Link to="/birthday" onClick={toggleMenu} className="text-gray-700">
            Birthday
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Baby & Kids
          </Link>
          <Link to="/party" onClick={toggleMenu} className="text-gray-700">
            Party
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Greeting Cards
          </Link>
          <Link to="/" onClick={toggleMenu} className="text-gray-700">
            Trending
          </Link>

          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-green-500 text-2xl" />
                <span className="text-gray-700 font-medium">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-700 text-left hover:text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              onClick={toggleMenu}
              className="text-gray-700 text-left hover:text-green-500"
            >
              Log in
            </Link>
          )}

          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-left">
            Go Premium
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
