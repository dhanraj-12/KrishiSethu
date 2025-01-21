import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Articles () {
  return (
    <>
      <NavBar />
      <article className='bg-white shadow-md rounded-lg p-6 mt-20'>
        <h2 className='text-2xl font-semibold text-green-600 mb-4'>
          The Role of Farmers in Our Economy
        </h2>

        {/* Image Section */}
        <div className='bg-contain h-2/4'>
  <img
    src="https://www.nicheagriculture.com/wp-content/uploads/2020/10/ezgif.com-gif-maker-13.webp" 
    alt="Farmers working in a field"
    className="w-full h-auto max-h-72 object-cover rounded-lg shadow-md mx-auto mt-12 bg-cover max-w-full"
  />
</div>


        <p className='text-gray-700 leading-relaxed'>
          Farmers play a crucial role in feeding the world and sustaining
          economies. They ensure food security, contribute to rural development,
          and support biodiversity. However, challenges such as climate change,
          market access, and technological barriers remain significant.
        </p>

        <p className='text-gray-700 leading-relaxed mt-4'>
          To address these challenges, innovations in technology and policies
          that empower farmers are essential. By integrating sustainable
          practices and leveraging modern tools, farmers can improve
          productivity and resilience.
        </p>
      </article>
      <Footer />
    </>
  )
}

export default Articles
