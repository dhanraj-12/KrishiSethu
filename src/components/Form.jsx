import React from "react";

function Form({ setTemp, setIsSubmitted }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setTemp(false)}
      ></div>
      {/* Modal Content */}
      <div className="relative z-60 bg-white p-8 rounded-lg shadow-lg w-[60vw]">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
            setIsSubmitted(true); // Mark form as submitted
            setTemp(false); // Close the modal
          }}
        >
          <h1 className="font-bold text-xl p-4">Name:</h1>
          <input
            type="text"
            className="border-b-2 border-gray-400 rounded w-[95%] px-2 mx-5"
            placeholder="Enter your name"
            required
          />
          <br />
          <h1 className="font-bold text-xl p-4">Email:</h1>
          <input
            type="email"
            className="border-b-2 border-gray-400 rounded w-[95%] px-2 mx-5"
            placeholder="Enter your email"
            required
          />
          <br />
          <h1 className="font-bold text-xl p-4">Message:</h1>
          <textarea
            className="border-b-2 border-gray-400 rounded w-[95%] px-2 mx-5"
            placeholder="What do you think"
            required
          ></textarea>
          <br />
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="bg-red-500 rounded-lg p-3 hover:bg-red-700 h-[50px] w-[90px] text-white"
              onClick={() => setTemp(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 rounded-lg p-3 hover:bg-blue-700 h-[50px] w-[90px] text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
