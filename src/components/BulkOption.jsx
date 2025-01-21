import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link, useNavigate } from "react-router-dom";


function BulkOption () {
    const navigate = useNavigate();
    const handlebuyer = ()=> {

        navigate("/Bulkbuy")
    }

    const handleSeller = ()=> {
        navigate("/Bulksell")
    }


    return (

    <>
    <NavBar />
      <div className='flex justify-center items-center h-screen bg-white-900'>
        <div className='flex gap-8 p-8 justify-center border-2 border-black-400 rounded-lg bg-neutral-100 w-5/12 h-2/5 '>
          {/* Buyer Card */}
          <div className='flex flex-col items-center gap-2 align-middle'>
            <div className='w-24 h-24 border-2 border-black-400 rounded-lg mt-3'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg" alt="" />
            </div>
            <button
              onClick={handlebuyer}
              className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
            >
              Buyer
            </button>
          </div>
          {/* Seller Card */}
          <div className='flex flex-col items-center align-middle gap-2'>
            <div className='w-24 h-24 border-2 border-black-400 rounded-lg mt-3'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg" alt="" />

            </div>
            <button
              onClick={handleSeller}
              className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
            >
            Seller
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BulkOption
