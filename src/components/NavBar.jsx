import React, { useState, useEffect } from "react";
import Form from "./Form";

function NavBar() {
  const [temp, setTemp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const display_form = () => {
    if (isSubmitted) {
      alert("You have already submitted the form.");
    } else {
      setTemp(true);
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
    <div className="flex justify-between items-center p-1 bg-blue-600 fixed top-0 w-full z-40">
      <div className="flex items-center">
        <h1 className="font-black text-2xl font-sans text-white">KRISHI SETU</h1>
      </div>
      <div className="hidden custom:flex space-x-5">
        <div className="hover:bg-slate-300 rounded-full">
          <a href="#Home" className="text-white hover:text-blue-700 m-5" onClick={handleScroll}>
            Home
          </a>
        </div>
        <div className="hover:bg-slate-300 rounded-full">
          <a href="#About_Us" className="text-white hover:text-blue-700 m-5" onClick={handleScroll}>
            About Us
          </a>
        </div>
        <div
          className="relative hover:bg-slate-300 rounded-full"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#Services" className="text-white hover:text-blue-700 m-5">
            Services
          </a>
          {isHover && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-60">
              <ul className="flex flex-col text-left">
                <li className="hover:bg-blue-100 px-4 py-2">
                  <a href="#Retail" onClick={handleScroll}>
                    Retail
                  </a>
                </li>
                <li className="hover:bg-blue-100 px-4 py-2">
                  <a href="#Bulk" onClick={handleScroll}>
                    Bulk
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hover:bg-slate-300 rounded-full">
          <a href="#Articles" className="text-white hover:text-blue-700 m-5" onClick={handleScroll}>
            Articles
          </a>
        </div>
      </div>
      <div className="flex items-center custom:hidden space-x-2">
        <button className="bg-blue-500 text-white py-3 px-4 mx-1 my-2 rounded hover:bg-blue-700" onClick={display_form}>
          Contact Us
        </button>
        <button
          className="text-white text-xl focus:outline-none mx-1 my-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div className="hidden custom:flex">
        <button className="bg-blue-500 text-white py-3 px-4 mx-1 my-2 rounded hover:bg-blue-700" onClick={display_form}>
          Contact Us
        </button>
      </div>
      {temp && <Form setTemp={setTemp} setIsSubmitted={setIsSubmitted} />}
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-gradient-to-b from-blue-500 to-gray-600 to-black rounded-bl-xl w-36 custom:hidden">
          <ul className="flex flex-col items-center space-y-2 py-4 w-full">
            <li>
              <a href="#Home" className="text-white hover:text-blue-300" onClick={handleScroll}>
                Home
              </a>
            </li>
            <li>
              <a href="#About_Us" className="text-white hover:text-blue-300" onClick={handleScroll}>
                About Us
              </a>
            </li>
            <li>
              <a href="#Services" className="text-white hover:text-blue-300" onClick={handleScroll}>
                Services
              </a>
            </li>
            <li>
              <a href="#Articles" className="text-white hover:text-blue-300" onClick={handleScroll}>
                Articles
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
