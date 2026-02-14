import { useReducer, useState } from "react";
import Card from "../components/Card";
import CourseForm from "../components/CourseForm";
import UpdateModal from "../components/UpdateModal";
import { coursesData } from "../data/coursesData";

const courseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return [...state, { ...action.payload, id: state.length + 1 }];
    case "DELETE_COURSE":
      return state.filter((course) => course.id !== action.payload);
    case "UPDATE_COURSE":
      return state.map((course) =>
        course.id === action.payload.id ? action.payload : course
      );
    default:
      return state;
  }
};

const Course = () => {
  const [courses, dispatch] = useReducer(courseReducer, coursesData);
  const [editingCourse, setEditingCourse] = useState(null);

  return (
    <section id="course" className="mx-auto md:px-25 ">
      <CourseForm dispatch={dispatch} />

      {editingCourse && (
        <UpdateModal
          course={editingCourse}
          dispatch={dispatch}
          onClose={() => setEditingCourse(null)}
        />
      )}
      <div className=" px-5">
        <h2 className="md:text-4xl text-2xl mb-2 font-[Poppins] font-bold">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-[#333333ad] font-medium text-base font-[DM_Sans] mb-8 ">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="tabs-container overflow-hidden pl-5  ">
        <div className="tabs flex md:gap-9 gap-5 mb-3 flex-row overflow-hidden w-125 md:w-full  ">
          <a href="#" className="text-[#f64920] font-bold w">
            Semua Kelas
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Pemasaran
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Desain
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Pengembangan Diri
          </a>
          <a href="#" className="text-[#333333ad] font-bold">
            Bisnis
          </a>
        </div>

        <div
          id="divider-tabs"
          className="w-14 h-1 bg-[#f64920] rounded-lg"
        ></div>
      </div>

      <div className="card-container flex flex-col md:grid md:grid-cols-3 gap-6 mt-8 px-5">
        {courses.map((course) => (
          <Card key={course.id} {...course} dispatch={dispatch} onEdit={() => setEditingCourse(course)} />
        ))}
      </div>
    </section>
  );
};

export default Course;
