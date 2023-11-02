import React from "react";

const ScrollControlButton = ({ snapPoint, isActive, handleClick, activeColor }) => {
  // Define CSS classes based on isActive
  const buttonClasses = `w-2 h-2 md:w-3 md:h-3 flex items-center justify-center rounded-full  ${
    isActive ? activeColor : "bg-stone-400 text-gray-700"
  }`;

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-2 h-2"
    ></svg>
  );

  return (
    <button className={buttonClasses} onClick={() => handleClick(snapPoint)}>
      {icon}
    </button>
  );
};

export default ScrollControlButton;
