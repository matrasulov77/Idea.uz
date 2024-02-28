import React from 'react'
import Swiper from './Swiper'
import ImageComponent from './imageCompanent'

const Home = () => {
  return (
    <div className='w-full bg-[#F2F2F2]'>
      <div className='max-w-[1536px] mx-auto my-0'>
        <section className='flex justify-between py-5'>
          <div className='w-[33%]'>
            <Swiper/>
          </div>
          <div className='w-[33%]'>
            <ImageComponent/>
          </div>
          <div className='w-[33%]'>
            left
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home