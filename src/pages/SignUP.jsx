import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/2328c6f4-1c33-4b00-af14-6f45eaed8d6f/DZ-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60  w-full h-screen fixed top-0 left-0"></div>
        <div className="relative w-full px-5 py-20 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-start text-sm text-gray-700">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember Me
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-700">
                    Already Subscribe To Netflix ?
                  </span>{" "}
                  <Link to="/signin">Sign IN</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default SignUp;
