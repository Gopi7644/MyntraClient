import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavData from '../data/NavData.json'
import Navbar from '../components/Navbar'
const key = Object.keys(NavData.menus)
// console.log(NavData.menus.STUDIO[0].sup)
// console.log(`keys: ${key} length: ${key.length}`)

const TestPage = () => {
  const navigate = useNavigate()

  const handleTestPage = () => {
    navigate(-1)
  }
  return (
    <>
      <nav className='w-full border p-[10px_20px] my-30'>

        {/* <ul className='grid grid-cols-7 w-[700px] mx-auto  border'>
          {
            key.map((item, i) => {
              return (
                <li key={i} className='text-[14px] my-5 '>
                  <NavLink to={NavData.menus[item].url} className='text-[#212121] font-bold'>
                    <p>{item}<sup className='text-red-500 ml-1 uppercase'>{NavData.menus[item][0].sup}</sup></p>
                  </NavLink>
                </li>
              )
            })
          }
        </ul> */}


        <ul className="flex space-x-6">
          {
          key.map((item, i) => (
            <li key={i}>
              <NavLink to={`/${item.toLowerCase()}`} className="hover:text-yellow-400">
              <p>{item}<sup className='text-red-500 ml-1 uppercase'>{NavData.menus[item][0].sup}</sup></p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Navbar />
      <button
        className='bg-[#3d4152] text-white px-4 py-2 rounded-md mb-5'
        onClick={handleTestPage}>Go Back</button>
    </>
  )
}

export default TestPage