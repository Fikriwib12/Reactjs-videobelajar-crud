import Navbar from "../components/Navbar";
import Person from "../assets/images/person.webp";
import Hamburger from "../assets/images/hamburger.svg";
import Hero from "../container/Hero";
import Course from "../container/Course";
import Cta from "../container/Cta";
import { useState, useRef } from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router";
import iconLogout from "../assets/images/keluar.svg";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Navbar className="justify-between items-center md:px-24 py-6 bg-white">
        <div className="md:flex items-center gap-9 hidden ">
          <a
            href="#"
            className="text-[#333333ad] font-semibold font-[DM_Sans] text-[16px]"
          >
            Kategori
          </a>
          <div className="relative" ref={dropdownRef}>
            <img
              src={Person}
              alt="Profile Picture"
              className="w-11 h-11 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Profil Saya
                </a>
                <div className="border-t border-gray-200 my-2"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Kelas Saya
                </a>
                <div className="border-t border-gray-200 my-2"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Pesanan Saya
                </a>
                <div className="border-t border-gray-200 my-2"></div>

                <div className="flex hover:bg-gray-100">
                  <a className="block px-4 py-2 text-red-600  transition-colors">
                    Keluar
                  </a>
                  <img src={iconLogout} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden relative" ref={mobileMenuRef}>
          <img
            src={Hamburger}
            alt="Menu"
            className="cursor-pointer hover:opacity-70 transition-opacity mr-5"
            onClick={toggleMobileMenu}
          />
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-5 w-screen bg-white rounded-lg shadow-lg py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Kategori
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Profil Saya
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Kelas Saya
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Pesanan Saya
              </a>
              <div className="border-t border-gray-200 my-2"></div>
              <NavLink to={"/login"}>
                <div className="flex hover:bg-gray-100">
                  <a className="block px-4 py-2 text-red-600  transition-colors">
                    Keluar
                  </a>
                  <img src={iconLogout} alt="" />
                </div>
              </NavLink>
            </div>
          )}
        </div>
      </Navbar>
      <Hero />
      <Course />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
