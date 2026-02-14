import Navbar from "../components/Navbar";
import { useState } from "react";
import FormHeader from "../components/FormHeader";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import AuthButtons from "../components/AuthButtons";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <main>
        <form
          action=""
          className="bg-white md:mt-16 mt-5 md:w-147.5 w-[90vw] mx-auto border border-[#F1F1F1] md:p-9 p-5 rounded-sm"
        >
          <FormHeader
            title="Masuk Ke Akun"
            subtitle="Yuk, lanjutin belajarmu di videobelajar!"
          />
          <div className="input-group flex flex-col">
            <InputField label="Email" type="email" id="email" />
            <PasswordInput
              label="Kata Sandi"
              id="password"
              showPassword={showPassword}
              onToggle={() => setShowpassword(!showPassword)}
            />
            <AuthButtons isLoginPage={true} />
            <SocialLogin buttonText="Masuk Dengan Google" />
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
