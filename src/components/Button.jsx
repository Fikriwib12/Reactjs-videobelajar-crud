import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`w-full md:p-3 p-2 font-[DM_Sans] font-bold  rounded-[10px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
