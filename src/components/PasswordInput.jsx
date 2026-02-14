import eye from "../assets/images/eye-solid-full.svg";
import eyeSlash from "../assets/images/eye-slash-solid-full.svg";

const PasswordInput = ({ label, id, showPassword, onToggle }) => {
  return (
    <>
      <label htmlFor={id} className="font-[Poppins]">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={id}
          id={id}
          className="border border-[#3A35411F] w-full p-3 rounded-md mb-4"
        />
        <img
          src={showPassword ? eye : eyeSlash}
          alt=""
          className="w-6 absolute right-2 top-3 cursor-pointer"
          onClick={onToggle}
        />
      </div>
    </>
  );
};

export default PasswordInput;
