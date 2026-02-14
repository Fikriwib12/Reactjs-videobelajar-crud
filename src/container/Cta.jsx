import React from "react";
import CtaImg from "../assets/images/cta-img.jpg";

const Cta = () => {
  return (
    <section id="cta" className="mt-16 md:px-25 px-5">
      <div
        className="cta-container w-full mx-auto h-100 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${CtaImg})` }}
      >
        <div className="cta-overlay w-full h-full bg-black/80 bg-opacity-80 text-white flex flex-col items-center justify-center gap-10 md:p-8 p-2">
          <div className="cta-text text-center ">
            <div
              id="newsletter"
              className="md:text-xl text-sm text-[#c1c2c4] font-[DM_Sans] mb-2"
            >
              NEWSLETTER
            </div>
            <h3 className="md:text-4xl text-2xl font-[Poppins] font-semibold mb-3">
              Mau Belajar Lebih Banyak?
            </h3>
            <p className="md:text-base text-sm md:w-[70%]  mx-auto md:mb-8 font-[DM_Sans]">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
          </div>
          <div
            id="cta-email"
            className="flex md:flex-row flex-col gap-4 text-center md:relative"
          >
            <input
              type="email"
              id="email"
              className="md:w-130 w-full md:h-14.5 rounded-lg text-base px-8 py-2 bg-white text-black placeholder-black"
              placeholder="Masukkan Emailmu"
            />
            <button className="bg-[#ffbd3a] text-white font-bold py-2 px-7 rounded-lg md:absolute right-2 top-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
