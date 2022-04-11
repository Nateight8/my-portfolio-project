import React from "react";

function Service({ heading, children }) {
  return (
    <div className="w-full lg:w-2/3 p-6 sm:px-16 h-[90vh] justify-center flex flex-col items-center text-center mx-auto ">
      <h3 className="text-7xl font-queensTrial   mb-6 md:mb-8 ">{heading}</h3>
      {children}
    </div>
  );
}

export default Service;
