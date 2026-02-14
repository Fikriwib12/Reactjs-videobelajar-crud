import { useState } from "react";

const UpdateModal = ({ course, dispatch, onClose }) => {
  const [formData, setFormData] = useState({
    title: course.title,
    desc: course.desc,
    name: course.name,
    position: course.position,
    workPlace: course.workPlace,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_COURSE",
      payload: { ...course, ...formData },
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Update Course</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label htmlFor="update-title" className="font-semibold text-sm">
              Judul Course
            </label>
            <input
              type="text"
              name="title"
              id="update-title"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="update-desc" className="font-semibold text-sm">
              Deskripsi
            </label>
            <input
              type="text"
              name="desc"
              id="update-desc"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="update-name" className="font-semibold text-sm">
              Nama Pengajar
            </label>
            <input
              type="text"
              name="name"
              id="update-name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="update-position" className="font-semibold text-sm">
              Posisi Kerja Sekarang
            </label>
            <input
              type="text"
              name="position"
              id="update-position"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="update-workPlace" className="font-semibold text-sm">
              Tempat Kerja Sekarang
            </label>
            <input
              type="text"
              name="workPlace"
              id="update-workPlace"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formData.workPlace}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
