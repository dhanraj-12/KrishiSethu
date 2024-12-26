import React, { useState, useEffect } from "react";
import Form from "./Form";

function NavBar() {
  const [temp, setTemp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // Track actual hover state

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
    <div className="flex justify-between items-center p-4 bg-sky-200  fixed top-0 w-full z-40">
      <div className="flex items-center">
        <h1 className="font-black text-2xl font-sans text-blue-400">KRISHI SETU</h1>
      </div>
      <div className="flex space-x-5">
        <div className="hover:bg-slate-300 rounded-full">
          <a href="#Home" className="text-blue-500 hover:text-blue-700 m-5" onClick={handleScroll}>
            Home
          </a>
        </div>
        <div className="hover:bg-slate-300 rounded-full">
          <a href="#About_Us" className="text-blue-500 hover:text-blue-700 m-5" onClick={handleScroll}>
            About Us
          </a>
        </div>
        <div
          className="relative hover:bg-slate-300 rounded-full"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#Services" className="text-blue-500 hover:text-blue-700 m-5">
            Services
          </a>
          {isHover && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-40">
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
          <a href="#Articles" className="text-blue-500 hover:text-blue-700 m-5" onClick={handleScroll}>
            Articles
          </a>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={display_form}>
          Contact Us
        </button>
      </div>
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
