import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()

  const ProfileValid = async()=>{
      let token = localStorage.getItem("userdataToken")
      // console.log(token)

      const res = await fetch("http://localhost:8800/validuser" , {
        method : "GET",
        headers :{
          "Content-Type":"application/json",
          "Authorization": token
        }
      })

      const data = await res.json()
      // console.log(data);

      if(data.status == 401 || !data){
        navigate("*")
      }else{
        console.log("user verify");
        navigate("/profile")
      }
  }

  useEffect(()=>{
    ProfileValid()
  })

  return (
    <div className=' ml-[35%] mt-[10%] text-[30px]'>

      Profile

      <p>email</p>
    </div>
  )
}

export default Profile
