import React, { useState, useEffect } from 'react';
import ProgressBarForSelling from './ProgressBarForSelling'; // Importing the ProgressBar component
import Data from '../assets/Data'; // Importing data from an external file

function SearchBarForSelling() {
  // Initializing the state with the data fetched from the Data function
  const data = Data();
  const [filterdata, setFilterdata] = useState(data); // State to store filtered data
  const [filterValue, setFilterValue] = useState(""); // State to store the current search input value
  const [loading, setLoading] = useState(false); // State to manage the loading state

  // Debounce function to limit the number of times the filtering function is called
  const debounce = (func, delay) => {
    let timeoutId; // Variable to store the timeout ID
    return (...args) => {
      clearTimeout(timeoutId); // Clear the previous timeout if the function is called again
      timeoutId = setTimeout(() => func(...args), delay); // Set a new timeout to call the function after a delay
    };
  };

  // filterOutData function is called when the search value changes.
  // It filters the data based on the grain name, and includes debounce logic to delay the search.
  const filterOutData = debounce((filterValue) => {
    setLoading(true); // Start loading spinner
    let array = []; // Initialize an empty array for filtered data
    if (filterValue === "") {
      array = data; // If filter value is empty, display all data
    } else {
      // Filter data where the grain name matches the filterValue (case insensitive)
      array = data.filter(item =>
        item.grain.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    setFilterdata(array); // Update the state with filtered data
    setLoading(false); // Stop loading spinner
  }, 500); // Debounce delay of 500ms to avoid excessive function calls

  // Handle input change in the search bar and trigger the filterOutData function
  const handleInputChange = (e) => {
    setFilterValue(e.target.value); // Update the filter value with the input value
    filterOutData(e.target.value); // Call the debounce function to filter data
  };

  // Function to clear the search input and reset the filtered data to the original data
  const clearSearch = () => {
    setFilterValue(""); // Clear the input field
    setFilterdata(data); // Reset the filtered data to original data
  };

  return (
    <div className="m-4 mt-36">
      {/* Search bar layout */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:max-w-[70%] mx-auto p-2 bg-gray-500 rounded-lg shadow-lg">
        <input
          type="text"
          className="border border-gray-500 w-full sm:w-[84%] p-3 rounded-lg text-white bg-gray-700 mb-2 sm:mb-0"
          placeholder="Search for crops, e.g., Wheat"
          value={filterValue} // Bind input value to filterValue state
          onChange={handleInputChange} // Call handleInputChange function on input change
          aria-label="Search for crops"
        />
        <button
          className="w-full sm:w-[15%] bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all border-[1px] border-white ml-2 mb-2 sm:mb-0 truncate"
          onClick={() => filterOutData(filterValue)} // Call filterOutData on button click
          aria-label="Search"
        >
          Search
        </button>
        <button
          className="w-full sm:w-[15%] bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-all border-[1px] border-white sm:ml-2 mb-2 sm:mb-0 truncate"
          onClick={clearSearch} // Call clearSearch function on button click
          aria-label="Clear Search"
        >
          Clear
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && <div className="text-center text-white mt-4">Loading...</div>}

      {/* Displaying the filtered data */}
      <ProgressBarForSelling data={filterdata} />
    </div>
  );
}

export default SearchBarForSelling;
