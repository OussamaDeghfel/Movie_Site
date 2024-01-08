import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handlelogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 px-8 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer">Account</button>
          </Link>
          <button
            onClick={handlelogOut}
            className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="text-white pr-4 cursor-pointer">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
