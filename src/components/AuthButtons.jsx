import { NavLink } from "react-router";
import Button from "./Button";

const AuthButtons = ({ isLoginPage = false }) => {
  return (
    <>
      <div className="text-right mb-6">
        <a className="font-[DM_Sans] text-[#4A505C]">Lupa Password?</a>
      </div>
      <NavLink to={isLoginPage ? "/" : "/home"}>
        <Button className="bg-[#3ecf4c] text-white hover:bg-[#37b844] mb-4">
          {isLoginPage ? "Daftar" : "Daftar"}
        </Button>
      </NavLink>
      <NavLink to={isLoginPage ? "/home" : "/login"}>
        <Button className="bg-[#e2fcd9cc] hover:bg-[#eaf7e6cc]  text-[#3ecf4c] ">
          Masuk
        </Button>
      </NavLink>
    </>
  );
};

export default AuthButtons;
