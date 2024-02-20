import React, { useContext } from "react";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {

 

  return (
    <div className=" fixed top-0 z-20 w-full">
      <div className=" shadow-2xl bg-[#5942ef] h-12 flex justify-between items-center w-[100%] text-center">
        <Link to={"/"} className=" px-6 text-white">
          PixLab
        </Link>
        <div className="text-xl  text-white cursor-pointer flex">
        <Link to={"/login"} className=" px-4 ">
        <CgProfile /> 
      </Link>
        <Link to={"/signup"} className=" px-4 ">
        <IoMdSettings /> 
      </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
