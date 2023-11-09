import React from 'react'

function Header() {
  return (
    <div className='w-full py-[32px] bg-primary-red'>
        <div className='max-w-container mx-auto flex justify-between items-center'>
            <div className=''>
                <img src="assets/Logo.svg" alt="" />
            </div>
            <div className='flex'>
                <ul className='flex items-center text-white capitalize font-poppins font-semibold text-base'>
                    <a href=""><li className='px-[24px] py-[15px]'>home</li></a>
                    <li className='px-[24px]'>about</li>
                    <li className='px-[24px]'>service</li>
                    <li className='px-[24px]'>gallery</li>
                    <li className='px-[24px]'>blog</li>
                </ul>
                <button className='text-white px-[27px] py-[15px] border-2 uppercase font-poppins font-semibold text-base'>contact</button>
            </div>
        </div>
    </div>
  )
}

export default Header