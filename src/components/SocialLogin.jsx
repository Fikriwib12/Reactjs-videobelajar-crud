import { NavLink } from "react-router";
import Button from "./Button";
import logoGoogle from "../assets/images/logo-google.svg";

const SocialLogin = ({ buttonText = "Daftar Dengan Google" }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-3 my-6">
        <span className="w-full h-0.5 bg-[#F1F1F1]"></span>
        <span>atau</span>
        <span className="w-full h-0.5 bg-[#F1F1F1]"> </span>
      </div>
      <NavLink to={"/home"}>
        <Button className=" flex justify-center items-center font-normal p-2 gap-2 rounded-[10px] border border-[#F1F1F1]">
          <img src={logoGoogle} alt="" />
          <span className="font-bold text-[#4A505C]">{buttonText}</span>
        </Button>
      </NavLink>
    </>
  );
};

export default SocialLogin;
