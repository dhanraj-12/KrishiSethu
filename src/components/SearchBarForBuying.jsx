import React, { useState } from 'react';
import ProgressBarForBuying from './ProgressBarForBuying';
import Data from '../assets/Data';

function SearchBarForBuying() {
  const data = Data();
  const [filterdata, setFilterdata] = useState(data);
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const filterOutData = debounce((filterValue) => {
    setLoading(true);
    let array = [];
    if (filterValue === "") {
      array = data;
    } else {
      array = data.filter(item =>
        item.grain.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    setFilterdata(array);
    setLoading(false);
  }, 500);

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
    filterOutData(e.target.value);
  };

  const clearSearch = () => {
    setFilterValue("");
    setFilterdata(data);
  };

  return (
    <div className="m-4">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:max-w-[70%] mx-auto p-2 bg-gray-500 rounded-lg shadow-lg">
        <input
          type="text"
          className="border border-gray-500 w-full sm:w-[84%] p-3 rounded-lg text-white bg-gray-700 mb-2 sm:mb-0"
          placeholder="Search for crops, e.g., Wheat"
          value={filterValue}
          onChange={handleInputChange}
          aria-label="Search for crops"
        />
        <button
          className="w-full sm:w-[15%] bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all border-[1px] border-white ml-2 mb-2 sm:mb-0 truncate"
          onClick={() => filterOutData(filterValue)}
          aria-label="Search"
        >
          Search
        </button>
        <button
          className="w-full sm:w-[15%] bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-all border-[1px] border-white sm:ml-2 mb-2 sm:mb-0 truncate"
          onClick={clearSearch}
          aria-label="Clear Search"
        >
          Clear
        </button>
      </div>
      {loading && <div className="text-center text-white mt-4">Loading...</div>}
      <ProgressBarForBuying data={filterdata} />
    </div>
  );
}

export default SearchBarForBuying;
