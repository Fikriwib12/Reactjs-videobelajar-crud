import React from "react";
import HeroImg from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <section id="hero" className="w-full md:px-25 px-5 ">
      <div
        className="h-100 mx-auto my-15 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="bg-black/80  w-full h-full rounded-lg flex flex-col items-center justify-center gap-6 md:p-8 p-7">
          <h1 className="text-white text-center md:text-5xl text-2xl md:w-8/15 font-[Poppins] font-bold">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <h2 className="text-white text-center text-sm md:w-3/4">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </h2>
          <button className="bg-[#3ecf4c] text-white font-bold md:text-base text-sm py-2 md:px-7 px-1 rounded-lg">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
