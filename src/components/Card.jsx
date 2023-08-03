import React from 'react'
import dashboard from "public/Zdashbaord.jpg"
import Image from 'next/image'


const Card = () => {
  return (
    <div className=' ml-32 mt-7 w-[28rem]'>
    <div className='bg-white px-3 shadow-xl'>
        <Image src={dashboard} alt='pic' className='w-[25rem] ml-4 rounded-md'/>
        <h3 className='mt-5 font-bold text-xl' >Design System</h3>
        <p className='mt-4 text-center text-lg'>Access builder based on Soft UI Design System for Bootstrap 5 by Creative Tim</p>
        <ul className='flex justify-around mt-5'>
            <li><button className='p-3 bg-white border-2 border-blue-500 text-blue-500 mb-3 rounded-md'>View Details</button></li>
            <li><button  className='p-3 bg-blue-500  border-2 border-blue-500 text-white  mb-3 rounded-md'>Go to builder</button></li>
        </ul>
        </div>
    </div>
  )
}

export default Card