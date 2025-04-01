import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import NavData from '../data/NavData.json'
// console.log(NavData.menus)
const mapDAta = NavData.navData
// const key = Object.keys(NavData.menus)
// console.log(`keys: ${key} length: ${key.length}`)


const Header = () => {

  const links = [
    {
      id: "a",
      icon: <FaRegUser />,
      name: "Profile",
      url: "/profile"
    },
    {
      id: "b",
      icon: <CiHeart />,
      name: "Wishlist",
      url: "/wishlist"
    },
    {
      id: "c",
      icon: <IoBagOutline />,
      name: "Bag",
      url: "/bag"
    }

  ]
  return (
    <>
      <header className='h-[80px] text-[#fff] fixed top-0  right-0 left-0 box-shadow w-full z-50 bg-[#fff] shadow'>
        <nav className='flex justify-between items-center h-full'>
          <div className='flex items-center justify-between gap-10 text-black'>

            <div className='flex text-[13px] items-center font-bold'>
              <NavLink to={'/'}>
                <img
                  className='w-25 mx-8'
                  src='https://images.indianexpress.com/2021/01/myntra.png' alt='Myntra logo' />
              </NavLink>
              {
                mapDAta.map((item, index) => (
                  <NavLink key={index} to={item.url} className='ml-6 uppercase'>
                    <p>{item.category}<sup className='text-red-500 ml-1'>{item.sup}</sup></p>
                  </NavLink>
                ))
              }
            </div>

            <div className='relative'>
              <input
                placeholder='Search for products, brands and more'
                className='w-[400px] h-[40px] rounded-md p-[8px_45px_10px] outline-none bg-[#f5f5f6] '
                type="text" />
              <button className='absolute bg-[#f5f5f6] w-[40px] h-[40px] rounded-l-md p-[8px_10px_10px] left-0 border-r-1 border-[#e0e0e0]'>
                <IoIosSearch />
              </button>

            </div>
            <div className="flex items-center justify-center text-center">
              {links.map((link, index) => (
                <NavLink key={index} to={link.url} className='ml-6 flex items-center flex-col justify-center'>
                  <p className="text-[20px]">{link.icon}</p>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Header