import { useState } from "react";

const CourseForm = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    name: "",
    position: "",
    workPlace: "",
    cardHeroImg: "",
    profileImg: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_COURSE", payload: formData });
    setFormData({
      title: "",
      desc: "",
      name: "",
      position: "",
      workPlace: "",
      cardHeroImg: "",
      profileImg: "",
    });
    e.target.reset();
  };

  return (
    <div className="px-5 md:px-25 py-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm max-w-2xl"
      >
        <h1 className="text-2xl font-bold mb-6">Tambah Course Baru</h1>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
            <label htmlFor="title" className="block font-semibold text-sm mb-1">
              Judul Course
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#f64920] focus:border-transparent"
              placeholder="Full Stack Developer Course"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="desc" className="block font-semibold text-sm mb-1">
              Deskripsi
            </label>
            <input
              type="text"
              name="desc"
              id="desc"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#f64920] focus:border-transparent"
              placeholder="Membangun kemampuan untuk membuat website statis atau dinamis dari 0"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block font-semibold text-sm mb-1">
              Nama Pengajar
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#f64920] focus:border-transparent"
              placeholder="Jhon Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="position"
              className="block font-semibold text-sm mb-1"
            >
              Posisi Kerja Sekarang
            </label>
            <input
              type="text"
              name="position"
              id="position"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#f64920] focus:border-transparent"
              placeholder="Full Stack Developer"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="workPlace"
              className="block font-semibold text-sm mb-1"
            >
              Tempat Kerja Sekarang
            </label>
            <input
              type="text"
              name="workPlace"
              id="workPlace"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#f64920] focus:border-transparent"
              placeholder="Grab"
              value={formData.workPlace}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="cardHeroImg"
              className="block font-semibold text-sm mb-1"
            >
              Gambar Course
            </label>
            <input
              type="file"
              name="cardHeroImg"
              id="cardHeroImg"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#f64920] file:text-white file:cursor-pointer hover:file:bg-[#d93d18]"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="profileImg"
              className="block font-semibold text-sm mb-1"
            >
              Foto Pengajar
            </label>
            <input
              type="file"
              name="profileImg"
              id="profileImg"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#f64920] file:text-white file:cursor-pointer hover:file:bg-[#d93d18]"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#f64920] text-white font-semibold py-2.5 rounded-md cursor-pointer hover:bg-[#d93d18] transition-colors"
        >
          Tambah Data
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
