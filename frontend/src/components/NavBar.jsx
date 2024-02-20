import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" fixed top-0 z-20 w-full">
      <div className=" shadow-2xl bg-[#5942ef] h-12 flex justify-between items-center w-[100%] text-center">
        <Link to={"/"} className=" px-6 text-white">
          PixLab
        </Link>
        <div className="text-xl flex items-center gap-4 px-3 justify-center  text-white cursor-pointer">
          <Link to={"/profile"} className=" ">
            <CgProfile />
          </Link>
          <div className=" flex justify-center items-center gap-4 text-[16px]">
          <Link className=" text-" to={"/login"}>Login</Link>
          <Link to={"/"}>Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
