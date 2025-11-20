import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUser(storedName);
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUser("");
    window.location.href = "/login";
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="w-full flex justify-between items-center shadow-md px-4 py-3 bg-[#E8F8FF] fixed top-0 z-50">

        {/* Website Name + Menu Icon */}
        <div className="flex items-center gap-4 font-bold text-xl text-blue-600">
        
          {/* Menu Icon */}
          <span className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)}>
            &#9776;
          </span>
          <span>Ghumate Raho.com</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/tour">Tours</Link>
          <Link to="/destination">Destinations</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex gap-4 items-center text-xl">
          <i className="ri-search-line cursor-pointer"></i>

          {/* USER DROPDOWN */}
          {user ? (
            <div
              className="relative inline-block"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Circle Icon */}
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full 
                              flex items-center justify-center font-bold cursor-pointer">
                {user.charAt(0).toUpperCase()}
              </div>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-1 w-40 bg-white shadow-lg rounded-lg 
                  transition-all duration-200 
                  ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <span className="px-4 py-2 border-b block font-semibold">
                  {user}
                </span>
                <button
                  className="px-4 py-2 w-full text-left hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <i className="ri-user-line cursor-pointer"></i>
            </Link>
          )}
        </div>
      </div>

      {/* SIDE NAVBAR */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-500 z-50 
        ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
      >
        {isOpen && (
          <div
            className="text-4xl ml-4 mt-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </div>
        )}

        <div className="flex flex-col text-xl gap-6 mt-10 ml-6">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/tour" onClick={() => setIsOpen(false)}>Tours</Link>
          <Link to="/destination" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

          {user && (
            <button
              className="text-left text-red-400 mt-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
