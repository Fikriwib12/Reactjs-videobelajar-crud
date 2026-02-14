import React from "react";
import logo from "../assets/images/Logo.png";

const Navbar = ({ className, children }) => {
  return (
    <nav
      className={`bg-white w-full h-20 shadow-sm flex items-center  md:pl-25 px-0 py-3.25 ${className}`}
    >
      <img src={logo} alt="logo video belajar" className="ml-5" />
      {children}
    </nav>
  );
};

export default Navbar;
