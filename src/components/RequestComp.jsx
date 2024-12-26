import React from 'react';
import ProgressBar from './ProgressBar';

function RequestComp(props) {
  return (
    <div className="flex flex-col lg:flex-row items-center border-2 border-gray-300 mx-auto rounded-xl p-5 w-full sm:w-[40rem] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full lg:flex-grow border-2 border-gray-300 rounded-lg  text-white text-center font-semibold py-3 px-5 lg:mr-4 mb-4 lg:mb-0">
        <ProgressBar filled = {props.filled} total = {props.total} />
      </div>
      <button className="bg-lime-600 text-white font-medium py-2 px-4 rounded-md hover:bg-lime-700 transition-colors duration-300">
        Details
      </button>
    </div>
  );
}

export default RequestComp;