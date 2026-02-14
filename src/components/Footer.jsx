import React from "react";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import RightArrow from "../assets/images/right-arrow.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  const [isKategoriOpen, setIsKategoriOpen] = useState(false);
  const [isPerusahaanOpen, setIsPerusahaanOpen] = useState(false);
  const [isKomunitasOpen, setIsKomunitasOpen] = useState(false);
  const toggleKategori = () => {
    setIsKategoriOpen(!isKategoriOpen);
  };

  const togglePerusahaan = () => {
    setIsPerusahaanOpen(!isPerusahaanOpen);
  };

  const toggleKomunitas = () => {
    setIsKomunitasOpen(!isKomunitasOpen);
  };
  return (
    <footer className="w-full bg-white mt-16 md:px-25  px-5">
      <div className="footer-container py-14 overflow-hidden">
        <div className="footer-content flex justify-between md:flex-row flex-col ">
          <div className="footer-logo md:w-1/2 mb-4 md:mb-0">
            <img src={Logo} alt="Logo" className="w-1/3" />
            <h4 className="md:text-xl text-lg font-bold mt-4">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h4>
            <p className="md:text-lg text-sm mt-2">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="md:text-lg text-sm">+62-877-7123-1234</p>
          </div>

          <div className="footer-desc md:w-1/2 flex justify-between md:flex-row flex-col">
            <div className="kategori md:w-1/3 flex flex-col md:gap-2">
              <div
                className="flex justify-between w-[90vw] cursor-pointer md:cursor-default"
                onClick={toggleKategori}
              >
                <h4 className="font-bold text-lg md:mb-4 mb-2">Kategori</h4>
                <img
                  src={RightArrow}
                  alt="toggle"
                  className={`md:hidden transition-transform duration-300 ${
                    isKategoriOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              <a href="#" className="md:block hidden">
                Digital & Teknologi
              </a>
              <a href="#" className="md:block hidden">
                Pemasaran
              </a>
              <a href="#" className="md:block hidden">
                Manajemen Bisnis
              </a>
              <a href="#" className="md:block hidden">
                Pengembangan Diri
              </a>
              <a href="#" className="md:block hidden">
                Desain
              </a>

              {isKategoriOpen && (
                <div className="md:hidden flex flex-col md:gap-2">
                  <a href="#">Digital & Teknologi</a>
                  <a href="#">Pemasaran</a>
                  <a href="#">Manajemen Bisnis</a>
                  <a href="#">Pengembangan Diri</a>
                  <a href="#">Desain</a>
                </div>
              )}
            </div>

            <div className="perusahaan md:w-1/3 flex flex-col md:gap-2">
              <div
                className="flex justify-between w-[90vw] cursor-pointer md:cursor-default"
                onClick={togglePerusahaan}
              >
                <h4 className="font-bold text-lg md:mb-4 mb-2">Perusahaan</h4>
                <img
                  src={RightArrow}
                  alt="toggle"
                  className={`md:hidden transition-transform duration-300 ${
                    isPerusahaanOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              <a href="#" className="md:block hidden">
                Tentang Kami
              </a>
              <a href="#" className="md:block hidden">
                FAQ
              </a>
              <a href="#" className="md:block hidden">
                Ketentuan Layanan
              </a>
              <a href="#" className="md:block hidden">
                Bantuan
              </a>

              {isPerusahaanOpen && (
                <div className="md:hidden flex flex-col md:gap-2">
                  <a href="#">Tentang Kami</a>
                  <a href="#">FAQ</a>
                  <a href="#">Ketentuan Layanan</a>
                  <a href="#">Bantuan</a>
                </div>
              )}
            </div>

            <div className="komunitas md:w-1/3 flex flex-col md:gap-2">
              <div
                className="flex justify-between w-[90vw] cursor-pointer md:cursor-default"
                onClick={toggleKomunitas}
              >
                <h4 className="font-bold text-lg md:mb-4 mb-2">Komunitas</h4>
                <img
                  src={RightArrow}
                  alt="toggle"
                  className={`md:hidden transition-transform duration-300 ${
                    isKomunitasOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              <a href="#" className="md:block hidden">
                Tips Sukses
              </a>
              <a href="#" className="md:block hidden">
                Blog
              </a>

              {isKomunitasOpen && (
                <div className="md:hidden flex flex-col md:gap-2">
                  <a href="#">Tips Sukses</a>
                  <a href="#">Blog</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-divider w-full h-1 bg-[#3a35411f] mt-6 mb-8"></div>

        <div className="footer-copyright flex flex-wrap-reverse justify-between items-center gap-2">
          <p>@2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="social-icon flex gap-5">
            <img src={linkedin} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
