import React from 'react'

function Footer() {
  return (
    <footer className="h-[50vh] w-[100vw]  bg-blue-600 bg-opacity-10 flex flex-col items-center justify-center space-y-4">
  <div className="text-center">
    <h2 className="font-bold text-3xl">Stay Connected</h2>
    <p className="mt-2 text-lg">Follow us on our social media platforms for updates!</p>
  </div>
  <div className="flex space-x-6">
    {/* Instagram */}
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transform transition"
    >
      <img
        src="src/assets/insta.jpg"
        alt="Instagram"
        className="w-10 h-10"
      />
    </a>
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transform transition"
    >
      <img
        src="src/assets/360_F_546782398_26V3pL84dJYL7ovgIIIjcDJ7IhPUDxSA.jpg"
        alt="LinkedIn"
        className="w-10 h-10"
      />
    </a>
    {/* Twitter */}
    <a
      href="https://www.twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transform transition"
    >
      <img
        src="src/assets/twitter.jpg"
        alt="Twitter"
        className="w-10 h-10"
      />
    </a>
  </div>
  <div className="mt-4 text-center">
    <p>© 2024 KRISHI SETU. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer
