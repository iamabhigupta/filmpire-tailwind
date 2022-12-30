import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex items-center justify-center space-x-2 mt-20">
        <div className="w-6 h-6 rounded-full animate-pulse bg-blue-500"></div>
        <div className="w-6 h-6 rounded-full animate-pulse bg-blue-500"></div>
        <div className="w-6 h-6 rounded-full animate-pulse bg-blue-500"></div>
      </div>
    </>
  );
};

export default Spinner;
