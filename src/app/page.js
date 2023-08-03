import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import dashboard from "public/Zdashbaord.jpg"
import lendingImg from "public/Zloopple.png"
import Image from "next/image";
import Card from '@/components/Card';
const HomePage = () => {
  return (
    <>
    <div className='text-center font-bold text-3xl px-[38rem]'>
    <h3>Create Beautiful Dashboards
using Drag and Drop</h3>
  </div>

  <div className='mt-5'>
<p className='text-center  text-3xl px-[32rem]'>With Loopple, you can build your next
Bootstrap or Tailwind CSS Dashboard easily using drag and drop.</p>
  </div>

  <div  className='flex justify-center mt-9 gap-3'>
    <button className='p-3 text-white bg-black font-bold'>Create Project</button>
    <button className='p-3 bord bg-white font-bold border-2 border-black'>Try Demo</button>
  </div>

<Image src={lendingImg} alt='pic' className='w-[65rem] relative left-[20%]' />

<div>
  <h2 className='text-3xl font-bold ml-20 mt-4'>
  Start Building your Dashboard
  </h2>
  <p className='text-xl ml-20 mt-3 pr-[72rem]'>Choose one of the designs and start building
your awesome dashboard</p>
</div>
<Card/>


<div>
  <h2 className='text-3xl font-bold ml-20 mt-9'>
 Samples
  </h2>
  <p className='text-xl ml-20 mt-3 pr-[72rem]'>View examples built with Loopple</p>
</div>


<div className='w-[90rem] relative left-[10%] '>
<ul className='flex w-[80rem] flex-wrap' >
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
<li>
<Card/>

</li>
</ul>
</div>
  </>
  )
}

export default HomePage