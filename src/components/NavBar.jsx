import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function NavBar() {
  const [temp, setTemp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // Track actual hover state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // State for Services dropdown in mobile

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close the menu after navigation
  };

  const display_form = () => {
    if (isSubmitted) {
      alert("You have already submitted the form."); // Alert if form is already submitted
    } else {
      setTemp(true); // Show the form modal
    }
  };

  const handleMouseOver = () => {
    setIsHovering(true);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        setIsHover(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isHovering]);

  return (
    <div className="flex justify-between items-center p-4 bg-sky-800 fixed top-0 w-full z-40">
      <div className="flex items-center">
        <h1 className="font-black text-2xl font-sans text-white">KRISHI SETU</h1>
      </div>
      <div className="hidden md:flex space-x-5">
        <div className="hover:bg-slate-300 rounded-full">
          <Link to="/" className="text-white hover:text-blue-700 m-5" >
            Home
          </Link>
        </div>
        <div className="hover:bg-slate-300 rounded-full ">
          <Link to="/About_Us" className="text-white hover:text-blue-700 m-5" onClick={handleScroll}>
            About Us
          </Link>
        </div>
        <div
          className="relative hover:bg-slate-300 rounded-full text-white hover:text-blue-700"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        > Services
          {/* <Link to="/Services" className="text-white hover:text-blue-700 m-5"> */}
          
          {isHover && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-40">
              <ul className="flex flex-col text-left">
                <li className="hover:bg-blue-100 px-4 py-2">
                  <Link to="/Retail">
                    Retail
                  </Link>
                </li>
                <li className="hover:bg-blue-100 px-4 py-2">
                  <Link to="/Bulk" >
                    Bulk
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hover:bg-slate-300 rounded-full">
          <Link to="/Articles" className="text-white hover:text-blue-700 m-5" >
            Articles
          </Link>
        </div>
        <div className="hover:bg-slate-300 rounded-full">
          <Link to="/Profile" className="text-white hover:text-blue-700 m-5">
            Profile
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={display_form}>
          Contact Us
        </button>
      </div>
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-sky-200 z-30">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link to="/" className="text-white hover:text-blue-700" >
              Home
            </Link>
            <Link to="/About_Us" className="text-white hover:text-blue-700" onClick={handleScroll}>
              About Us
            </Link>
            <Link to="/Services" className="text-white hover:text-blue-700" >
              Services
            </Link>
            <Link to="/Articles" className="text-white hover:text-blue-700" >
              Articles
            </Link>
            <Link to="/Profile" className="text-white hover:text-blue-700">
              Profile
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={display_form}>
              Contact Us
            </button>
          </div>
        </div>
      )}
      {temp && (
        <Form
          setTemp={setTemp}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
}

export default NavBar;
