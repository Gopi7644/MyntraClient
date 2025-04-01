import React from 'react'
import carousel from '../data/carousel.json'
import { useNavigate } from 'react-router-dom'
// console.log(carousel)
const abc = carousel.hero[0]

const TopSection = () => {
  const navigate = useNavigate()

  const handleTestPage = () => {
    navigate('/test')
  }

  return (
    <section className='w-full mt-30 p-[10px_100px_0]'>

      <button
        className='vertical-banner fixed z-10 top-30 right-0 bg-[#3d4152] text-white px-4 py-2'
        onClick={handleTestPage}
      >
        Test page
      </button>

      <div className='w-full'>
        <img src={abc.imageSix} alt="" />
      </div>
      <div className='w-full flex justify-between'>
        <img src={abc.imageFour} alt="" className='w-[618px]' />
        <img src={abc.imageFive} alt="" className='w-[618px]' />
      </div>
      <div className='w-full flex justify-between'>
        <img src={abc.imageTwo} alt="heroimage" className='w-[618px]' />
        <img src={abc.imageThree} alt="heroimage" className='w-[618px]' />
      </div>

    </section>
  )
}

export default TopSection