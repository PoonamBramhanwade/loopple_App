"use client"



import React,{useState,useEffect} from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import Link from 'next/link';



const Pricing = () => {


  return (
    <div>
      <div className=" flex-col align-center justify-center text-center gap-2 py-14 mx-4 rounded-md mb-7 sm:p-52">
        <button className=" pb-2 text-[3rem] bg-white px-2 py-1 rounded-md mb-2 font-bold">Choose the best plan for you</button>
   
      </div>

      <div className="bg-white text-blue-400 text-center mx-6 py-7 relative bottom-16 rounded-lg sm:w-[25%] sm:bottom-36 sm:left-48">
        <h3 className='border-b border-2'>Monthly</h3>
        <h2 className="mb-2 font-bold text-xl sm:text-2xl">$19/Month</h2>
        <p className="font-light mb-2">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Access to Builder
        </p>
        <p className="font-light mb-2">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Export Code
        </p>
        <p className="font-light mb-3">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Access to Pro Components
        </p>
        
      </div>

      <div className="bg-white text-blue-400 text-center mx-6 py-7 relative rounded-lg sm:w-[30%] sm:left-[37%] sm:bottom-[28rem]">
        <h3>Yearly</h3>
        <h2 className="font-bold text-xl sm:text-2xl">$99</h2>
        <p className="mb-4">per Year</p>
        <p className="font-light mb-2">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Access to Builder
        </p>
        <p className="font-light mb-2">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Export Code
        </p>
        <p className="font-light mb-3">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Access to Pro Components
        </p>
     
      </div>

      <div className="bg-white text-blue-400 text-center mx-6 py-7 relative rounded-lg sm:w-[30%] sm:left-[63%] sm:bottom-[48rem]">
        <h3>LifeTime</h3>
        <h2 className="mb-3 font-bold text-xl sm:text-2xl">$199/onetime</h2>
        <p className="font-light mb-2">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Access to Builder
        </p>
        <p className="font-light mb-2">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Export Code
        </p>
        <p className="font-light mb-3">
          <AiOutlineCheck size={25} className="relative top-6 left-14" /> Access to Pro Components
        </p>
       
      </div>
    </div>
  );
};

export default Pricing;