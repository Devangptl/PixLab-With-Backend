import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className=''> 
      <div className=' shadow-2xl bg-[#5942ef] h-12 flex justify-between items-center w-[100%] text-center'>
        <div className=' px-6 text-white'>PixLab</div>
        <div className='text-xl  text-white cursor-pointer flex'>
        <div className=' px-4 '><CgProfile /></div>
        <div className=' px-4 '><IoMdSettings /></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
