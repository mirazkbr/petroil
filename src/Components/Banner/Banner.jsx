import React from 'react'

const Banner = () => {
  return (
    <div className='pt-[278px] pb-[258px] relative before:absolute before:content-[` `] before:w-full before:h-full before:bg-[#00000060] before:z-[-1] z-[-2] before:top-0 before:left-0' 
        style={{background : 'url(assets/banner.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className='max-w-container mx-auto'>
            <div className='w-[842px]'>
                <h2 className='font-poppins text-[64px] font-bold text-white'>We exist since 1975 on the oil and gas industry.</h2>
                <button className='font-poppins px-[44px] py-[20px] bg-primary-red text-white uppercase font-semibold text-base'>learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Banner