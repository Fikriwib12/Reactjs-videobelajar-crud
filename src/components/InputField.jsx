const InputField = ({ label, type = "text", id, required = true }) => {
  return (
    <>
      <label htmlFor={id} className="font-[poppins]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        className="border border-[#3A35411F] w-full p-3 rounded-md mb-4"
      />
    </>
  );
};

export default InputField;
