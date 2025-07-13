"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import image from '../../../public/images.jpeg'
import { FaPhoenixFramework, FaRegUser, FaStarOfDavid } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { IoColorFill, IoGitNetworkSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCircleQuestion, FaEarthEurope } from "react-icons/fa6";
import { BsBorderStyle } from "react-icons/bs";
import { BiSlider } from "react-icons/bi";
import { MdOutlineMessage } from 'react-icons/md';
import { CiLineHeight } from "react-icons/ci";






const data = [
  {
    id: 1,
    icon: <FaRegUser />,
    name: "User",
    subCat: [
      {
        subName: "View",
        link: "/dashboard/user/view-user"
      }
    ]
  },
  {
    id: 2,
    icon:<FaRegNewspaper />,
    name: "Enquiry",
    subCat: [
      {
        subName: "Contact Enquiry",
        link: "/dashboard/enquiry/contact-enquiry"
      },
      {
        subName: "Newsletter",
        link: "/dashboard/enquiry/newsletter"
      }
    ]
  },
   {
    id: 3,
    icon:<IoColorFill />,
    name: "Color",
    subCat: [
      {
        subName: "Add Color",
        link: "/dashboard/color/add-color"
      },
      {
        subName: "View Color",
        link: "/dashboard/color/view-color"
      }
    ]
  },
   {
    id: 4,
    icon: <FaPhoenixFramework />,
    name: "Material",
    subCat: [
      {
        subName: "Add Material",
        link: "/dashboard/material/add-material"
      },
      {
        subName: "View Material",
        link: "/dashboard/material/view-material"
      }
    ]
  },
   {
    id: 5,
    icon: <IoGitNetworkSharp />,
    name: "Parent Category",
    subCat: [
      {
        subName: "Add Parent Category",
        link: "/dashboard/parent-category/add-parent-category"
      },
      {
        subName: "View Parent Category",
        link: "/dashboard/parent-category/view-parent-category"
      }
    ]
  },
  {
    id: 6,
    icon: <IoGitNetworkSharp />,
    name: "Sub Category",
    subCat: [
      {
        subName: "Add Sub Category",
        link: "/dashboard/sub-category/add-sub-category"
      },
      {
        subName: "View Sub Category",
        link: "/dashboard/sub-category/view-sub-category"
      }
    ]
  },
  {
    id: 7,
    icon: <IoGitNetworkSharp />,
    name: "Sub Sub Category",
    subCat: [
      {
        subName: "Add Sub Sub Category",
        link: "/dashboard/sub-sub-category/add-sub-sub-category"
      },
      {
        subName: "View Sub Sub Category",
        link: "/dashboard/sub-sub-category/view-sub-sub-category"
      }
    ]
  },
   {
    id: 8,
    icon: <AiOutlineProduct />,
    name: "Product",
    subCat: [
      {
        subName: "Add Product",
        link: "/dashboard/product/add-product"
      },
      {
        subName: "View Product",
        link: "/dashboard/product/view-product"
      }
    ]
  },
   {
    id: 9,
    icon: <FaCircleQuestion />,
    name: "Why Choose us",
    subCat: [
      {
        subName: "Add Why Choose us",
        link: "/dashboard/why-choose-us/add"
      },
      {
        subName: "View Why Choose us",
        link: "/dashboard/why-choose-us/view"
      }
    ]
  },
  {
    id: 10,
    icon:<BsBorderStyle />,
    name: "Orders",
    subCat: [
      {
        subName: "Orders",
        link: "/dashboard/orders/orders"
      },
     
    ]
  },
 {
    id: 11,
    icon: <BiSlider />,
    name: "Slider",
    subCat: [
      {
        subName: "Add Slider",
        link: "/dashboard/slider/add-slider"
      },
      {
        subName: "View Slider",
        link: "/dashboard/slider/view-slider"
      }
    ]
  },
 {
    id: 12,
    icon: <FaEarthEurope />,
    name: "Country",
    subCat: [
      {
        subName: "Add Country",
        link: "/dashboard/country/add-country"
      },
      {
        subName: "View Country",
        link: "/dashboard/country/view-country"
      }
    ]
  },
  {
    id: 13,
    icon: <FaStarOfDavid />,
    name: "Testimonial",
    subCat: [
      {
        subName: "Add Testimonial",
        link: "/dashboard/testimonial/add-testimonial"
      },
      {
        subName: "View Testimonial",
        link: "/dashboard/testimonial/view-testimonial"
      }
    ]
  },
  {
    id: 14,
    icon: <MdOutlineMessage />,
    name: "FAQ",
    subCat: [
      {
        subName: "Add FAQ",
        link: "/dashboard/faq/add-faq"
      },
      {
        subName: "View FAQ",
        link: "/dashboard/faq/view-faq"
      }
    ]
  },
  {
    id: 15,
    icon: <CiLineHeight />,
    name: "Terms & Conditions",
    subCat: []
  },
]

export default function Sidebar() {

  const [open, isOpen] = useState(null);

  const handleChange = (id) => {
    if (id == open) {
      isOpen(null)
    }
    else {
      isOpen(id)
    }
  }

  return (
    <div>
      <div className='p-[10px] shadow flex gap-[10px] items-center top-0 sticky z-50 bg-white'>
        <div>
          <Image src={image} className='w-[80px] h-[100px] rounded-[50%]' alt='me' />
        </div>
        <div>
          <p className='text-[22px] font-bold font-serif'>Admin</p>
          <p className='text-[22px] font-bold font-serif'>the_j.star_01</p>
        </div>
      </div>

      <div>
        <p className='p-[10px] shadow font-bold'>Platform</p>
      </div>

      <div className="acc">
        {
          data.map((v, i) => {
            return (
              <>

                <div>
                  <div onClick={() => handleChange(v.id)} className=" hover:bg-[gray] hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full p-[5px] shadow flex justify-between"><span className='flex gap-[10px] justify-around items-center font-semibold '>{v.icon}{v.name}</span><span className='text-[18px]'>&gt;</span></div>
                  <div className={`subCat ${open == v.id ? "block" : "hidden"}` } >
                    {
                      v.subCat.map((cat, index) => {
                        return (
                          <>
                            <div className='shadow p-[5px_30px] hover:bg-[#ccc]'>
                              <Link href={cat.link}>
                                {cat.subName}
                              </Link>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}


