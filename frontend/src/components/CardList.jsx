import React, { useEffect, useState } from 'react'
import Card from './Card'
import { dataset } from './dataset.js'

const CardList = () => {

  

  const [data , setData ] = useState([])

  useEffect(()=>{
    setData(dataset)
  }, [])



 

  return (
    <div className=' grid grid-cols-4'>

      {
        data.map((item, index)=>(

          <Card key={index} img = {item.webformatURL} like={item.likes} tags={item.tags} user={item.user} userImg={item.userImageURL} id= {item.id}  />
          
        ))
      }
      
    
    </div>
  )
}

export default CardList
