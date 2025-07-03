import React from 'react'
import Header from '../common/Header'
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter, FaUser } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import image from '../../../public/undraw_designer-avatar_n5q8.svg'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <div>
        <div className=' shadow p-[10px] font-serif font-bold text-[18px]' >Home</div>


        <div className='grid grid-cols-5 justify-center text-center gap-[10px] p-[15px]'>

          <div className='border p-[15px_10px] bg-[red] text-white font-bold rounded'>
            <p ><FaUser className='mx-auto text-[22px]' /></p>
            <p>2500</p>
            <p>Welcome</p>
          </div>

          <div className='border p-[15px_10px] bg-[green] text-white font-bold rounded '>
            <p><MdOutlineTimer className='mx-auto text-[22px]' /></p>
            <p>123.50</p>
            <p>Average Time</p>
          </div>

          <div className='border p-[15px_10px] bg-[orange] text-white font-bold rounded '>
            <p><FaCloudDownloadAlt className='mx-auto text-[22px]' /></p>
            <p>1,805</p>
            <p>Collections</p>
          </div>

          <div className='border p-[15px_10px] bg-[blue] text-white font-bold rounded '>
            <p><MdOutlineMessage className='mx-auto text-[22px]' /></p>
            <p>54</p>
            <p>Comments</p>
          </div>

          <div className='border p-[15px_10px] bg-[blue] text-white font-bold rounded '>
            <p><FaShoppingCart className='mx-auto text-[22px]' /></p>
            <p>1050 </p>
            <p>Orders</p>
          </div>


        </div>


        <div className='grid grid-cols-5 text-center gap-[10px] p-[15px]'>

          <div className='border p-[15px_10px] bg-[rgb(59,89,153)] text-white font-bold rounded'>

            <p><FaFacebookF className='mx-auto text-[25px]' /></p>
            <div className='flex justify-between mt-[15px] bg-white p-[5px_15px] text-black '>
              <p><span className='text-[22px]'>35k</span> <br />Friends</p>
              <p><span className='text-[22px]'>128</span> <br />Feeds</p>
            </div>

          </div>

          <div className='border p-[15px_10px] bg-[rgb(13,176,239)] text-white font-bold rounded'>
            <p><FaTwitter className='mx-auto text-[25px]' /></p>
            <div className='flex justify-between mt-[15px] bg-white p-[5px_15px] text-black '>
              <p><span className='text-[22px]'>584k</span> <br />Followers</p>
              <p><span className='text-[22px]'>978</span> <br />Tweets</p>
            </div>
          </div>

          <div className='border p-[15px_10px] bg-[rgb(0,118,180)] text-white font-bold rounded'>
            <p><FaLinkedinIn className='mx-auto text-[25px]' /></p>
            <div className='flex justify-between mt-[15px] bg-white p-[5px_15px] text-black '>
              <p><span className='text-[22px]'>578+</span> <br />Contacts</p>
              <p><span className='text-[22px]'>365</span> <br />Feeds</p>
            </div>
          </div>

          <div className='border p-[15px_10px] bg-[rgb(211,72,55)] text-white font-bold rounded'>
            <p><FaGoogle className='mx-auto text-[25px]' /></p>
            <div className='flex justify-between mt-[15px] bg-white p-[5px_15px] text-black '>
              <p><span className='text-[22px]'>450</span> <br />Followers</p>
              <p><span className='text-[22px]'>365</span> <br />Feeds</p>
            </div>
          </div>

          <div className='border p-[15px_10px] bg-[hotpink] text-white font-bold rounded'>
            <p><FaInstagram className='mx-auto text-[25px]' /></p>
            <div className='flex justify-between mt-[15px] bg-white p-[5px_15px] text-black '>
              <p><span className='text-[22px]'>1650+</span> <br />Followers</p>
              <p><span className='text-[22px]'>555</span> <br />Feeds</p>
            </div>
          </div>


        </div>

        <div className='grid grid-cols-2 gap-4 p-4'>
          <div className='col-span-1 bg-white shadow rounded p-4'>
            <h2 className='text-[16px] font-semibold mb-2'>Earnings Overview</h2>
            <div className='w-full h-[200px] bg-blue-100 rounded flex items-center justify-center text-blue-500'>
              Line Chart Placeholder
            </div>
          </div>

          <div className='col-span-1 bg-white shadow rounded p-4'>
            <h2 className='text-[16px] font-semibold mb-2'>Revenue Sources</h2>
            <div className='w-full h-[200px] bg-green-100 rounded flex items-center justify-center text-green-600'>
              Pie Chart Placeholder
            </div>
          </div>

          {/* <div className='col-span-1 bg-white shadow rounded p-4'>
            <h2 className='text-[16px] font-semibold mb-2'>Projects</h2>
          </div>

          <div className='col-span-1 bg-white shadow rounded p-4 flex items-center justify-center'>
            <Image src={image} alt='Illustration' className='max-h-[200px]' />
          </div> */}
        </div>



      </div>
    </div>
  )
}
