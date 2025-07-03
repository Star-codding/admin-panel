import React from 'react'
import { TbArrowsRightLeft } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';


export default function Header({sidebar , setSidebar}) {
  return (
    <div>
      <div className='p-[10px]  grid items-center grid-cols-[2%_auto] shadow'>
        <div>
            <TbArrowsRightLeft onClick={()=> setSidebar(!sidebar)} className='text-[25px] cursor-pointer' />
        </div>
        <div className='flex  p-[0px_15px] justify-between items-center '>
            <Link href={'/dashboard'}> <div className='font-serif text-[18px]'>
                Dashboard
            </div></Link>
            <div>
                <FaRegUserCircle className='text-[30px]' />
            </div>
        </div>
      </div>
    </div>
  )
}
