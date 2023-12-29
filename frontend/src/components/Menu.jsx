
import React from 'react'
import { IoCamera } from "react-icons/io5";
import { PiVideoCameraFill } from "react-icons/pi";
import { TbPinnedFilled } from "react-icons/tb";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className=' w-[12%] flex flex-col justify-between h-screen  bg-white border-r-2 border' >
        <div className=' text-[#353535] mt-4 items-start pl-6 flex flex-col gap-4'>
           
            <div className=' text-[#2f207c]  items-center flex gap-3'>
            <IoCamera className=' text-xl' />
            <Link href="/">Photos</Link>
            </div>
            <div className='items-center  flex gap-3'>
            <PiVideoCameraFill className=' text-xl' />
            <Link to="/">Videos</Link>
            </div>
            <div className='items-center  flex gap-3'>
            <TbPinnedFilled className=' text-xl' />
            <Link to="/">Pinned</Link>
            </div>
            <div className='items-center  flex gap-3'>
            <AiFillClockCircle className=' text-xl' />
            <Link to="/">Recents</Link>
            </div>
            <div className='items-center  flex gap-3'>
            <FaCloudUploadAlt className=' text-xl' />
            <Link to="/">Uploads</Link>
            </div>


        </div>

        <div className='flex gap-2 text-white font-semibold text-sm items-center bg-[#5942ef] m-3 rounded-full px-3 py-1'>
            <FaPlus className='' />
            <button>NEW ALBUM</button>
        </div>
      
    </div>
  )
}

export default Menu
