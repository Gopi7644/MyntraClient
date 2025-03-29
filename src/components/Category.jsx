import React from 'react'
import carousel from '../data/carousel.json'
console.log(carousel.hero[0].headingImage)
const headingImage = carousel.hero[0].headingImage
const cat = carousel.category
const Category = () => {
  return (
    <section className='w-1435px mt-[-120px]'>
        <img src={headingImage} alt="heading Image" className='p-[0_100px]'/>
        <ul className='grid grid-cols-6 items-center justify-center p-[0_100px]'>
            {
             cat.map((item, i) => {
                console.log(item)
                return (
                    <li key={i}>
                        <img src={item.image_url} alt="" />
                    </li>
                )
             })   
            }
        </ul>
    </section>
  )
}

export default Category