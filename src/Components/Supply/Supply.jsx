import React from 'react'

const Supply = () => {
  return (
      <div>
        <div className='pt-[93px] pb-[109px]'>
          <div className='max-w-container mx-auto flex'>
              <div className='w-1/3 pr-[20px] flxe'>
                  <p className='font-poppins font-bold text-[48px]'>
                      The biggest supplier on the country</p>
              </div>
              <div className='w-2/3 flex items-center'>
                  <p className='font-poppins font-medium text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
              </div>
          </div>
          
      </div>
      <div>
      <div className='grid grid-cols-4 gap-[17px] '>
          <div>
              <img src="assets/supply-1.png" alt="" />
          </div>
          <div>
              <img src="assets/supply-2.png" alt="" />
          </div>
          <div>
              <img src="assets/supply-3.png" alt="" />
          </div>
          <div>
              <img src="assets/supply-4.png" alt="" />
          </div>
      </div>
        </div>
      </div>
  )
}

export default Supply