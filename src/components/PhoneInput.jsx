import indoFlag from "../assets/images/indoFlag.svg";

const PhoneInput = () => {
  return (
    <>
      <label htmlFor="noHp" className="font-[poppins]">
        No Hp <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-4 mb-4 w-full">
        <div className="flex md:w-[30%] w-full">
          <div className="w-[60%] bg-slate-200 flex justify-center items-center rounded-tl-md rounded-bl-md">
            <img src={indoFlag} alt="" className="object-cover" />
          </div>
          <select
            name=""
            id=""
            className="border border-[#3A35411F] w-full rounded-tr-md rounded-br-md p-3"
          >
            <option value="+62">+62</option>
            <option value="+80">+80</option>
            <option value="+92">+92</option>
          </select>
        </div>

        <input
          type="number"
          id="noHp"
          className="border border-[#3A35411F] w-full p-3 rounded-md "
        />
      </div>
    </>
  );
};

export default PhoneInput;
