import React from 'react'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='bg-[#282828] py-[18px] 
                    relative before:content-[" "] before:absolute before:w-[100%] before:h-[3px] before:bg-[#FFB800] before:left-0 before:bottom-[1px] z-[-1] before:z-[1]'>
      <div className='max-w-container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
            <div className='flex 
                            items-center
                            mr-[52px] relative  before:content-[" "] before:absolute before:w-[1px] before:h-[16px] before:bg-[#FFB800] before:right-[-23px] before:top-[0] z-[-1] before:z-[1] '>
            <MdOutlineMarkEmailUnread className='text-white w-base h-base'/>
              <p className='text-white 
                            text-[12px] 
                            font-poppins 
                            font-normal ml-[7px]'>mail@yourcompany.com</p>
            </div>
            <div className='flex 
                            items-center'>
              <BiPhoneCall className='text-white w-base h-base'/>
              <p  className='text-white 
                            text-[12px] 
                            font-poppins 
                            font-normal ml-[7px]'>+896 120 5889 (Toll free)</p>
            </div>
        </div>
        <div className='flex justify-between items-center w-[121px] '>
        <FaFacebookF className='text-white w-base h-base'/>
        <RiTwitterXFill className='text-white w-base h-base'/>
        <FaLinkedinIn className='text-white w-base h-base'/>
        <FaInstagram className='text-white w-base h-base'/>
        </div>
      </div>
    </div>
  )
}

export default Contact