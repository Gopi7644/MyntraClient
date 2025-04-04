import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import React, { useContext, useState, } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import { DataContext } from "../Context/Context";

const links = [
  {
    id: "a",
    icon: <FaRegUser />,
    name: "Profile",
    url: "/profile",
    submenu: [
      { name: "My Account", url: "/profile/account" },
      { name: "Orders", url: "/profile/orders" },
      { name: "Settings", url: "/profile/settings" }
    ]
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
];

const Header = () => {
  const { data, setData, loading, setLoading, error, setError, activeMenu, setActiveMenu } = useContext(DataContext)
  const [activeLink, setActiveLink] = useState(null);

  if (loading) return <h2 className="mt-30 text-center font-bold text-20">Loading...</h2>;
  if (error) return <h2 className="mt-30 text-center text-red-500">Error: {error}</h2>;
  // console.log(data)
  const key = Object.keys(data.menus)
  // const abc = data.menus
  // console.log(abc)

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
                  // console.log(key)
                  return (
                    <li
                      key={i}
                      onMouseEnter={() => setActiveMenu(item)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className='ml-6 uppercase relative group cursor-pointer flex items-center justify-center'>
                      <NavLink to={`/${item.toLowerCase()}`}>
                        <p>{item}<sup className='text-red-500 ml-1'>{data.menus[item][0].sup}</sup></p>
                        {/* {console.log(item)}
                        {console.log(data.menus[item][0].sup)} */}
                      </NavLink>
                      {activeMenu === item && (
                        <div className="absolute top-5 bg-white shadow-lg p-4 w-64 grid grid-cols-1  gap-2">
                          {data.menus[item].map((subItem, index) => {
                            // console.log(subItem)
                            return (
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
                            );
                          })}
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

            <div className="flex items-center justify-center text-center gap-6">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveLink(link.id)}
                  onMouseLeave={() => setActiveLink(null)}
                >
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `flex items-center flex-col justify-center transition duration-300 ease-in-out 
                      ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"}`
                    }
                    aria-label={link.name}
                    title={link.name}
                  >
                    <p className="text-[24px]">{link.icon}</p>
                    <span className="text-sm">{link.name}</span>
                  </NavLink>

                  {link.submenu && activeLink === link.id && (
                    <div className="absolute w-[290px] left-1/2 -translate-x-1/2 top-[45px] p-[25px_20px_15px] z-10 shadow-md transition-opacity duration-200 ease-out bg-white text-[#3e4152] border border-[#f5f5f6] opacity-100 visible text-left">
                      <p className="font-bold ">{data.profile.title}</p>
                      <p className=" text-[14px]">{data.profile.description}</p>

                      <NavLink to={data.profile.links[0].url}>
                        <button className="bg-transparent border border-[#3d415239] text-[#ea0c6d] font-semibold hover:border-[#ff00a2] cursor-pointer mt-2 p-[2px_8px] rounded-md">{data.profile.links[0].text}</button>
                      </NavLink>
                      <hr className="my-3 border-[#52528a57]" />

                      {data.profile.links.slice(1, 6).map((subItem, i) => (
                        <NavLink
                          key={i}
                          to={subItem.url}
                          className=" block text-gray-700 hover:font-bold text-sm py-1"
                        >
                          <p>{subItem.text} {subItem.text === 'Myntra Insider' && <span className="text-white bg-[#ff006f] rounded text-[10px] p-[1px_4px]">{data.profile.links[5].tag}</span>}</p>
                        </NavLink>
                      ))}

                      <hr className="my-3 border-[#52528a57]" />

                      {data.profile.links.slice(7).map((subItem, i) => (
                        <NavLink
                          key={i}
                          to={subItem.url}
                          className="block text-gray-700 hover:hover:font-bold text-sm py-1"
                        >
                          {subItem.text}
                        </NavLink>
                      ))}            
                    </div>

                  )}

                </div>
              ))}
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Header