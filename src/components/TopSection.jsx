import React from 'react'
import carousel from '../data/carousel.json'
console.log(carousel)
const abc = carousel.hero[0]

const TopSection = () => {
  return (
    <section className='w-full mt-30 p-[10px_100px_0]'>
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