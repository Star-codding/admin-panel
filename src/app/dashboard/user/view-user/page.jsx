import React from 'react'
import { MdEdit } from 'react-icons/md'


export default function page() {
  return (
    <>
      <div className='shadow p-[5px_15px] flex items-center justify-between'>
        <div className='font-semibold'>
          View Users
        </div>
        <div className='flex gap-[40px] items-center'>
         <div><button className='border p-[5px_15px] font-semibold rounded bg-[#00C950] text-white'>Filter</button></div> 
          <div><button className='border p-[8px] rounded-[20px] bg-[#2B7FFF] text-white'><MdEdit className='text-[22px]' /></button></div>
        </div>
      </div>


      <div className='shadow p-[5px_15px] mt-[5px] flex items-center justify-around font-bold'>
        <div><input type="checkbox" className='w-4 h-4'/></div>
        <div>User Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Status</div>
        <div>Action</div>
      </div>


      
      <div className='shadow p-[5px_15px] flex mt-[5px] items-center justify-around '>
        <div><input type="checkbox" className='w-4 h-4'/></div>
        <div>Red</div>
        <div>#ff00ff</div>
        <div>1</div>
        <div><button className='border p-[5px_15px] font-semibold rounded bg-[#00C950] text-white'>Active</button></div>
        <div><button className='border p-[8px] rounded-[20px] bg-[#2B7FFF] text-white'><MdEdit className='text-[22px]' /></button></div>
      </div>
    </>
  )
}
