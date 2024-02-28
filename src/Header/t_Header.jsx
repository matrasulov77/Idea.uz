import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiHeart, CiShoppingBasket } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";

const T_Header = () => {
  return (
    <div>
        <div>
          <div className=' max-w-[1536px] my-0 mx-auto'>
              <section className='flex justify-between items-center'>
                <div className='flex justify-center gap-7'>
                  <button className='flex justify-center items-center bg-[#DD1470] border border-[#DD1470] border-solid text-white w-[40px] md:w-[160px] h-[40px] gap-1 rounded-lg'>
                    <RxHamburgerMenu/>
                    <span className='hidden md:flex'>Каталог товаров</span>
                  </button>
                  <div className='flex  border-[#F2F2F2] border-solid border height-[40px] rounded-lg w-[300px] xs:w-[450px] ss:w-[550px] lg:w-[750px] md:w-[650px] bg-[#F2F2F2]'>
                  <input type="text"  className='w-[100%] bg-[#F2F2F2] p-2' placeholder='Искать товары'/>
                  <span className='flex justify-center items-center ml-[280px]'>
                  <CiSearch />
                  </span>
                </div>
                </div>
                <div  className='hidden lg:flex justify-center items-center gap-3'>
                <div className='flex flex-col justify-center items-center'>
                  <CiHeart/>
                  <span>Избранное</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <CiShoppingBasket/>
                  <span>Корзина</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <IoIosGitCompare/>
                  <span>Сравнение</span>
                </div>
                </div>
              </section>
          </div>
        </div>
    </div>
  )
}

export default T_Header;