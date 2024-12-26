import React, { useState } from "react";

const ProgressBar = (props) => {
  const percentage = (props.filled / props.total) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress Bar Container */}
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        {/* Progress Bar */}
        <div
          className="h-full bg-gray-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {/* Percentage Label */}
      <p className="text-center mt-2 text-gray-700">{Math.round(percentage)}%</p>
    </div>
  );
};

export default ProgressBar;
