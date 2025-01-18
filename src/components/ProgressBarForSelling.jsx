import React, { useState, useEffect } from "react";

function ProgressBarForSelling({ data = [] }) {
  const [percentages, setPercentages] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedGrain, setSelectedGrain] = useState(null); // State for the selected grain

  useEffect(() => {
    const calculatedPercentages = data.map((item) =>
      item?.total > 0 ? parseFloat(((item?.filled / item?.total) * 100).toFixed(2)) : 0
    );
    setPercentages(calculatedPercentages);
  }, [data]);

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
      {data.map((item, index) => {
        const percentage = percentages[index] || 0;

        return (
          <div
            key={index}
            className="bg-gray-600 rounded-3xl flex flex-col w-full max-w-[70vw] h-auto p-4 relative mx-auto m-5 max-h-max"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div className="bg-gray-400 h-[9vh] w-full max-w-[50vw] rounded-3xl flex justify-evenly items-center space-x-4">
                <div className="flex flex-col items-center px-1">
                  <h1 className="font-semibold text-xl">{item.grain}</h1>
                  <p className="font-semibold text-xs">{percentage}%</p>
                </div>

                <div className="bg-white h-[5%] w-[80%] rounded-full relative hidden sm:block">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percentage}%`,
                      background: "linear-gradient(to right, blue, blue, #3b82f6, #000000)",
                    }}
                  ></div>
                  <div
                    className="h-[30px] w-[30px] bg-black absolute rounded-full"
                    style={{
                      transform: "translate(-50%, -50%)",
                      top: "50%",
                      left: `${percentage}%`,
                    }}
                    title={`${percentage}%`}
                  ></div>
                </div>
              </div>

              <button
                className="border-2 m-2 border-gray-400 bg-blue-300 p-2 rounded-lg font-black h-12 w-36 hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                onClick={() => {
                  setSelectedGrain(item);
                  setShowModal(true);
                }}
              >
                Contribute
              </button>
            </div>

            <div className="h-auto w-full text-white space-y-2">
              <h1 className="font-medium text-lg">Rate: ${item.rate}/kg</h1>
              <p className="text-sm leading-relaxed opacity-40">
                {item.info?.length > 500 ? `${item.info.slice(0, 500)}...` : item.info}
              </p>
            </div>
          </div>
        );
      })}

      {/* Modal for contribution */}
      {showModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white rounded-lg shadow-lg w-[90vw] max-w-md p-6 space-y-6">
         <h2 className="text-2xl font-bold text-center text-gray-800">
           Contribute to {selectedGrain?.grain}
         </h2>
         <form
           onSubmit={(e) => {
             e.preventDefault();
             alert("Form submitted!");
             setShowModal(false);
           }}
           className="space-y-4"
         >
           <div>
             <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
               Name:
             </label>
             <input
               id="name"
               type="text"
               placeholder="Enter your name"
               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
               required
             />
           </div>
     
           <div>
             <label htmlFor="info" className="block text-sm font-semibold text-gray-700 mb-1">
               Brief Info:
             </label>
             <textarea
               id="info"
               placeholder="Write some information about your grain"
               rows="4"
               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
             ></textarea>
           </div>
     
           <div>
             <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-1">
               Amount in kg:
             </label>
             <input
               id="amount"
               type="number"
               placeholder="Enter the amount in kilograms"
               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
               required
             />
           </div>
     
           <div className="flex justify-between">
             <button
               type="button"
               className="w-1/4 bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-lg text-sm font-semibold transition duration-200"
               onClick={() => setShowModal(false)} // Cancel button closes the modal
             >
               Cancel
             </button>
             <button
               type="reset"
               className="w-1/4 bg-gray-300 text-gray-800 hover:bg-gray-400 py-2 px-4 rounded-lg text-sm font-semibold transition duration-200"
             >
               Reset
             </button>
             <button
               type="submit"
               className="w-1/4 bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg text-sm font-semibold transition duration-200"
             >
               Submit
             </button>
           </div>
         </form>
       </div>
     </div>
     

      )}
    </div>
  );
}

export default ProgressBarForSelling;
