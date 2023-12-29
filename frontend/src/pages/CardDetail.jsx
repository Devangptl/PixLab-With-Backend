
import React, { useEffect, useState } from 'react'
import { FaTag } from "react-icons/fa6";
import { IoHeartSharp } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import { Link, useParams } from 'react-router-dom';
import { dataset } from '../components/dataset';
import Loading from '../components/Loading';



const CardDetail =  (props) => {
  const [alldata , setAllData ] = useState([])
  const [data , setData ] = useState([])
  const [loading, setLoading] = useState(false)

  
  
  const { id } = useParams()

  // console.log(id)
  
   const setDetail = async (id) => {
    // window.location.reload(true);
      setLoading(true)

       alldata.map((item)=>{
     
          if(item.id == id){
              setData(item)
            }

            setLoading(false)

      })
    // console.log(id)
   
    
  }


  
  useEffect(()=>{
      setDetail(id)
      setAllData(dataset)
  }, [])

  // console.log(data)

 
  if (loading) {
    return (
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <Loading />
      </div>
    );
  }


  return (
    <div className=' shadow-2xl border rounded-md border-[#dad9d9] mx-20  mt-5 mb-16  '>
      <div className='  flex flex-col gap-4 p-3 '>

        <div className=' flex justify-between px-2'>
          <div className=' font-semibold'>Mother And Her Cub</div>
          <div className='  text-[#403296] text-sm flex gap-2 items-center '>
            <IoHeartSharp className=' ' />
            <h1>{data.likes}</h1>
            </div>
            <Link to="/" className=' items-center flex  text-[#403296]'>
            <RxCross2 className=' font-extrabold' />
            </Link>
        </div>

        <div className=' flex items-center justify-center px-2'>
          <img width={900}  src={data.largeImageURL} alt="" />
        </div>

        <div className=' flex items-center justify-between px-2'>

          <Link to={""}>
            <div className=' items-center flex gap-3'>
              <div className=' ' >
                <img width={35} className=' rounded-full' src={data.userImageURL} alt="" />
              </div>
              <div className=' font-semibold'>{data.user}</div>
            </div>
          </Link>
          

          <div className=' flex gap-2'>
            <p className='flex items-center gap-1 text-sm bg-[gray] rounded-xl px-2'><FaTag className=' text-xs' /> {data.tags}</p>
            {/* <p className='flex items-center gap-1 text-sm bg-[gray] rounded-xl px-2'><FaTag className=' text-xs' /> Animal</p> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardDetail
