import React, { useState, useEffect } from "react";

function ProgressBarForSelling({ data = [] }) {
  // State to store the percentage of progress for each item
  const [percentages, setPercentages] = useState([]);

  // useEffect hook to calculate the percentage whenever the data changes
  useEffect(() => {
    // Calculate percentage progress for each item based on filled and total values
    const calculatedPercentages = data.map((item) =>
      item?.total > 0 ? parseFloat(((item?.filled / item?.total) * 100).toFixed(2)) : 0
    );
    // Update the state with the calculated percentages
    setPercentages(calculatedPercentages);
  }, [data]);

  // If no data is available, show a message indicating that data is missing
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-[300px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg text-white text-xl font-semibold p-6 m-5">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4 animate-pulse"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-7h-2V7h2v4zm0 3h-2v-2h2v2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-lg">Oops! No data available right now.</p>
          <p className="mt-2 text-sm">Please check back later or try again with different filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Mapping over the data and displaying each item's progress bar */}
      {data.map((item, index) => {
        // Get the percentage for the current item
        const percentage = percentages[index] || 0;

        return (
          <div
            key={index}
            className="bg-gray-600 rounded-3xl flex flex-col w-full max-w-[70vw] h-auto p-4 relative mx-auto m-5 max-h-max"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              {/* Item details and progress bar */}
              <div className="bg-gray-400 h-[9vh] w-full max-w-[50vw] rounded-3xl flex justify-evenly items-center space-x-4">
                <div className="flex flex-col items-center px-1">
                  <h1 className="font-semibold text-xl">{item.grain}</h1>
                  <p className="font-semibold text-xs">{percentage}%</p>
                </div>

                {/* Progress bar is visible on larger screens */}
                <div className="bg-white h-[5%] w-[80%] rounded-full relative hidden sm:block">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percentage}%`, // Set the width of the progress bar
                      background: "linear-gradient(to right, blue, blue, #3b82f6, #000000)", // Set the gradient color for the progress bar
                    }}
                  ></div>
                  {/* Circular indicator showing the percentage */}
                  <div
                    className="h-[30px] w-[30px] bg-black absolute rounded-full"
                    style={{
                      transform: "translate(-50%, -50%)", // Center the indicator
                      top: "50%",
                      left: `${percentage}%`, // Position the indicator based on the percentage
                    }}
                    title={`${percentage}%`} // Tooltip showing the exact percentage
                  ></div>
                </div>
              </div>

              {/* Button to contribute to the crop */}
              <button
                className="border-2 m-2 border-gray-400 bg-blue-300 p-2 rounded-lg font-black h-12 w-36 hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                onClick={() => alert(`Contribute to ${item.grain}`)} // Alert message when clicked
              >
                Contribute
              </button>
            </div>

            {/* Displaying additional item information */}
            <div className="h-auto w-full text-white space-y-2">
              <h1 className="font-medium text-lg">Rate: ${item.rate}/kg</h1>
              <p className="text-sm leading-relaxed opacity-40">
                {/* Display the item info, truncating it if too long */}
                {item.info?.length > 500 ? `${item.info.slice(0, 500)}...` : item.info}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBarForSelling;
