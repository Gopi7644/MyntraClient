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
    url: "/login",
    submenu: true,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  if (loading) return <h2 className="mt-30 text-center font-bold text-20">Loading...</h2>;
  if (error) return <h2 className="mt-30 text-center text-red-500">Error: {error}</h2>;
  // console.log(data)
  const key = Object.keys(data.menus)
  // const abc = data.menus
  // console.log(abc)

  return (
    <>
      <header className='h-[80px] text-[#fff] fixed top-0  right-0 left-0 box-shadow w-[500px] border md:w-full z-50 bg-[#fff] shadow'>
        <nav className='flex justify-between items-center h-full'>
          <div className='flex items-center justify-between gap-10  text-black'>
            <div className='flex items-center justify-between'>
              {/* Hamburger for mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
              </button>
              {/* Logo for mobile */}
              <NavLink to={'/'} className='md:hidden'>
                <img
                  className='w-25 mx-2'
                  src='https://images.indianexpress.com/2021/01/myntra.png' alt='Myntra logo' />
              </NavLink>
            </div>

            <ul
              className={`flex flex-col md:flex-row md:items-center gap-4 uppercase text-sm font-bold 
  ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex px-4`}
            >
              {/* Logo */}
              <li className="flex justify-center md:justify-start w-full md:w-auto">
                <NavLink to={'/'}>
                  <img
                    className='w-32 md:w-24'
                    src='https://images.indianexpress.com/2021/01/myntra.png'
                    alt='Myntra logo'
                  />
                </NavLink>
              </li>

              {/* Main Menu */}
              {key.map((item, i) => (
                <li
                  key={i}
                  className='relative group cursor-pointer'
                  onMouseEnter={() => window.innerWidth >= 768 && setActiveMenu(item)}
                  onMouseLeave={() => window.innerWidth >= 768 && setActiveMenu(null)}
                  onClick={() =>
                    window.innerWidth < 768 &&
                    setActiveMenu((prev) => (prev === item ? null : item))
                  }
                >
                  <NavLink to={`/${item.toLowerCase()}`}>
                    <p className="flex items-center justify-between md:justify-center px-2 md:px-4 py-2">
                      {item}
                      <sup className='text-red-500 ml-1'>
                        {data.menus[item][0].sup}
                      </sup>
                    </p>
                  </NavLink>

                  {/* Dropdown */}
                  {activeMenu === item && (
                    <div
                      className={`${window.innerWidth >= 768
                          ? "absolute top-full left-0  w-[900px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                          : "grid grid-cols-1"
                        } bg-white shadow-lg p-4 z-50 gap-4`}
                    >
                      {data.menus[item].map((subItem, index) => (
                        <div key={index}>
                          <h3 className="text-red-500 font-semibold mb-1">{subItem.category}</h3>
                          <ul className="text-sm space-y-1">
                            {subItem.items.map((menuItem, i) => (
                              <li key={i} className="hover:text-pink-600">
                                <NavLink
                                  to={`/${item.toLowerCase()}/${menuItem.toLowerCase().replace(/\s+/g, "-")}`}
                                >
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
              ))}
            </ul>


            <div className='hidden md:flex relative'>
              <input
                placeholder='Search for products, brands and more'
                className='w-full sm:w-[300px] md:w-[400px] h-[40px] rounded-md p-[8px_45px_10px] outline-none bg-[#f5f5f6]'
                type="text" />
              <button className='absolute bg-[#f5f5f6] w-[40px] h-[40px] rounded-l-md p-[8px_10px_10px] left-0 border-r-1 border-[#e0e0e0]'>
                <IoIosSearch />
              </button>
            </div>

            <div className="flex items-center justify-center text-center gap-4 md:gap-6">
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


        {/* for mobile devices */}
        <div className='md:hidden relative w-[450px] mb-2'>
          <input
            placeholder='Search for products, brands and more'
            className='w-full sm:w-[300px] md:w-[400px] h-[40px] rounded-md p-[8px_45px_10px] outline-none bg-[#f5f5f6] text-black'
            type="text" />
          <button className='absolute bg-[#f5f5f6] w-[40px] h-[40px] rounded-l-md p-[8px_10px_10px] left-0 border-r-1 border-[#e0e0e0] text-black'>
            <IoIosSearch />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header