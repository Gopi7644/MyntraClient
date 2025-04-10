import React, { useContext } from 'react'
import { DataContext } from '../Context/Context'
const Category = () => {
  const { data, loading, error } = useContext(DataContext)
  if (loading) return ;
  if (error) return ;
  const headingImage = data.carousel.hero[0].headingImage
  const footerImage = data.carousel.hero[0].footerImage
  const cat = data.carousel.category
  // console.log(data)
  return (
    <section className='w-[500px] md:w-[1435px]'>
      <img src={headingImage} alt="heading Image" className='p-[0_100px]' />
      <ul className='grid  grid-cols-2 md:grid-cols-6 items-center justify-center p-[0_30px] md:p-[0_100px]'>
        {
          cat.map((item, i) => {
            return (
              <li 
              className='flex justify-center items-center'
              key={i}>
                <img src={item.image_url} alt="" />
              </li>
            )
          })
        }
      </ul>
      <img src={footerImage} alt="heading Image" className='p-[0_30px] md:p-[0_100px]' />
    </section>
  )
}

export default Category