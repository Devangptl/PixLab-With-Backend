
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className=' flex flex-row gap-4 uppercase text-sm mt-4 ml-8 '>
            
            <Link className='text-[#403296] underline underline-offset-8' to="/">animals</Link>
            <Link to="/people">people</Link>
            <Link to="/places">places</Link>

    </div>
  )
}

export default Category
