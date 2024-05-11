import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button, Link } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="login-section flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col lg:flex-row justify-between items-center gap-10 xl:px-[10%]">
        <div className="flex items-center justify-center h-full">
          <img
            src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715425817/login_rftcge.png"
            alt="signin-signup-image"
            className="w-[80%] lg:w-[100%] mx-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[90%] mb-10 lg:w-[60%] xl:w-[50%] mx-auto">
          <div className="mb-6 lg:mb-12 text-white w-[90%] lg:w-full mx-auto">
            <h1 className="text-xl lg:text-2xl font-bold">Sign In</h1>
            <p className="text-gray-500 text-semibold">
              Type your username and password to sign in
            </p>
          </div>
          <form className="text-white w-[90%] lg:w-full mx-auto">
            <Input
              isRequired
              type="email"
              label="Email"
              className="w-[90%] mb-4 xl:max-w-[75%]"
              placeholder="abc@gmail.com"
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
            <Button className="w-[90%] mb-3 xl:max-w-[75%] text-white px-2 py-4  register-button">
              Sign in
            </Button>
            <p className="mr-auto text-whit">
              Don&apos;t have an account?{" "}
              <Link className="w-[90%] inline mb-4 xl:max-w-[75%] underline">
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Login;
