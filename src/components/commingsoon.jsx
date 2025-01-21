import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
function CommingSoon() {
  return (
    <>
    <NavBar />
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600">We are working hard to bring you something amazing. Stay tuned!</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default CommingSoon;