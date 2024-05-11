import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button, Link } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();
  const onClickSignin = () => {
    navigate("/");
  };
  return (
    <section className="login-section flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col lg:flex-row justify-end items-center gap-10 xl:px-[10%]">
        <div className="flex flex-col items-center justify-center w-[90%] mb-10 lg:w-[60%] xl:w-[50%] mx-auto">
          <div className="mb-6 lg:mb-12 text-white w-[90%] lg:w-full mx-auto">
            <h1 className="text-xl lg:text-2xl font-bold">Register Now</h1>
          </div>
          <form className="text-white w-[90%] lg:w-full mx-auto">
            <Input
              type="text"
              label="First Name"
              className="w-[90%] mb-4 xl:max-w-[75%]"
            />
            <Input
              type="text"
              label="Last Name"
              className="w-[90%] mb-4 xl:max-w-[75%]"
            />
            <Input
              type="email"
              label="Mail ID"
              className="w-[90%] mb-4 xl:max-w-[75%]"
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <IoIosEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <IoIosEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-[90%] mb-1 xl:max-w-[75%]"
            />
            <div className="mr-auto">
              <Link className="w-[90%] mb-4 xl:max-w-[75%] text-white underline">
                Forgot Password?
              </Link>
            </div>
            <Button
              className="w-[90%] mb-3 xl:max-w-[75%] text-white px-2 py-4  register-button"
              onClick={onClickSignin}
            >
              Register Here
            </Button>
            <p className="mr-auto text-white">
              Don&apos;t have an account?{" "}
              <Link className="w-[90%] inline mb-4 xl:max-w-[75%] underline">
                Sign in Here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Register;
