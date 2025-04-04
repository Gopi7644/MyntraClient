import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import React, { useContext,} from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import { DataContext } from "../Context/Context";

const Header = () => {

  const {data, setData, loading, setLoading, error, setError, activeMenu, setActiveMenu } = useContext(DataContext)

  if (loading) return <h2 className="mt-30 text-center font-bold text-20">Loading...</h2>;
  if (error) return <h2 className="mt-30 text-center text-red-500">Error: {error}</h2>;
  // console.log(data)
  const key = Object.keys(data.menus)
  // console.log(objectKey)

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
            <ul className='flex text-[13px] items-center font-bold'>
              <NavLink to={'/'}>
                <img
                  className='w-25 mx-8'
                  src='https://images.indianexpress.com/2021/01/myntra.png' alt='Myntra logo' />
              </NavLink>
              {
                key.map((item, i) => {
                  return (
                    <li
                      key={i}
                      onMouseEnter={() => setActiveMenu(item)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className='ml-6 uppercase relative group cursor-pointer flex items-center justify-center'>
                      <NavLink to={`/${item.toLowerCase()}`}>
                        <p>{item}<sup className='text-red-500 ml-1'>{data.menus[item][0].sup}</sup></p>
                      </NavLink>
                      {activeMenu === item && (
                        <div className="absolute top-5 bg-white shadow-lg p-4 w-64 grid grid-cols-1  gap-2">
                          {data.menus[item].map((subItem, index) => (
                            <div key={index}>
                              <h3 className="text-red-500 font-semibold">{subItem.category}</h3>
                              <ul className="text-sm">
                                {subItem.items.map((menuItem, i) => (
                                  <li key={i} className="hover:text-gray-700 cursor-pointer">
                                    <NavLink to={`/${item.toLowerCase()}/${menuItem.toLowerCase().replace(/\s+/g, "-")}`}>
                                      {menuItem}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                })
              }
            </ul>

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