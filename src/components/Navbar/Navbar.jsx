"use client"
import React from 'react';
import Link from 'next/link';



const Navbar = () => {
return (
    <nav className="fixed mx-7 shadow-xl bg-white left-[13%] w-[75%]  p-5 max-[768px]:left-[5%]">
      <div className="relative flex justify-between items-center h-full w-full px-6 2xl:px-16">
        <Link href="/" className="text-blue-900">
          loopple
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 uppercase">Templates</li>
            </Link>
            <Link href="/pricing">
              <li className="ml-10 uppercase">Products</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase">Resources</li>
            </Link>
            <Link href="/pricing">
              <li className="ml-10 uppercase">Pricing</li>
            </Link>

            <Link href="/tutorial">
              <li className="ml-10 uppercase">Login</li>
            </Link>
          </ul>
        </div>
        <div className="hidden sm:flex border-2 border-black px-3 py-1 p-2 text-black">
          <Link href="#">Create Project</Link>
        </div>
   
       
         
      </div>
    </nav>
  );
};

export default Navbar;